import React from 'react';
import { customStylesMap, ValidHTMLElements } from '@/config/markdown/styles';

const parseHTMLwithCustomStyles = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const elements: React.ReactNode[] = [];

    const isSelfClosingTag = (tagName: string) => {
        // List of common self-closing tag names
        const selfClosingTags = [
            'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'
        ];

        return selfClosingTags.includes(tagName);
    };

    const traverse = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const tagName = element.tagName.toLowerCase();

            if (element.childNodes.length === 0 && isSelfClosingTag(tagName)) {
                return React.createElement(tagName, { key: elements.length });
            }
            const attributes: { [key: string]: string } = {};

            // Extract attributes
            for (let i = 0; i < element.attributes.length; i++) {
                const attr = element.attributes[i];
                attributes[attr.name] = attr.value;
            }


            // add custom styles to the nodes
            const customStyles: React.CSSProperties = customStylesMap[tagName as ValidHTMLElements] ?? {};

            const children: React.ReactNode[] = [];

            // Recursively parse children
            for (let i = 0; i < element.childNodes.length; i++) {
                const childNode = element.childNodes[i];
                const child = traverse(childNode);
                if (child) {
                    children.push(child);
                }
            }

            return React.createElement(
                tagName,
                { ...attributes, style: customStyles, key: elements.length },
                children
            );
        }
    };

    doc.body.childNodes.forEach((node) => {
        const element = traverse(node);
        if (element) {
            elements.push(element);
        }
    });

    return elements;
};

export default parseHTMLwithCustomStyles;

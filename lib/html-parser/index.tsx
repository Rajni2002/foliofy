import React from 'react';

const parseHTML = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const elements: React.ReactNode[] = [];

    const traverse = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const tagName = element.tagName.toLowerCase();
            const attributes: { [key: string]: string } = {};

            // Extract attributes
            for (let i = 0; i < element.attributes.length; i++) {
                const attr = element.attributes[i];
                attributes[attr.name] = attr.value;
            }

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
                { ...attributes, key: elements.length },
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

export default parseHTML;

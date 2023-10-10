// for file access
import fs from "fs";
import path from "path";
import util from "util"
// for cn - className merge
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const readJSONdocs = async (directoryPath: string): Promise<object[] | object> => {
  // promisifying - callback functions
  const readDirectory = util.promisify(fs.readdir);
  const readFile = util.promisify(fs.readFile);
  try {
    const files = await readDirectory(process.cwd() + directoryPath);
    const jsonFiles = files.filter((file) => path.extname(file) === '.json');

    const jsonDatas = await Promise.all(jsonFiles.map(async (file) => {
      // Construct the full path to the JSON file
      const filePath = path.join(process.cwd(), directoryPath, file);
      try {
        const data = await readFile(filePath, "utf8");
        const jsonData = JSON.parse(data);
        return jsonData;
      } catch (err) {
        console.log(err);
      }
    }))
    return jsonDatas;
  } catch (err) {
    return ({ err });
  }
}

const getReadLocalMd = async (filePath: string) => {
  // Specify the path to your Markdown file
  const markdownFilePath = path.join(process.cwd(), filePath);

  try {
    // Read the contents of the Markdown file as a string
    const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');
    // return the markdownContent
    return markdownContent
  } catch (error) {
    return error;
  }
}

const convertMarkdownToHtml = (markdownText: string) => {
  // Convert headers (e.g., ## Header => <h2>Header</h2>)
  markdownText = markdownText.replace(/^(#+)\s*(.*)$/gm, function (_, hashes, text) {
    const level = hashes.length;
    return `<h${level}>${text}</h${level}>`;
  });

  // Convert lists (e.g., - Item 1 => <ul><li>Item 1</li></ul>)
  markdownText = markdownText.replace(/^\s*-\s+(.*)$/gm, '<ul><li>$1</li></ul>');

  // Convert bold (e.g., **bold** => <strong>bold</strong>)
  markdownText = markdownText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert italic (e.g., *italic* => <em>italic</em>)
  markdownText = markdownText.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Convert links (e.g., [Link](url) => <a href="url">Link</a>)
  markdownText = markdownText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Convert blockquotes (e.g., > Quote => <blockquote>Quote</blockquote>)
  markdownText = markdownText.replace(/^>\s*(.*)$/gm, '<blockquote>$1</blockquote>');

  // Convert code blocks (e.g., ```code``` => <pre><code>code</code></pre>)
  markdownText = markdownText.replace(/```([\s\S]+?)```/g, '<pre><code>$1</code></pre>');

  // Convert inline code (e.g., `code` => <code>code</code>)
  markdownText = markdownText.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Wrap normal text containing formatting in <p> tags
  markdownText = markdownText.replace(/(^|<br>)([^<]+)(?=<br>|$)/g, function (match, p1, p2) {
    // Don't wrap if it's already in a special HTML tag
    if (/^<\w+>|<\/\w+>$/.test(p2)) {
      return p1 + p2;
    } else {
      return p1 + '<p>' + p2.trim() + '</p>';
    }
  });

  // Replace <br> with line breaks
  markdownText = markdownText.replace(/<br>/g, '<br>');

  return markdownText;
}

const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://example.com"; // https://v2ds.netlify.app

  return base_url;
};

export { readJSONdocs, cn, getReadLocalMd, convertMarkdownToHtml, checkEnvironment };

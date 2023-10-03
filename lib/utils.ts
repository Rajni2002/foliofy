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
    const files = await readDirectory(directoryPath);
    const jsonFiles = files.filter((file) => path.extname(file) === '.json');

    const jsonDatas = await Promise.all(jsonFiles.map(async (file) => {
      // Construct the full path to the JSON file
      const filePath = path.join(directoryPath, file);
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

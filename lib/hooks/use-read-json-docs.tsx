import { useEffect, useState } from 'react';
import fs from "fs";
import path from 'path';

const root_path = "../..";

type FilePathType = `/${string}`;

type ErrorType = NodeJS.ErrnoException | object

type JsonInfo = {
    data: object[] | null;
    error: ErrorType | null,
    loading: Boolean;
}

const useReadJSONdocs = (filePath: FilePathType): JsonInfo => {
    const [data, setData] = useState<object[] | null>(null);
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<ErrorType | null>(null);


    useEffect(() => {
        const directoryPath = root_path + filePath;
        // Read the directory
        fs.readdir(directoryPath, (err, files) => {
            setLoading(true);
            if (err) {
                setError({ err });
                setLoading(false);
            }

            // Filter and process only JSON files
            const jsonFiles = files.filter((file) => path.extname(file) === '.json');

            // Loop through the JSON files
            jsonFiles.forEach((file, index) => {
                // Construct the full path to the JSON file
                const filePath = path.join(directoryPath, file);

                // Read and parse the JSON file
                fs.readFile(filePath, 'utf8', (readErr, data) => {
                    if (readErr) {
                        setError({ err: readErr });
                        setLoading(false);
                    }

                    try {
                        const jsonData = JSON.parse(data);
                        setData(prev => [...(prev ?? []), jsonData])
                    } catch (parseErr) {
                        setError({ err: parseErr });
                        setLoading(false);
                    }
                });
            });
        });

    }, [filePath])

    return {
        data,
        error,
        loading
    }
};

export default useReadJSONdocs;

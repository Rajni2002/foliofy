import { exec } from 'child_process'

// Execute the Git command to show remote information
exec('git remote show origin', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }

    const outputLines = stdout.split('\n');
    const fetchUrlLine = outputLines.find(line => line.startsWith('  Fetch URL: '));

    if (fetchUrlLine) {
        const fetchUrl = fetchUrlLine.trim().replace('Fetch URL: ', '');
        console.log('Fetch URL:', fetchUrl);
        exec(`open "https://vercel.com/new/import?s=${fetchUrl}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.error(`Error: ${stderr}`);
                return;
            }

            console.log(stdout);
        })
    } else {
        console.log('Fetch URL not found for "origin" remote.');
    }
});

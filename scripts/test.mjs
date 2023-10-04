import { exec } from "child_process"

const directoryToCheck = './'; // Replace with the actual path

// Run the 'lsof' command to list processes using the directory
exec(`lsof +D "${directoryToCheck}" -F json`, (error, stdout) => {
    console.log("Hello");
    if (error) {
        console.error(`Error running 'lsof': ${error.message}`);
        process.exit(1);
    }

    console.log("up& running");

    try {
        const lsofOutput = JSON.parse(stdout);
        console.log('Lsof Output (as JSON):', lsofOutput);
    } catch (parseError) {
        console.error('Error parsing lsof output as JSON:', parseError.message);
        process.exit(1);
    }
});

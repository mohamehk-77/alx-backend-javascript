process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const r = process.stdin.read();

    if (r) {
        process.stdout.write(`Your name is: ${r}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
const http = require('http');
const url = require('url');
const fs = require('fs').promises;

const port = 1245;

function countStudents(path) {
    return fs.readFile(path, 'utf-8')
        .then((data) => {
            const lines = data.split('\n').filter((line) => line.trim() !== '');

            if (lines.length <= 1) {
                return 'Number of students: 0';
            }

            const students = lines
                .slice(1)
                .map((line) => line.split(','))
                .filter((line) => line.length === 4);

            const numberOfStudents = students.length;
            let output = `Number of students: ${numberOfStudents}\n`;

            const fields = {};
            students.forEach((student) => {
                const field = student[3];
                const firstname = student[0];
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            for (const [field, firstnames] of Object.entries(fields)) {
                output += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}\n`;
            }

            return output.trim();
        })
        .catch(() => 'Cannot load the database');
}

const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (parsedUrl.pathname === '/students') {
        const databasePath = process.argv[2];

        countStudents(databasePath)
            .then((studentsOutput) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`This is the list of our students\n${studentsOutput}`);
            })
            .catch(() => {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Cannot load the database');
            });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

function countStudents(filePath) {
    return fs.readFile(filePath, 'utf-8')
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

app.get('/', (req, res) => {
    res.status(200).type('text').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const databasePath = process.argv[2];

    countStudents(databasePath)
        .then((studentsOutput) => {
            res.status(200).type('text').send(`This is the list of our students\n${studentsOutput}`);
        })
        .catch(() => {
            res.status(500).type('text').send('Cannot load the database');
        });
});

app.listen(port, () => {
    console.log('...');
});

module.exports = app;
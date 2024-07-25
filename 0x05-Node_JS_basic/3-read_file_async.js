const fs = require('fs').promises;

function countStudents(path) {
    return fs.readFile(path, 'utf-8')
        .then((data) => {
            const lines = data.split('\n').filter((line) => line.trim() !== '');

            if (lines.length <= 1) {
                console.log('Number of students: 0');
                return;
            }

            const students = lines
                .slice(1)
                .map((line) => line.split(','))
                .filter((line) => line.length === 4);

            const numberOfStudents = students.length;
            console.log(`Number of students: ${numberOfStudents}`);

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
                console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
            }
        })

        .catch(() => {
            throw new Error('Cannot load the database');
        });
}

module.exports = countStudents;
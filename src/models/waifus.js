const fs = require('fs');

const data = {
    all: () => {
        const jsonData = JSON.parse(fs.readFileSync('./src/data.json', 'utf-8'));

        return jsonData;
    },
    random: () => {
        const jsonData = JSON.parse(fs.readFileSync('./src/data.json', 'utf-8'));
        const randomIndex = Math.floor(Math.random() * jsonData.length);

        return jsonData[randomIndex];
    }
}

module.exports = data;
const fs = require("fs");

const readFile = (path: string): string => {
    try {
        return fs.readFileSync(path, "utf-8");
    } catch (error) {
        console.log(error);
        return "";
    }
};

const textToJson = (text: string): object | void => {
    try {
        return JSON.parse(text);
    } catch (error) {
        console.error(error);
        return;
    }
};

const writeFile = (text: string): void => {
    try {
        fs.writeFileSync("../bd.json", JSON.stringify(textToJson(text)), "utf-8");
    } catch (error) {
        console.error(error);
    }
};

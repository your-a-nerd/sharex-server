const fs = require("fs");

function timestamp() {
    const date = new Date;
    const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    const formattedDate = `${m[date.getMonth()]}-${date.getDate()}-${date.getFullYear()}`
    const formattedDateLog = `${date.getDate()}-${m[date.getMonth()]}-${date.getFullYear()}`

    return [
      `\x1b[96m${formattedDate} | ${formattedTime}:\x1b[0m`,
      `${formattedDateLog}`,
      `${formattedDate} | ${formattedTime}:`
    ];
};

const loggerMiddleware = (text: String) => {
    const tm = timestamp();
    console.log('\x1b[92mLOG\x1b[0m', '-', tm[0], text);
    if (!fs.existsSync(`./data/logs/`)) fs.mkdirSync(`./data/logs/`, { recursive: true });
    fs.appendFileSync(`./data/logs/${tm[1]}.log`, `${'Log - ' + tm[2] + text}\n`);
}

export default loggerMiddleware
// const {log, url } = require("./logger"); // This is common JS Module System of importing, which is Old now ES Modules are used............
import { totalMemory, freeMemory } from "./Modules/ES6Module/OSModule.js"; // This is ES6 Module System of importing, which is New now............

// console.log(log,'log');
console.log(totalMemory,'totalMemory');
const meta = import.meta;
console.log('import meta', meta)
console.log('import meta', meta)
// console.log(url);

// log('accessing log from logger module in App module')

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.readline = void 0;
const logger = __importStar(require("./utils/logger"));
const promises_1 = require("node:readline/promises");
const node_process_1 = require("node:process");
const OrangeMoney_1 = require("./OrangeMoney");
exports.readline = (0, promises_1.createInterface)({ input: node_process_1.stdin, output: node_process_1.stdout });
const TIMEOUT_DURATION = 10000;
async function askWithTimeout(question) {
    return Promise.race([
        exports.readline.question(question),
        new Promise((resolve) => setTimeout(() => {
            resolve(null);
            logger.logError('\nTimeout! Please try again.');
            exports.readline.close();
            process.exit(0);
        }, TIMEOUT_DURATION)),
    ]);
}
async function main() {
    logger.log('\n----------------------------');
    logger.logInfo('Welcome to Orang Money');
    logger.log('----------------------------');
    logger.log('1. Show My Account.');
    logger.log('2. Deposit to account.');
    logger.log('3. Make WithDraw.');
    logger.log('4. Make Transfert.');
    logger.log('5. Exit.');
    const userInput = await askWithTimeout('Please enter your choice: ');
    switch (userInput) {
        case '1': {
            (0, OrangeMoney_1.showAccount)();
            main();
            break;
        }
        case '2': {
            const depositAmount = await askWithTimeout('Enter the amount of you want to deposit: ');
            if (!depositAmount) {
                logger.logError('Amount are required.');
                main();
                break;
            }
            (0, OrangeMoney_1.depositToAccount)(parseFloat(depositAmount));
            main();
            break;
        }
        case '3': {
            const amount = await askWithTimeout('Enter amount: ');
            if (!amount) {
                logger.logError('Amount are required.');
                main();
                break;
            }
            (0, OrangeMoney_1.makeWithDraw)(parseFloat(amount));
            main();
            break;
        }
        case '4': {
            logger.logError('This feature is not implemented yet.');
            main();
            break;
        }
        case '5':
            logger.log('Goodbye!');
            exports.readline.close();
            process.exit(0);
            break;
        default:
            logger.log('Invalid choice.');
            exports.readline.close();
            break;
    }
}
main();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logDebug = exports.logWarning = exports.logInfo = exports.logSuccess = exports.logError = exports.log = void 0;
const log = (message) => console.log(message);
exports.log = log;
const logError = (message) => console.error(`\x1b[31m${message}\x1b[0m`);
exports.logError = logError;
const logSuccess = (message) => console.log(`\x1b[32m${message}\x1b[0m`);
exports.logSuccess = logSuccess;
const logInfo = (message) => console.log(`\x1b[34m${message}\x1b[0m`);
exports.logInfo = logInfo;
const logWarning = (message) => console.log(`\x1b[33m${message}\x1b[0m`);
exports.logWarning = logWarning;
const logDebug = (message) => console.log(`\x1b[35m${message}\x1b[0m`);
exports.logDebug = logDebug;

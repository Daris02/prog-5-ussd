"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = logError;
exports.logSuccess = logSuccess;
exports.logInfo = logInfo;
exports.logWarning = logWarning;
exports.logDebug = logDebug;
function logError(error) {
    console.error(`\x1b[31m${error}\x1b[0m`);
}
function logSuccess(message) {
    console.log(`\x1b[32m${message}\x1b[0m`);
}
function logInfo(message) {
    console.log(`\x1b[34m${message}\x1b[0m`);
}
function logWarning(message) {
    console.log(`\x1b[33m${message}\x1b[0m`);
}
function logDebug(message) {
    console.log(`\x1b[35m${message}\x1b[0m`);
}

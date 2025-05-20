export const log = (message: string) => console.log(message);
export const logError = (message: string) => console.error(`\x1b[31m${message}\x1b[0m`);
export const logSuccess = (message: string) => console.log(`\x1b[32m${message}\x1b[0m`);
export const logInfo = (message: string) => console.log(`\x1b[34m${message}\x1b[0m`);
export const logWarning = (message: string) => console.log(`\x1b[33m${message}\x1b[0m`);
export const logDebug = (message: string) => console.log(`\x1b[35m${message}\x1b[0m`);

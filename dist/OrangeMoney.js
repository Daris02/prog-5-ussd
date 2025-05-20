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
exports.showAccount = showAccount;
exports.depositToAccount = depositToAccount;
exports.makeWithDraw = makeWithDraw;
exports.makeTransfert = makeTransfert;
exports.showAllAccount = showAllAccount;
const logger = __importStar(require("./utils/logger"));
const Account_1 = require("./Account");
const user1 = new Account_1.Account('Derek');
function showAccount() {
    logger.logInfo('Account Information:');
    logger.log(user1.toString());
    logger.log('----------------------------');
}
function depositToAccount(amount) {
    try {
        user1.deposit(amount);
        logger.logSuccess(`Deposited ${amount} Ar to account.`);
    }
    catch (error) {
        if (error instanceof Error) {
            logger.logError(error.message);
        }
        else {
            logger.logError(String(error));
        }
    }
}
function makeWithDraw(amount) {
    try {
        user1.withdraw(amount);
        logger.logSuccess(`Withdrew ${amount} Ar from account.`);
    }
    catch (error) {
        if (error instanceof Error) {
            logger.logError(error.message);
        }
        else {
            logger.logError(String(error));
        }
    }
}
function makeTransfert(amount, targetAccount) {
    try {
        user1.transfer(amount, targetAccount);
        logger.logSuccess(`Transferred ${amount} Ar to ${targetAccount.getUserName()}.`);
    }
    catch (error) {
        if (error instanceof Error) {
            logger.logError(error.message);
        }
        else {
            logger.logError(String(error));
        }
    }
}
function showAllAccount() {
    logger.logInfo('All Accounts:');
    logger.log(user1.toString());
    logger.log('----------------------------');
}

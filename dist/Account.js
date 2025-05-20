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
exports.Account = void 0;
const logger = __importStar(require("./utils/logger"));
class Account {
    constructor(userName) {
        this.userName = userName;
        this.balance = 0.0;
    }
    getUserName() {
        return this.userName;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            logger.logError('Deposit amount must be positive');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            logger.logError('Withdrawal amount must be positive and less than or equal to the balance');
        }
    }
    transfer(amount, targetAccount) {
        if (amount > 0 && amount <= this.balance) {
            this.withdraw(amount);
            targetAccount.deposit(amount);
        }
        else {
            logger.logError('Transfer amount must be positive and less than or equal to the balance');
        }
    }
    toString() {
        return `Account of ${this.userName} balance: ${this.balance.toFixed(2)} Ar`;
    }
}
exports.Account = Account;

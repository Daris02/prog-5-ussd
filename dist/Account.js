"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
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
            throw new Error('Deposit amount must be positive');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            throw new Error('Withdrawal amount must be positive and less than or equal to the balance');
        }
    }
    transfer(amount, targetAccount) {
        if (amount > 0 && amount <= this.balance) {
            this.withdraw(amount);
            targetAccount.deposit(amount);
        }
        else {
            throw new Error('Transfer amount must be positive and less than or equal to the balance');
        }
    }
    toString() {
        return `Account of ${this.userName} balance: ${this.balance.toFixed(2)} Ar`;
    }
}
exports.Account = Account;

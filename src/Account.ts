import * as logger from './utils/logger';

export class Account {
  private userName: string;
  private balance: number;
  
  constructor(userName: string) {
    this.userName = userName;
    this.balance = 0.0;
  }

  getUserName(): string {
    return this.userName;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    } else {
      logger.logError('Deposit amount must be positive');
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      logger.logError('Withdrawal amount must be positive and less than or equal to the balance');
    }
  }

  transfer(amount: number, targetAccount: Account): void {
    if (amount > 0 && amount <= this.balance) {
      this.withdraw(amount);
      targetAccount.deposit(amount);
    } else {
      logger.logError('Transfer amount must be positive and less than or equal to the balance');
    }
  }
  toString(): string {
    return `Account of ${this.userName} balance: ${this.balance.toFixed(2)} Ar`;
  }
}
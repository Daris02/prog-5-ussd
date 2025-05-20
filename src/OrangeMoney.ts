import * as logger from './utils/logger';
import { Account } from './Account';

const user1 = new Account('Derek');

export function showAccount() {
  logger.logInfo('Account Information:');
  logger.log(user1.toString());
  logger.log('----------------------------');
}

export function depositToAccount(amount: number) {
  try {
    user1.deposit(amount);
    logger.logSuccess(`Deposited ${amount} Ar to account.`);
  } catch (error) {
    if (error instanceof Error) {
      logger.logError(error.message);
    } else {
      logger.logError(String(error));
    }
  }
}

export function makeWithDraw(amount: number) {
  try {
    user1.withdraw(amount);
    logger.logSuccess(`Withdrew ${amount} Ar from account.`);
  } catch (error) {
    if (error instanceof Error) {
      logger.logError(error.message);
    } else {
      logger.logError(String(error));
    }
  }
}

export function makeTransfert(amount: number, targetAccount: Account) {
  try {
    user1.transfer(amount, targetAccount);
    logger.logSuccess(`Transferred ${amount} Ar to ${targetAccount.getUserName()}.`);
  } catch (error) {
    if (error instanceof Error) {
      logger.logError(error.message);
    } else {
      logger.logError(String(error));
    }
  }
}

export function showAllAccount() {
  logger.logInfo('All Accounts:');
  logger.log(user1.toString());
  logger.log('----------------------------');
}

import * as logger from './utils/logger';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { depositToAccount, makeWithDraw, showAccount } from './OrangeMoney';

export const readline = createInterface({ input, output });
const TIMEOUT_DURATION = 10_000;

async function askWithTimeout(question: string): Promise<string | null> {
  return Promise.race([
    readline.question(question),
    new Promise<string | null>((resolve) =>
      setTimeout(() => {
        resolve(null);
        logger.logError('\nTimeout! Please try again.');
        readline.close();
        process.exit(0);
      }, TIMEOUT_DURATION),
    ),
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
      showAccount();
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
      depositToAccount(parseFloat(depositAmount));
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
      makeWithDraw(parseFloat(amount));
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
      readline.close();
      process.exit(0);
      break;

    default:
      logger.log('Invalid choice.');
      readline.close();
      break;
  }
}

main();

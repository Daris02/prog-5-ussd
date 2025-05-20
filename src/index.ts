import * as logger from './utils/logger';
import {
  addThings,
  cancelReservation,
  makeLocation,
  showAllThingsReserved,
  showAllThingsWithState,
} from './Location';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

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
        process.exit(1);
      }, TIMEOUT_DURATION),
    ),
  ]);
}

async function main() {
  logger.log('\n----------------------------');
  logger.logInfo('Welcome to Locationable');
  logger.log('----------------------------');
  logger.log('1. All Things.');
  logger.log('2. Add Things.');
  logger.log('3. Make Location.');
  logger.log('4. Cancel reservation.');
  logger.log('5. Exit.');
  const userInput = await askWithTimeout('Please enter your choice: ');

  switch (userInput) {
    case '1': {
      showAllThingsWithState();
      const choice = await askWithTimeout('Do you want reserve? (y/n): ');
      if (choice && choice.toLowerCase() === 'y') {
        const name = await askWithTimeout('Enter the name of the thing: ');
        if (!name) {
          logger.logError('Name are required.');
          main();
          break;
        }
        makeLocation(name);
      }
      main();
      break;
    }

    case '2': {
      const thingName = await askWithTimeout('Enter the name of the thing (REQUIRED): ');
      let description = await askWithTimeout('Enter the description of the thing: ');
      if (!thingName) {
        logger.logError('Name are required.');
        main();
        break;
      }
      if (description === null) description = '';
      if (!addThings(thingName, description)) logger.logWarning('Please retry again!!!');
      main();
      break;
    }

    case '3': {
      const reserveName = await askWithTimeout('Enter name of thing you want to reserved: ');
      if (!reserveName) {
        logger.logError('Name are required.');
        main();
        break;
      }
      makeLocation(reserveName);
      main();
      break;
    }

    case '4': {
      if (showAllThingsReserved() == 0) main();
      const cancelName = await askWithTimeout('Enter name of thing you want to cancel: ');
      if (!cancelName) {
        logger.logError('Name are required.');
        main();
        break;
      }
      cancelReservation(cancelName);
      main();
      break;
    }

    case '5':
      logger.log('Goodbye!');
      readline.close();
      break;

    default:
      logger.log('Invalid choice.');
      readline.close();
      break;
  }
}

main();

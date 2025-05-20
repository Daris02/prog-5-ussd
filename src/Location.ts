import * as logger from './utils/logger';
import Locationable from './Locationable';
const car = new Locationable('Car', 'car description');
const house = new Locationable('House', 'house description');
const allThings = [car, house];

export function makeLocation(name: string) {
  const thing = allThings.find((thing) => thing.name.toLowerCase() === name.toLowerCase());
  if (thing && thing.isAvailable()) {
    thing.setReserver();
    logger.logSuccess(`${thing.name} reserved.`);
    return;
  }
  if (thing && !thing.isAvailable()) {
    logger.logError(`${thing.name} already reserved.`);
    return;
  } else {
    logger.logError(`${name} not found.`);
    return;
  }
}

export function showAllThingsWithState() {
  logger.logInfo('All Locationable things with state:');
  for (let i = 0; i < allThings.length; i++) {
    const thing = allThings[i];
    logger.log('\t- ' + thing.toString());
  }
}
export function showAllThingsReserved() {
  logger.logInfo('All Locationable things reserved:');
  const allThingsReserved = allThings.filter((thing) => !thing.isAvailable());
  if (allThingsReserved.length == 0) {
    logger.logInfo('No things reserved.');
    return 0;
  }
  for (let i = 0; i < allThingsReserved.length; i++) {
    const thing = allThingsReserved[i];
    logger.log('\t- ' + thing.toString());
  }
}

export async function addThings(name: string, description: string) {
  if (!name) {
    logger.logError('Name are required.');
    return false;
  }

  if (allThings.find((thing) => thing.name.toLowerCase() === name.toLowerCase())) {
    logger.logWarning(`${name} already exists.`);
    return false;
  }

  const newThing = new Locationable(name, description);
  allThings.push(newThing);
  logger.logSuccess(`${name} added successfully.`);
  return true;
}

export function cancelReservation(name: string) {
  const thing = allThings.find((thing) => thing.name.toLowerCase() === name.toLowerCase());
  if (!thing) {
    logger.logError(`${name} not found.`);
    return;
  }

  if (thing && thing.isAvailable()) {
    logger.logError(`${name} is not reserved.`);
    return;
  }

  if (thing && !thing.isAvailable()) {
    thing.setAvailable();
    logger.logSuccess(`${name} reservation cancelled.`);
    return;
  }
}

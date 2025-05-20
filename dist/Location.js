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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLocation = makeLocation;
exports.showAllThingsWithState = showAllThingsWithState;
exports.showAllThingsReserved = showAllThingsReserved;
exports.addThings = addThings;
exports.cancelReservation = cancelReservation;
const logger = __importStar(require("./utils/logger"));
const Locationable_1 = __importDefault(require("./Locationable"));
const car = new Locationable_1.default('Car', 'car description');
const house = new Locationable_1.default('House', 'house description');
const allThings = [car, house];
function makeLocation(name) {
    const thing = allThings.find((thing) => thing.name.toLowerCase() === name.toLowerCase());
    if (thing && thing.isAvailable()) {
        thing.setReserver();
        logger.logSuccess(`${thing.name} reserved.`);
        return;
    }
    if (thing && !thing.isAvailable()) {
        logger.logError(`${thing.name} already reserved.`);
        return;
    }
    else {
        logger.logError(`${name} not found.`);
        return;
    }
}
function showAllThingsWithState() {
    logger.logInfo('All Locationable things with state:');
    for (let i = 0; i < allThings.length; i++) {
        const thing = allThings[i];
        logger.log('\t- ' + thing.toString());
    }
}
function showAllThingsReserved() {
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
async function addThings(name, description) {
    if (!name) {
        logger.logError('Name are required.');
        return false;
    }
    if (allThings.find((thing) => thing.name.toLowerCase() === name.toLowerCase())) {
        logger.logWarning(`${name} already exists.`);
        return false;
    }
    const newThing = new Locationable_1.default(name, description);
    allThings.push(newThing);
    logger.logSuccess(`${name} added successfully.`);
    return true;
}
function cancelReservation(name) {
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Locationable {
    constructor(name, description) {
        this.name = name;
        this.description = description || '';
        this.state = true;
    }
    setReserver() {
        return this.state = false;
    }
    setAvailable() {
        return this.state = true;
    }
    ;
    isAvailable() {
        return this.state;
    }
    toString() {
        return `${this.name} (${this.description}) - [${this.state ? 'Available' : 'Reserved'}]`;
    }
}
exports.default = Locationable;

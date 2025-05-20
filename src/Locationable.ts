export default class Locationable {
  name: string;
  description?: string;
  state: boolean;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description || '';
    this.state = true;
  }

  setReserver() {
    return this.state = false;
  }
  
  setAvailable() {
    return this.state = true;
  };

  isAvailable() {
    return this.state;
  }

  toString() {
    return `${this.name} (${this.description}) - [${this.state ? 'Available' :  'Reserved'}]`;
  }
}

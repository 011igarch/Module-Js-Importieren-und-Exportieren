// Blaupause

export class Car {
  constructor(marke, baujahr, ps) {
    this.marke = marke;
    this.baujahr = baujahr;
    this.ps = ps;
  }

  drive(speed) {
    console.log(`Fährt: ${this.marke} + ${speed} km/h`);
  }

  honk() {
    console.log(`Hupt: ${this.marke}`);
  }
}

export class Ship {
  constructor(marke, baujahr, ps) {
    this.marke = marke;
    this.baujahr = baujahr;
    this.ps = ps;
  }

  drive(speed) {
    console.log(`Fährt: ${this.marke} + ${speed} Knoten`);
  }

  honk() {
    console.log(`Hupt: ${this.marke} sehr laut`);
  }
}
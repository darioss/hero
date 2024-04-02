const { random } = require("node-forge");

class heroes {
  constructor(name, age, type, atack) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.atack = atack;
  }

  atacking() {
    console.log(`The ${this.type} atacked using ${this.atack}`)
  }
}

let dataHeroes = [
  { "name": "Gandalf", "age": 837, "type": "wizard", "atack": "magic" },
  { "name": "William Wallace", "age": 45, "type": "warrior", "atack": "sword" },
  { "name": "Mr. Varis", "age": 52, "type": "monk", "atack": "martial arts" },
  { "name": "Jiraya", "age": 22, "type": "ninja", "atack": "shuriken" }
];

for (let i = 0; i < dataHeroes.length; i++) {
  let hero = new heroes(dataHeroes[i].name, dataHeroes[i].age, dataHeroes[i].type, dataHeroes[i].atack);
  hero.atacking();
}

let newHero = new heroes("Harvey Specter", 40, "Inteligent", "words");
newHero.atacking();

let sortingBattle = dataHeroes[Math.floor(Math.random() * 4)];

if (sortingBattle.type === "wizard") {
  console.log(`${newHero.name} says: ${sortingBattle.name}, you have no power in here...`);
} else if (sortingBattle.type === "warrior") {
  console.log(`${newHero.name} says: ${sortingBattle.name}, you need to sharpen your sword...`);
} else if (sortingBattle.type === "monk") {
  console.log(`${newHero.name} says: ${sortingBattle.name}, why do you wear a dress?`);
} else if (sortingBattle.type === "ninja") {
  console.log(`${newHero.name} says: ${sortingBattle.name}, wake me up when you finish assembling your armor...`);
}
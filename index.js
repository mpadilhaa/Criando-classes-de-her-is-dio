class Heroi {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atack() {
    if (this.type === "mago") {
      console.log(`O ${this.type} atacou usando magia`);
    } else if (this.type === "guerreiro") {
      console.log(`O ${this.type} atacou usando espada`);
    } else if (this.type === "monge") {
      console.log(`O ${this.type} atacou usando artes marcias`);
    } else if (this.type === "ninja") {
      console.log(`O ${this.type} atacou usando shuriken`);
    } else {
      console.log(`O ${this.type} atacou usando sua destreza`);
    }
  }
}

const mago = new Heroi("Chucknoris", 150, "guerreiro");

mago.atack();

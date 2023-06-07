export class Character {
  constructor(damage) {
    this.health = 1000;
    this.level = 1;
    this.isAlive;
    this.damage = damage;
  }

  attack(defender) {
    if (this.damage > defender.health) {
      defender.health = 0;
    } else {
      defender.health -= this.damage;
    }
  }

  heal(defender) {
    if (defender.health < 1000) {
      defender.health += 500;
    }
  }

  get isAlive() {
    if (this.health > 0) {
      return true;
    } else {
      return false;
    }
  }
}

import { describe, it, expect } from "vitest";
import { Character } from "./rpgKata";

describe("character", () => {
  it("character is defined", () => {
    const character = new Character();

    expect(character).toBeDefined();
  });

  it("health is equal to 1000", () => {
    const character = new Character();

    const health = character.health;

    expect(health).toEqual(1000);
  });

  it("character has level 1", () => {
    const character = new Character();

    const level = character.level;

    expect(level).toEqual(1);
  });

  it("character is alive", () => {
    const character = new Character();

    const isAlive = character.isAlive;

    expect(isAlive).toBeTruthy();
  });

  it("character makes damage to other character", () => {
    const defender = new Character();
    const attacker = new Character(200);

    attacker.attack(defender);

    expect(defender.health).toEqual(800);
  });

  it("character dies when health becomes 0", () => {
    const defender = new Character();
    const attacker = new Character(1000);

    attacker.attack(defender);

    expect(defender.isAlive).toBeFalsy();
  });

  it("is alive when receives 999 damage", () => {
    const defender = new Character();
    const attacker = new Character(999);

    attacker.attack(defender);

    expect(defender.isAlive).toBeTruthy();
  });

  it("drops the health to 0 when damage exceeds health", () => {
    const defender = new Character();
    const attacker = new Character(1200);

    attacker.attack(defender);

    expect(defender.health).toBe(0);
  });

  it("character heals another character", () => {
    const defender = new Character();
    const healer = new Character();

    healer.heal(defender);

    expect(defender.health).toBe(1500);
  });
});

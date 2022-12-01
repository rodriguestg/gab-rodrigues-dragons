import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  protected _race: Race;
  protected _archetype: Archetype;
  protected _maxLifePoints: number;
  protected _lifePoints: number;
  protected _strength: number;
  protected _defense: number;
  protected _dexterity: number;
  protected _energy: Energy;
  constructor(public name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  setLifePoints(damage: number) {
    this._lifePoints -= damage;
    if (this._lifePoints <= 0) { this._lifePoints = -1; }
  }

  setUpLifePoints(life: number) {
    this._lifePoints = life;
  }

  setMaxLifePoints(value: number) {
    const maxRace = this._race.maxLifePoints;
    this._maxLifePoints += value;
    if (this._maxLifePoints > maxRace) { this._maxLifePoints = maxRace; }
  }

  setStrength(value: number) {
    this._strength += value;
  }

  setDexterity(value: number) {
    this._dexterity += value;
  }
  
  setDefense(value: number) {
    this._defense += value;
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;
    if (damage > 0) {
      this.setLifePoints(damage);
    } else { this.setLifePoints(1); }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter) {
    enemy.receiveDamage(this.strength);
  }

  special(enemy: Fighter | SimpleFighter) {
    enemy.receiveDamage(this._strength * 2);
  }

  levelUp() {
    this.setDefense(getRandomInt(1, 10));
    this.setDexterity(getRandomInt(1, 10));
    this.setMaxLifePoints(getRandomInt(1, 10));
    this.setStrength(getRandomInt(1, 10));
    this._energy.amount = 10;
    this.setUpLifePoints(this._maxLifePoints);
  }
}

export default Character;
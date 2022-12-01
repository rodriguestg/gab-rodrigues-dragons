import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }

  setLifePoints(damage: number) {
    this._lifePoints -= damage;
    if (this._lifePoints <= 0) { this._lifePoints = -1; }
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this.lifePoints;
    if (damage > 0) {
      this.setLifePoints(damage);
    } else { this.setLifePoints(1); }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;
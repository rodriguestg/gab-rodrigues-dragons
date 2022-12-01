import Fighter from './Fighter';

interface SimpleFighter {
  lifePoints: number,
  strength: number,
  attack(enemy: SimpleFighter | Fighter): void,
  receiveDamage(attackPoints: number): number,
}

export default SimpleFighter;

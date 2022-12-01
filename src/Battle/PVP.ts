import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected _player1: Character | Fighter;
  protected _player2: Character | Fighter;
  constructor(
    protected player: Character | Fighter,
    protected character: Character | Fighter,
  ) {
    super(player);
    this._player1 = player;
    this._player2 = character;
  }
  
  battle(): void {
    this._player1.attack(this._player2);
    this._player2.attack(this._player1);
    if (this._player1.lifePoints < 0 || this._player2.lifePoints < 0) {
      return console.log('FINISH');
    }
    this.battle();
  }
  
  fight(): number {
    this.battle();  
    return super.fight();
  }
}

export default PVP;

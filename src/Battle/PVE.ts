import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  protected _player: Character | Fighter | SimpleFighter;
  protected _monsters: Monster[] | SimpleFighter[];
  constructor(
    protected player: Character | Fighter | SimpleFighter,
    protected monsters: Monster[] | SimpleFighter[],
  ) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }
  
  battle(): void {
    const monstersList = this._monsters;
    for (let i = 0; i < monstersList.length; i += 1) {
      if (monstersList[i].lifePoints > 0) {
        this._player.attack(monstersList[i]);
        monstersList[i].attack(this._player);
      }
      if (this._player.lifePoints < 0) {
        console.log('FINISH');
        break;
      }      
    }
  }
  
  fight(): number {
    this.battle();  
    return super.fight();
  }
}

export default PVE;

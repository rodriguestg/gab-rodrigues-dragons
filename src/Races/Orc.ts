import Race from './Race';

class Orc extends Race {
  protected _maxLifePoints: number;
  protected static racesInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    this.racesInstances += 1;
    return this.racesInstances;
  }
  
  get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Orc;

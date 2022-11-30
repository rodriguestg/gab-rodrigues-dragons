import Archetypes from './Archetype';

class Ranger extends Archetypes {
  protected _energyType: string;
  protected static archetypeInstances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    this.archetypeInstances += 1;
    return this.archetypeInstances;
  }
  
  get energyType(): string { return this._energyType; }
}

export default Ranger;

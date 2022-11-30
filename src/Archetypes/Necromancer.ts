import Archetypes from './Archetype';

class Necromancer extends Archetypes {
  protected _energyType: string;
  protected static archetypeInstances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    this.archetypeInstances += 1;
    return this.archetypeInstances;
  }
  
  get energyType(): string { return this._energyType; }
}

export default Necromancer;

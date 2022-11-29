abstract class Race {
  constructor(protected _name: string, protected _dexterity: number) { }

  static createdRacesInstances(): number { throw new Error('Not implemented'); }

  get name() { return this._name; }
  get dexterity() { return this._dexterity; }

  abstract get maxLifePoints(): number;
}

export default Race;

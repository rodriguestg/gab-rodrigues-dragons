import { EnergyType } from '../Energy';

abstract class Archetypes {
  constructor(
    protected _name: string,
    protected _special: number = 0,
    protected _cost: number = 0,
  ) {}

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name() { return this._name; }
  get special() { return this._special; }
  get cost() { return this._cost; }

  abstract get energyType(): EnergyType;
}

export default Archetypes;
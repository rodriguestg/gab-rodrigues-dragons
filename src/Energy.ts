type EnergyType = string;
const type: EnergyType = 'mana' || 'stamina';

interface Energy {
  amount: number,
  type_: typeof type,

}

export default Energy;

export { EnergyType };
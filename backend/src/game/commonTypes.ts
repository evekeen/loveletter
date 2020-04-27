// Copied from UI TODO extract to common module

export enum CardType {
  Guard = 1,
  Priest = 2,
  Baron = 3,
  Handmaid = 4,
  Prince = 5,
  King = 6,
  Countess = 7,
  Princess = 8
}

export const cardNameMapping = {
  [CardType.Guard]: 'Guard',
  [CardType.Priest]: 'Priest',
  [CardType.Baron]: 'Baron',
  [CardType.Handmaid]: 'Handmaid',
  [CardType.Prince]: 'Prince',
  [CardType.King]: 'King',
  [CardType.Countess]: 'Countess',
  [CardType.Princess]: 'Princess'
}
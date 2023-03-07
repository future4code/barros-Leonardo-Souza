import { Character } from "./model/Character";

export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
    return false;
  }

  return true;
};


// função de perfomar ataque

// export function performAttack(defender:Character, attacker:Character) {
//   if (!validateCharacter(defender) || !validateCharacter(attacker)) {
//     throw new Error("Invalid character");
//   }
//   if (defender.defense > attacker.strength) {
//     defender.defense = defender.defense - attacker.strength
//   } else if (defender.defense < attacker.strength) {
//     let attackValue = attacker.strength - defender.defense
//     defender.defense = 0
//     defender.life = defender.life - attackValue
//   }
//   return (
//     {
//       defender:defender,
//       attacker:attacker
//     }
//   )
// }


// inversão de dependencias


export function performAttack(defender: Character, attacker: Character, validator: (input: Character) => boolean) {
    let isDefenderValid: boolean = validator(defender)
    let isAttackerValid: boolean = validator(attacker)

    if (!isDefenderValid || !isAttackerValid) {
      return false
    }
    if (defender.defense > attacker.strength) {
      defender.defense = defender.defense - attacker.strength
    } else if (defender.defense < attacker.strength) {
      let attackValue = attacker.strength - defender.defense
      defender.defense = 0
      defender.life = defender.life - attackValue
    }
    return (
      {
        defender: defender,
        attacker: attacker
      }
    )
  }

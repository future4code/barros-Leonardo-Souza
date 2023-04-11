import { performAttack, validateCharacter } from "../src/index";
import { caseInvalid, caseValid } from "../src/mocks/validateCharacterMock";
import { Character } from "../src/model/Character";



describe("Test validateCharacter", () => {
    it("test for empty name", () => {
        const output = validateCharacter({
            name:"",
            life: 1500,
            strength: 300,
            defense: 500,
        })
        expect(output).toBe(false)
    })
    it("test for 0 life value", () => {
        const output = validateCharacter({
            name:"Astrodev",
            life: 0,
            strength: 300,
            defense: 500,
        })
        expect(output).toBe(false)
    })
    it("test for 0 strength value", () => {
        const output = validateCharacter({
            name:"Astrodev",
            life: 1500,
            strength: 0,
            defense: 500,
        })
        expect(output).toBe(false)
    })
    it("test for 0 defense value", () => {
        const output = validateCharacter({
            name:"Astrodev",
            life: 1500,
            strength: 300,
            defense: 0,
        })
        expect(output).toBe(false)
    })
    it("test for negative values", () => {
        const output = validateCharacter({
            name:"Astrodev",
            life: 1500,
            strength: 300,
            defense: -100,
        })
        expect(output).toBe(false)
    })
    it("test if all values are valid", () => {
        const output = validateCharacter({
            name:"Astrodev",
            life: 1500,
            strength: 300,
            defense: 500,
        })
        expect(output).toBe(true)
    })
})

// utilizando mock para testes
describe("test performAttack with mocks case valid", () => {
    test("Should perform attack", () => {
    
        const attacker: Character = {
          name: "Scorpion",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        performAttack(defender, attacker, caseValid)
    
        expect(defender.life).toEqual(1300);
        expect(caseValid).toHaveBeenCalled();
        expect(caseValid).toHaveBeenCalledTimes(2);
        expect(caseValid).toHaveReturnedTimes(2);
      });
})

describe("test performAttack with mocks case invalid", () => {
    test("Shouldnt perform attack", () => {
    
        const attacker: Character = {
          name: "Scorpion",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        performAttack(defender, attacker, caseInvalid)
    
        expect(defender.life).toEqual(1500)
        expect(caseInvalid).toHaveReturned()
        expect(caseInvalid).toHaveBeenCalled()
        expect(caseInvalid).toHaveBeenCalledTimes(2)
  

      });
})


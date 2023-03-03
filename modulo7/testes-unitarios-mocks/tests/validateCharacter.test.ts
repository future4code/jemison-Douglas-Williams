import { describe } from "node:test";
import { validateCharacter } from "../src/validateCharacter";

describe("Test validateCharacter", () => {
    test("Test 1: Should return false for empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            defense: 300,
            strength: 600
        })

        expect(result).toBe(false)
    })

    test("Test 2: Should return false for 0 life", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 0,
            defense: 300,
            strength: 600
        })

        expect(result).toBe(false)
    })

})


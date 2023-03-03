import { Character } from "./model/Characters";

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        !input.life ||
        !input.defense ||
        !input.strength
     ) {
        return false
    }
    
    if (input.life <= 0 || input.defense <= 0 || input.strength <= 0) {
        return false
    }
    
    return true
}
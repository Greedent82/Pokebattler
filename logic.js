const greedent = {
    name: 'Greedent',
    type: 'Normal',
    baseHP: 120,
    baseAttack: 95,
    baseDefense: 95,
    baseSpecialAttack: 55,
    baseSpecialDefense: 75,
    baseSpeed: 20
}

const azumarill = {
    name: 'Azumarill',
    type: 'Water/Fairy',
    baseHP: 100,
    baseAttack: 50,
    baseDefense: 80,
    baseSpecialAttack: 60,
    baseSpecialDefense: 80,
    baseSpeed: 50
}

function battle(pokemon1, pokemon2) {
    let pokemon1HP = pokemon1.baseHP;
    let pokemon2HP = pokemon2.baseHP;

    while (pokemon1HP > 0 && pokemon2HP > 0) {
        pokemon2HP -= Math.floor((pokemon1.baseAttack / pokemon2.baseDefense) * 10);
        console.log(`${pokemon1.name} attacks!`);
        console.log(`${pokemon2.name} has ${pokemon2HP} HP left`);
        pokemon1HP -= Math.floor((pokemon2.baseAttack / pokemon1.baseDefense) * 10);
        console.log(`${pokemon2.name} attacks!`);
        console.log(`${pokemon1.name} has ${pokemon1HP} HP left`);
    }

    if (pokemon1HP > 0) {
        return `${pokemon1.name} wins!`;
    } else {
        return `${pokemon2.name} wins!`;
    }
}

console.log(battle(greedent, azumarill))
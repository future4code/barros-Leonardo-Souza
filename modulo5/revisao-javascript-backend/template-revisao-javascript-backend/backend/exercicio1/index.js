function convertCelsius(celsius, fk) {

    if (typeof celsius !== "number") {
        return console.log(`Erro. Parametro invalido: ${celsius} `);
    } else if (typeof fk !== "string" || fk !== "F" && fk !== "f" && fk !== "K" && fk !== "k") {
        return console.log(`Erro. Parametro invalido: ${fk}`);
    }
 
    if (fk === "F" || fk === "f") {
       const conversion = celsius * 1.8 + 32
       console.log(`${celsius}º Celsius é equivalente a ${conversion} Fahrenheit`);
    } else if(fk === "K" || fk === "k") {
       const conversion = celsius + 273
       console.log(`${celsius}º Celsius é equivalente a ${conversion} Kelvin`);
    } 
}

convertCelsius(48, "k")
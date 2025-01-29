//Snack 1

//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
//Infine stampa separatamente i 3 array.

const cars = [
    {marca : "fiat", modello : "punto", alimentazione : "benzina"},
    {marca : "opel", modello : "corsa", alimentazione : 'diesel'},
    {marca : "mercedes", modello : "classe A", alimentazione : "benzina"},
    {marca : "peugeot", modello : "208", alimentazione : "elettrico"},
    {marca : "tesla", modello : "model 3", alimentazione : "elettrico"},
    {marca : "audi", modello : "a4", alimentazione : "benzina"},
    {marca : "toyota", modello : "corolla", alimentazione : "metano"},
    {marca : "renault", modello : "clio", alimentazione : "gpl"},
    {marca : "skoda", modello : "fabia", alimentazione : "benzina"},
    {marca : "volkswagen", modello : "passat", alimentazione : "metano"}
];

const benzina = [];
const diesel = [];
const resto = [];

for (const key in cars) {
    if (cars[key].alimentazione === "benzina") {
        benzina.push(cars[key]);
    } else if (cars[key].alimentazione === "diesel") {
        diesel.push(cars[key]);
    } else {
        resto.push(cars[key]);
    }
}
console.log(benzina);
console.log(diesel);
console.log(resto);
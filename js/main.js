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

const petrol = [];
const diesel = [];
const remaining = [];

for (const key in cars) {
    if (cars[key].alimentazione === "benzina") {
        petrol.push(cars[key]);
    } else if (cars[key].alimentazione === "diesel") {
        diesel.push(cars[key]);
    } else {
        remaining.push(cars[key]);
    }
}
console.log(petrol);
console.log(diesel);
console.log(remaining);


//Snack 2

//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

//Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const strings = ['pippo', 'PLUTO', 'Paperino'];

const newStrings = [];

for (const key in strings) {
    newStrings.push(strings[key].charAt(0).toUpperCase() + strings[key].slice(1).toLowerCase());
}
console.log(newStrings);


//Snack 3

//Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.
//Es:
//[
  //{ nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  //{ nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  //{ nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
//]
//Crea un nuovo array con la lista dei mammiferi.

const animals = [
    { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
    { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
    { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" }
];

const mammals = [];

for (const key in animals) {
    if (animals[key].classe === "mammiferi") {
        mammals.push(animals[key]);
    }
}
console.log(mammals);


//Snack 4

//Crea un array di oggetti che rappresentano delle persone.
//Ogni persona ha un nome, un cognome e un'età.
 
//Partendo da questo, crea quindi un nuovo array inserendo, per ogni persona, una frase (stringa) con il nome e cognome e l'indicazione se può guidare, in base all'età.

const people = [
    {nome : "mario", cognome : "rossi", eta : 10},
    {nome : "luigi", cognome : "verdi", eta : 15},
    {nome : "elena", cognome : "bianchi", eta : 20},
    {nome : "riccardo", cognome : "gialli", eta : 25},
    {nome : "marco", cognome : "arancioni", eta : 30},
    {nome : "francesco", cognome : "blu", eta : 35},
    {nome : "giovanni", cognome : "turchese", eta : 40},
];

const canDrive = [];

for (const key in people) {
    if (people[key].eta >= 18) {
        canDrive.push(people[key].nome + " " + people[key].cognome + " può guidare");
    } else {
        canDrive.push(people[key].nome + " " + people[key].cognome + " non può guidare");
    }
}
console.log(canDrive);
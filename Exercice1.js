// Q 1
function Voiture(model, marque, annee, type, craburant) {
    this.model =  model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.craburant = craburant;
}
// Q 2

const voitures = [
    new Voiture("Model S", "Tesla", 2022, "Sedan", "Électrique"),
    new Voiture("Civic", "Honda", 2019, "Compact", "Essence"),
    new Voiture("Mustang", "Ford", 2021, "Sport", "Essence"),
    new Voiture("Leaf", "Nissan", 2020, "Compact", "Électrique"),
    new Voiture("3 Series", "BMW", 2022, "Sedan", "Diesel")
];

// Q 3
const Hyundai = (serie, hybride) => {
    this.serie = serie;
    this.hybride = hybride;
    this.alarmer = () => {
        console.log("Alarmer ;")
    }
}
Hyundai.prototype = Object.create(Voiture.prototype, {
    constructor: {
        value: Hyundai,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

const Ford = (option) => {
    this.option = option;
}
Ford.prototype = Object.create(Voiture.prototype, {
    constructor: {
        value: Ford,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

// Q 4
console.table(voitures.sort((a,b)=>a.annee-b.annee));
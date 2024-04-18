// Q 1 -- Q 2
// Etudiant
let Etudiant = {
    nom:'',
    prenom: '',
    age: 0,
    cne: ''
};
Etudiant.etudier = function () {
    return "Etudiant "+ this.nom + " " + this.prenom + " " + " étudie !";
}

let Professeur = {
    nom: '',
    age: 0,
    cin: ''
};
Professeur.enseigner = function () {
    return "Professeur "+ this.nom + " " + " enseigne !";
}

const names = [
    { nom: 'Smith', prenom: 'John' },
    { nom: 'Johnson', prenom: 'Michael' },
    { nom: 'Williams', prenom: 'Jessica' },
    { nom: 'Jones', prenom: 'Ashley' },
    { nom: 'Brown', prenom: 'Christopher' }
]

let etudiants = [];
for (let i = 0; i < 5; i++) {
    const etudiant = {...Etudiant}
    etudiant.nom = names[i].nom;
    etudiant.prenom = names[i].prenom;
    etudiant.age = 20 + i;
    etudiant.cne = "K00000" + i;
    etudiants.push(etudiant);
}


let professeurs = [];
for (let i = 0; i < 5; i++) {
    const professeur = {...Professeur}
    professeur.nom = names[i].nom;
    professeur.age = 20 + i;
    professeur.cne = "K00000" + i;
    professeurs.push(professeur);
}


console.table(etudiants.sort((a,b)=>a.nom.localeCompare(b.nom)))
console.table(professeurs.sort((a,b)=>a.nom.localeCompare(b.nom)))
//exercice 1//
console.log(5+2);
console.log(5+"2");
console.log(5*2);
console.log(5*"2")

//exercice 2//
let i = 0;
i = i+1;
i = i+1;
i = i+1;
console.log(i)

//exercice 3//
const Prenom = "Jessim";
const Nom = " Amahal";
const nomComplet = Prenom + Nom;
console.log(nomComplet);

//ex 6//
let mot = "chateau";

console.log(mot.replace("t" , "p"));

//ex 7//
let mot2 ="abracadabra"
console.log(mot2[0])

//ex 2//
let francais = 11;
let maths = 8;
let geographie = 14;
let musique = 18;

let moyenne = (francais + maths + geographie + musique) / 4;
    
console.log(moyenne);

//ex 1//
let anneeNaissance = 2003;
let anneeFuture = 2024;
let age = anneeFuture - anneeNaissance;

console.log(age);

//role: dire bonjour à quelqu'un
//parametre: prenom
// retourne : bonjour +prenom

function direBonjour (prenom){
    console.log(`bonjour ${prenom}`)

}

direBonjour("Ludivine")
direBonjour("Kim")
direBonjour("Abdoul")

//role:additionner deux chiffres
//paramétres: 2 valeurs/chiffre
//return:resultat addition

function addition (a,b){
    return a+b
}

let resultat = addition(5,6)

console.log(resultat)


//ex 1//
function moyenneEleve (mathematiques, francais, chimie, italien){
console.log("la moyenne est :"+(mathematiques + francais + chimie + italien) /4 ) 
}

moyenneEleve(11,7,15,13)

//ex 2//
let stockDePommes = 4

function stock (stokInitial,NombreAenlever){
    return StockInitial-NombreAenlever
}

let resultat = soustraction(4,2)

console.log(resultat)

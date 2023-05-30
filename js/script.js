// array vuoto
let arrayRandom = [];
//richiamo il div dal DOM
let num_random = document.getElementById('numeri-random');
// variabile dei secondi
let second = 30
//funzione per creare i numeri
function create_num(min, max){
    for(let i=0; i<5; i++){
        arrayRandom[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arrayRandom;
}
//invocare la funzione
create_num(1, 100)
console.log(arrayRandom)

num_random.innerText = arrayRandom;
// fa sparire i numeri dopo 30 secondi
setTimeout(function(){
    num_random.innerText = '';

}, second * 1000);

let arrayUtente = [];
let arrayCorr= [];
let arraySba= [];
let numeroTot = 0;
// faccio apparire i promt dopo 30 secondi dove l'utente inserisce i numeri e controllo quale sia sbagliato e quale sia giusto
setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        let num_utente = parseInt(prompt(`Inserisci il numero ${i + 1}`));
        arrayUtente.push(num_utente);
    }

    console.log(arrayUtente);
// confrontare i numeri inseriti dall'utente con i numeri casuali generati
    for (let i = 0; i < arrayRandom.length; i++) {
        let numbers = arrayRandom[i];

        if (arrayUtente.includes(numbers)) {
            arrayCorr.push(arrayUtente[i]);
            numeroTot++;
        } else {
            arraySba.push(arrayUtente[i]);
        }
    }

    // mostro il risultato con un alert
    alert(`
        Hai indovinato ${numeroTot} numeri.
        I numeri che hai indovinato sono: ${arrayCorr}
        I numeri che hai sbagliato sono: ${arraySba}
    `);
}, (second + 1) * 1000);
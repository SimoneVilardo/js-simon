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
setTimeout(function(){
    let num1_utente = parseInt(prompt('Inserisci il primo numero'));
    let num2_utente = parseInt(prompt('Inserisci il secondo numero'));
    let num3_utente = parseInt(prompt('Inserisci il terzo numero'));
    let num4_utente = parseInt(prompt('Inserisci il quarto numero'));
    let num5_utente = parseInt(prompt('Inserisci il quinto numero'));

    arrayUtente = [num1_utente, num2_utente, num3_utente, num4_utente, num5_utente]
    console.log(arrayUtente)
    for(let i = 0; i<arrayRandom.length; i++){
    let numbers = arrayRandom[i]
    console.log(numbers)
        if(arrayUtente.includes(numbers)){
            arrayCorr.push(arrayUtente[i]);
            num_tot++
        }
        else{
            arraySba.push(arrayUtente[i]);
            
        }

    }
// mostro il risultato con un alert
    alert(`
    Hai indovinato ${numeroTot}
    I numeri che hai indovinato sono: ${arrayCorr}
    I numeri che sbagliato sono: ${arraySba}
    `)

}, (second + 1) * 1000);
PROBLEMA: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

SOLUZIONE :
1.creo un array vuoto;
    1.1 creo una funzione per popolare l'array con 5 numeri casuali;

2.con la funzione setTimeout dopo 30 secondi rimuovo i numeri ;

3.con una seconda funzione setTimeout dopo 31 secondi creo  i promt dove l'utente può inserire i 5 numeri;
    3.1 unisco il risultato in un array;
    3.2con un ciclo for individuo i numeri corretti e quelli sbagliati;
    3.3 con un alert mostro il risultato a schermo;
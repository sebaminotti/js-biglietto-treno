// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare cent

// inizio col creare variabili e se cisono costanti del programmma

// primo commento programma: inseriamo variabili e dati

var passeggero = prompt("SALVE PASSEGGERO , INSERISCI NOME E COGNOME");
document.getElementById("passeggero").innerHTML=passeggero;

var eta = prompt("ORA INSERISCI LA TUA ETA' GRAZIE");
document.getElementById("eta").innerHTML= "LA TUA ETA' " + eta;

var km = prompt("ORA DIMMI : QUANTA STRADA VORRESTI PERCORRERE ?");
document.getElementById("km").innerHTML="KM PERCORSI : " + km 
const prezzoKmIntero = 0.21 ;
var totale ;


// applichiamo uno sconto del 20% al prezzo di 0.21 che corrisponde allo sconto giovani
var scontoGiovani = 0.21 / 100 * 80;




// applichiamo uno sconto del 40% al prezzo di 0.21 che corrisponde allo sconto anziani
var scontoAnziani = 0.21 / 100 * 60;









// aggiungiamo qualche controllo

if (eta < 10 ) {
alert("NON PUOI VIAGGIARE DA SOLO ,CHIEDI AD UN ADULTO DI ACCOMPAGNARTI")
} 

if (isNaN(eta) || isNaN(km)) {
    alert("PERFAVORE INSERIRE VALORI NUMERICI NON LETTERE!!!")
}

if (eta > 99) {
    alert("ATTENZIONE , PER VIAGGIARE TI SERVE UN ACCOMPAGNATORE")
}


//ora calcoliamo il prezzo del biglietto applicando sconti se e quando concesso

if (eta < 18) {
    totale = km * scontoGiovani ;
    totale = totale.toFixed(2)
    document.getElementById("biglietto").innerHTML= "Il totale è di: " + totale + " €"
    document.getElementById("sconto").innerHTML= " LO SCONTO APPLICATO è DEL 20% (SCONTO UTENTI JUNIOR)"
}
 
else if (eta >65){
    totale = km * scontoAnziani
    totale = totale.toFixed(2)
    document.getElementById("biglietto").innerHTML= "Il totale è di: " +  totale  + " €"
    document.getElementById("sconto").innerHTML= " LO SCONTO APPLICATO è DEL 40% (SCONTO UTENTI SENIOR)"
} 

else if (eta > 17 && eta <65) {
    totale = km * prezzoKmIntero
    totale = totale.toFixed(2)
    document.getElementById("biglietto").innerHTML= "Il totale è di: " + totale + " €"
    document.getElementById("sconto").innerHTML= " PREZZO INTERO (NESSUNO SCONTO APPLICABILE)"
}




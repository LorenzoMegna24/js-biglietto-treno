// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
  // prompt o form con età e km
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// let eta = prompt("Quanti anni hai?")
// console.log(eta);

// let chilometri = prompt("Quanti chilometri vuoi fare?")
// console.log(chilometri);

// const prezoalkm = 0.21

// let prezzo = chilometri * prezoalkm;
// console.log(prezzo);

// if( eta<18 ){
//    console.log(prezzo*0.2);
//  }else if( eta>65 ){
//   console.log(prezzo*0.4);
//  }else{
//   console.log(prezzo)
//  }

 function prezzoBiglietto(){
  let eta = document.getElementById('eta').value; 
  let chilometri = document.getElementById('chilometri').value; 
  const prezoalkm = 0.21

  let prezzo = chilometri * prezoalkm;
  console.log(prezzo);

  if( eta<18 ){
    document.writeln(prezzo*0.2 + "€")
    console.log(prezzo*0.2);
  }else if( eta>65 ){
    document.writeln(prezzo*0.4 + "€")
    console.log(prezzo*0.4);
  }else{
    document.writeln(prezzo)
    console.log(prezzo)
  }

 }
/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica:
usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console. 
*/
/*
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante,
realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare
il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, 
andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

//dichiaro le variabili per gli elementi del form HTML
const form = document.querySelector('form')
const nameField = document.getElementById('name')
const kmField = document.getElementById('km')
const ageField = document.getElementById('age-passenger')
console.log(form, nameField, kmField, ageField);

//dichiaro le variabili per gli elementi nelle cards html 
const nameEl = document.getElementById('namePassenger')
const offeringEl = document.getElementById('offering')
const priceEl = document.getElementById('price')
console.log(nameEl, offeringEl, priceEl);

//intercetto l'evento di invio del form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(nameField.value, kmField.value, ageField.value);
    //variabili per il calcolo del biglietto
    const name = nameField.value
    const distance = parseFloat(kmField.value);
    const ageCategory = ageField.value;
    //prezzo per km
    const priceKm = 0.21;
    let standardPrice = distance * priceKm
    //variabile di appoggio
    let discount = 0
    //condizioni in cui applicare lo sconto
    if (ageCategory === 'under18') {
        discount = 0.20;
    } else if (ageCategory === 'over65') {
        discount = 0.40
    }
    //calcolo eventuale sconto
    let priceDiscount = standardPrice * (1 - discount);
    //prezzo arrotondato a due decimali
    let ticketPrice = priceDiscount.toFixed(2)
    //stampo in console il costo del bilietto
    console.log(`Ciao ${name}, il prezzo del tuo biglietto è €${ticketPrice}`);
    //assegnazione dei valori agli elementi delle card
    nameEl.textContent = nameField.value
    priceEl.textContent = ticketPrice
})













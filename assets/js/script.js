/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica:
usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console. 
*/

//dichiaro le variabili per gli elementi HTML
const form = document.querySelector('form')
const nameField = document.getElementById('name')
const kmField = document.getElementById('km')
const ageField = document.getElementById('age-passenger')
console.log(form, nameField, kmField, ageField);

//intercetto l'evento di invio del form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(nameField.value, kmField.value, ageField.value);
})


//STEP 1: Chiedo all'utente: "Qual è il tuo nome?"
const name = prompt("Qual è il tuo nome?");
console.log(name);

//STEP 2: Chiedo all'utente: "Qual è il tuo cognome?"
const surname = prompt("Qual è il tuo cognome?");
console.log(surname);

//STEP 3: Chiedo all'utente: "Qual è il tuo colore preferito?"
const color = prompt("Qual è il tuo colore preferito?");
console.log(color);

//STEP 4: Creo una concatenazione tra i dati ricavati dalle risposte dell'utente
password = name + surname + color + '23';
console.log(password);

//STEP 5: La password così ottenuta viene stampata sulla pagina
prompt("Password: ", password);

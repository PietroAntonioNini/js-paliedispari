//PROGRAMMA PARI E DISPARI

//creo una funzione che mi genera un numero casuale da 1 a 5
function randomNumber5() {
    const random = Math.floor(Math.random() * 5) + 1;
    return random;
}

//creo una funzione per verificare che la somma sia pari o dispari
function pariODispari(sum) {
    if (sum % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

//inizializzo una variabile con la scelta pari o dispari dell'utente
let userChoice;

//aggiungo una funzione al click
document.querySelector("#play").addEventListener("click", 

    function() {
        //salvo una const con il numero casuale
        const randomNumber = randomNumber5();

        //salvo una const con il numero dell'utente
        const userNumber = Number(document.querySelector("#user-number").value);

        //modifico la let con la scelta pari o dispari
        userChoice = document.querySelector("#user-choice").value;

        if (userNumber < 1 || userNumber > 5 || userNumber === "" || userChoice ==="") {
            //stampo l'errore
            document.querySelector("#result").innerText = `Per favore, inserisci un numero valido da 1 a 5 e assicurati di aver scelto "pari" o "dispari".` ;

        } else {
            //sommo i due valori
            const sum = randomNumber + userNumber;

            //stampo il risultato
            document.querySelector("#result").innerText = `Il computer ha tirato ${randomNumber}: E' uscito ${pariODispari(sum)}!`;

            if (pariODispari(sum) == userChoice) {
                document.querySelector("#choice-result").innerText = "Hai indovinato 🎉";

            } else {
                document.querySelector("#choice-result").innerText = "Non hai indovinato 🥹";
            }
        }
    }
)



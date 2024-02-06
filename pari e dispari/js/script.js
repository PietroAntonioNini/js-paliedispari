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

//salvo una costante con il numero casuale
const randomNumber = randomNumber5();
console.log(randomNumber);

//aggiungo una funzione al click
document.querySelector("#play").addEventListener("click", 

    function() {
        const userNumber = Number(document.querySelector("#user-number").value);
        const sum = randomNumber + userNumber;
        console.log(sum);

        document.querySelector("#result").innerText = pariODispari(sum);
    }
)

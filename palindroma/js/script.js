//PROGRAMMA PAROLA PALINDROMA

//creo la function per verificare che la parola sia palindroma
document.querySelector("#play").addEventListener("click", 

    function() {

        //salvo la parola
        let userWord = document.querySelector("#user-word").value;
        //controllo la lunghezza della parola
        let wordLength = userWord.length;

        if(userWord == "" || wordLength < 2) {
            document.querySelector("#result").innerText = "Inserisci una parola di almeno 2 cifre!";

        } else {
            
            //controllo se palindroma o no
            for (let i = 0; i < wordLength / 2; i++) {
        
                if (userWord[i] !== userWord[wordLength - 1 - i]) {
                    document.querySelector("#result").innerText = "La parola non è palindroma!";
                    return;
                }
            }
        
            document.querySelector("#result").innerText = "La parola è palindroma!";
        }
    }
)


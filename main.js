// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

function true50(n1, n2) {
    if (n1 === 50 || n2 === 50 || n1 + n2 === 50) {
        return true
    } else return false
}

console.log(true50(10, 50));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function togliLettere(str, posizione) {
    let arr = str.split("")
    arr.splice(posizione, 1)
    return arr.join("")
}

console.log("massimiliano");
console.log(togliLettere("massimiliano", 3));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

function numeriCompresi(n1, n2) {
    if (((n1 >= 40 && n1 <= 60) || (n1 >= 70 && n1 <= 100)) && ((n2 >= 40 && n2 <= 60) || (n2 >= 70 && n2 <= 100))) {
        return true
    }
    else return false
}

console.log(numeriCompresi(40, 40));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

function nomeCitta(citta) {
    let parola = citta
    if (parola.startsWith("Los") || parola.startsWith("New")) {
        return parola
    } else return false
}

console.log(nomeCitta("Torino"));
console.log(nomeCitta("Los Angeles"));
console.log(nomeCitta("New York"));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L’array deve essere passato come parametro.


function sommArr(arr) {
    let somma = 0
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i]
    }
    return somma
}

let arrayNumeri = [10, 20, 30, 40, 50]

console.log(sommArr(arrayNumeri));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

function controlloNumeri(arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return false
    } else {
        return true
    }
}

let numeri1 = [2, 3, 4, 5]
let numeri2 = [5, 6, 7, 8, 9]
let numeri3 = [4, 7, 88, 1]

console.log(controlloNumeri(numeri1));
console.log(controlloNumeri(numeri2));
console.log(controlloNumeri(numeri3));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

function angoli(deg) {
    if (deg < 90) return "acuto"
    if (deg > 90 && deg < 180) return "ottuso"
    if (deg === 90) return "retto"
    if (deg === 180) return "piatto"
}

console.log(angoli(20));
console.log(angoli(120));
console.log(angoli(90));
console.log(angoli(180));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

function acronimo(frase) {
    let arrayParole = frase.split(" ")
    let temp = ""
    for (let i = 0; i < arrayParole.length; i++) {
        const parola = arrayParole[i]
        temp += parola.charAt(0)
    }
    return temp.toUpperCase()
}


console.log(acronimo("Fabbrica Italiana Automobili Torino"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESERCIZI EXTRA

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

function mostCommonChar(str) {
    // Crea un oggetto per memorizzare il numero di volte in cui ogni carattere appare nella stringa.
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    // Trova il carattere con il numero più alto di occorrenze.
    let maxChar = null;
    let maxCount = 0;
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    // Restituisce il carattere più usato.
    return maxChar;
}

console.log(mostCommonChar("massimilianooooo"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo.
//    Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.

function isAnagram(str1, str2) {
    // Converti le stringhe in minuscole e rimuovi la punteggiatura.
    str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

    // Controlla se le due stringhe hanno la stessa lunghezza.
    if (str1.length !== str2.length) {
        return false;
    }

    // Confronta i caratteri delle due stringhe.
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }

    // Le due stringhe sono anagrammi.
    return true;
}

console.log(isAnagram("ciao", "ciao"));
console.log(isAnagram("ciao", "arrivederci"));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri),
//ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].

// Funzione per verificare se due parole sono anagrammi
function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const sortedWord1 = word1.split("").sort().join("");
    const sortedWord2 = word2.split("").sort().join("");

    return sortedWord1 === sortedWord2;
}

// Funzione per filtrare gli anagrammi corretti
function filterCorrectAnagrams(word, possibleAnagrams) {
    const correctAnagrams = possibleAnagrams.filter(anagram => areAnagrams(word, anagram));
    return correctAnagrams;
}

// Esempio di utilizzo
const parola = "cartine";
const possibiliAnagrammi = ["carenti", "incerta", "espatrio"];
const anagrammiCorretti = filterCorrectAnagrams(parola, possibiliAnagrammi);

console.log(anagrammiCorretti); // Output: ["carenti", "incerta"]



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

function palindroma(parola) {

    if (parola.split("").reverse().join("") === parola) {
        return "è palindroma"
    } else {
        return "non è palindroma"
    }
}
console.log(palindroma("radar"));
console.log(palindroma("casa"));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

function contrario(num) {
    return Number(String(num).split("").reverse().join(""))
}

console.log(contrario(223));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Scrivi una funzione che accetti un numero positivo X come parametro. 
//La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.

// Es.

// X = 2
// '#'
// '##'

// X = 3
// '# '
// '## '
// '###'

function scala(x) {
    if (x < 0) return false
    for (let i = 1; i <= x; i++) {
        console.log("#".repeat(i))
    }
}

console.log(scala(10));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

function contrarioParola(par) {
    return par.split("").reverse().join("")
}

console.log(contrarioParola("ciao"));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.

// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]

function sottoArray(array, y) {
    let nuovo = []
    let numDiSottoArray = 0
    for (let i = 0; i < array.length; i++) {
        if (i % y === 0) numDiSottoArray++
    }
    console.log(numDiSottoArray)
    let start = 0

    for (let z = 0; z < numDiSottoArray; z++) {
        let temp = array.slice(start, start + y)
        start += y

        nuovo.push(temp)
    }
    return nuovo
}

console.log(sottoArray([1, 2, 3, 4, 5], 3))



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Scrivi una funzione che accetti un numero positivo X come parametro. 
//La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.

function piramide(x) {
    for (let i = 1; i <= x; i++) {
        const totali = x + x - 1
        const pieni = i + i - 1
        const spaziPerLato = totali - pieni
        console.log(
            `${" ".repeat(spaziPerLato / 2) +
            "#".repeat(pieni) +
            " ".repeat(spaziPerLato / 2)
            }`
        )
    }
}

console.log(piramide(10));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:

// Es.

// N = 2
// `[[1, 2],[4, 3]]`

// N = 3
// `[[1, 2, 3],[8, 9, 4],[7, 6, 5]]`

// N = 4
// `[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]`


function matrice(n) {
    const finale = []
    for (let i = 0; i < n; i++) {
        let temp = []
        for (let k = 0; k < n; k++) {
            temp.push(i)
        }
        finale.push(temp)
    }
    return finale
}

console.log(matrice(10));

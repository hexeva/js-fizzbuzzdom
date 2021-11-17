
// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.

// STAMPO IN CONSOLE NUMERI DA UNO A 100 USANDO CICLO FOR

for (let i = 1; i <= 100; i++) {
    // controllo
    console.log(i);

    // valuto se i numeri stampati sono multipli di 3 di 5 o di entrambi; comincio con il multiplo maggiore e creo una if

    if( (i % 3 == 0) && (i % 5 == 0) ){
     
        console.log('FizzBuzz');


    } else if (i % 5 == 0){

        console.log('buzz');


    } else if (i % 3 == 0){

        console.log('Fizz');


    }else 
        console.log(i);                  

}

console.log();
// fine ciclo for
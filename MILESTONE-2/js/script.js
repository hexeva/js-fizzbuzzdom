// Scrivi un programma che stampi i numeri da 1 a 100.

// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.


// creo la variabile che mi selezionerà quale elemnto io devo popolare

const boxContainer = document.querySelector('.box-container')


// CREO IL CICLO FOR


for ( let i = 1; i <= 100; i++){

    // mi creo la variabile testo
    let innerBox;

    if ( ( i % 3 == 0) && ( i % 5 == 0)){

        innerBox = 'FizzBuzz';

    } else if ( i % 5 == 0){

        innerBox = 'Buzz';

    } else if (i % 3 == 0){

        innerBox = 'Fizz';

    } else{
        innerBox = i;
    }



    // mi creo il nuovo elemento che dovrà popolare l'html

    let boxUnit =`
    <div class="box">${innerBox}</div>
    `;

    // vado a popolare il box container

    boxContainer.innerHTML += boxUnit;
    console.log(boxContainer)


}
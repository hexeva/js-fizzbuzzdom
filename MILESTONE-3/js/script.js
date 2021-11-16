// Scrivi un programma che stampi i numeri da 1 a 100.

// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.



// creo la variabile che mi selezionerà quale elemnto io devo popolare

const boxContainer = document.querySelector('.box-container')


// CREO IL CICLO FOR


for ( let i = 1; i <= 100; i++){

    // mi creo il nuovo elemento che dovrà popolare l'html

     let boxUnit =`
        <div class="box">${i}</div>
     `;

    // vado a popolare il box container

    boxContainer.innerHTML += boxUnit;
    console.log(boxContainer)


}
/**
 
getElementById(id) -> récupérer un element html par rapport à son id ex: getElementById("title")

querySelector(query) -> récupérer un element html par rapport à :
    - son id
    - sa classe
    - sa balise
    - ou quelconque selecteur comme en css

querySelector(".main-title")

querySelectorAll(query) -> récupérer TOUS les éléments qui correspondent à la recherche

*/

// const title = document.getElementById("title");

// title.style.fontFamily = "sans-serif";
// title.style.color = "red";

// const loginButton = document.getElementById("loginButton");

// // Ecouteur d'evenements / events listener
// loginButton.addEventListener("click", (event) => {
//   console.log("L'utilisateur a cliqué sur le bouton:", event);
// });

// const boxElement = document.querySelector('.box');
// const boxElements = document.querySelectorAll(".box");

// console.log(boxElements);
// const changeColorButton = document.getElementById("changeColorButton");

// let isColorChanged = false;

// boxElements.forEach((boxElement, index) => {
//   if (index % 2 === 0) {
//     boxElement.style.backgroundColor = "red";
//   } else {
//     boxElement.style.backgroundColor = "blue";
//   }
// });

// changeColorButton.addEventListener("click", () => {
//   // Si isColorChanged est sur false, alors je passe la couleur de fond de mon element boxElement en rouge sinon je le passe en bleu

//   //   Changer la couleur d'une boite, 1 fois sur deux (sur les multiples de 2)
//   boxElements.forEach((boxElement, index) => {
//     if (!isColorChanged) {
//       if (index % 2 === 0) {
//         boxElement.style.backgroundColor = "red";
//       } else {
//         boxElement.style.backgroundColor = "blue";
//       }
//     } else {
//       if (index % 2 === 0) {
//         boxElement.style.backgroundColor = "blue";
//       } else {
//         boxElement.style.backgroundColor = "red";
//       }
//     }
//   });

//   isColorChanged = !isColorChanged;
// });

// input event
// form event
const formElement = document.querySelector('form');

const formData = {
    firstName: '',
    lastName: '',
    email: ''
}

formElement.addEventListener('submit', (event) => {
    // Annuler le comportement par défaut du formulaire (refresh)
    event.preventDefault();
    console.log("Envoi du formulaire")
    console.log(formData);

    // Envoi des données vers le serveur
})

const inputElements = document.querySelectorAll('.input');

inputElements.forEach((inputElement) => {
    inputElement.addEventListener('input', (event) => {
        console.log(event)
        console.log("Variable: ",event.target.name);
        console.log("Valeur: ", event.target.value);

        formData[event.target.name] = event.target.value;
    })
})

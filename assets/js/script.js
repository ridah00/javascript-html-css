// ############### PGCD

// let r = 0;
// let continu = "o";
// while (continu == "o") {
//   let a = prompt("donner le premier nombre !!");
//   let b = prompt("donner le deuxieme nombre !!");
//   if (b == 0) {
//     console.log("le diviseurs ne peut pas etre 0");
//   } else {
//     r = 1;
//     while (r !== 0) {
//       r = a%b;
//       if (r!=0) {
//         a=b; b=r;
//       }
//     }
//     console.log("le PGCD des deux nombres est : " + b);
//   }
//   continu=prompt("voulez vous continuer ?? ")
// }

// ####################### Math.pow
// let nb=1;
// for (i=1;i<=64;i++){
// nb=nb*2;
// }
// console.log(nb);
// document.write(`<p> nmbre de grains est  ${nb} </p>`);
// document.write(`<p> nmbre de grains est  ${Math.pow(2,63)} </p>`);

// ################################
// let nb1 = prompt("donner le premier nombre");
// let nb2 = prompt("donner le deuxieme nombre");
// function calculer_pgcd(nb1, nb2) {
//   if (nb2 == 0) {
//     document.writeln("<p> le diviseurs ne peut pas etre 0. </p>");
//   } else {
//     rest = 1;
//     while (rest !== 0) {
//       rest = nb1 % nb2;
//       if (rest != 0) {
//         nb1 = nb2;
//         nb2 = rest;
//       }
//     }
//   }
//   return nb2;
// }
// document.writeln(` <h1> le PGCD de ${nb1} et ${nb2} est :  ${calculer_pgcd(nb1,nb2)} </h1> `);

// #####################################
// let le_nom = prompt("donner votre nom");
// function saluter(name_){
//     document.write("<h1> hello   " + name_ +"</h1>");
// }
// saluter(le_nom);
// ###################################

// function calculer_peri() {
//   let perim_ = 0;
//   switch (arguments.length) {
//     case 0:
//         console.log("pas de vealuer ");
//     case 1:
//       perim_ = arguments[0] * 4;
//       console.log("c'est un carée avec un perimetre de  " + perim_ + " m");
//       break;
//     case 2:
//       perim_ = (arguments[0] + arguments[1]) * 2;
//       console.log("c'est un rectangle avec un perimetre de  " + perim_ + " m");
//       break;
//     case 3:
//       perim_ = (arguments[0] + arguments[1]) +arguments[2];
//       console.log("c'est un triangle avec un perimetre de  " + perim_ + " m");
//       break;
//     default:
//         for (let i = 0; i < arguments.length; i++) {
//             perim_ += arguments[i];
//         }
//         console.log("c'est un polygon de : " + arguments.length  +  " cotés avec un perimetre de  " + perim_ + " m");
//         break;
//   }
// }
// calculer_peri(5, 1,5,5,5,5,5,5,5,5);

function getAlea(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

let nombreMin = 1;
let nombreMax = 10;
let bool = true;

let jsSection = document.getElementById("test");
let jsDiv = document.getElementById("test2");

let jsBouton = document.getElementById("dingue");
let jsBoutonReset = document.getElementById("reset");

let alea = getAlea(nombreMin, nombreMax)

let index = 3;

jsBoutonReset.addEventListener("click", () => location.reload());

jsBouton.addEventListener("click", function room() {

    let reponse = prompt("Devinez le nombre");

    if (reponse > alea) {
        if (index <= 1) {
            console.log(`Vous avez échoué. <br>Vous n'avez plus de tentative.<br> La réponse était ${alea}`);
            jsDiv.innerHTML = `<p>Vous avez échoué. <br>Vous n'avez plus de tentative.<br> La réponse était ${alea}</p>`;
            jsBouton.style.display = "none";
            jsBoutonReset.style.display = "inline-block";
            
        } else {
            console.log(`C'est moins. Il vous reste ${index-1} chances.`);
            jsDiv.innerHTML = `<p>C'est moins que ${reponse}. Il vous reste ${index-1} chances.</p>`;
            jsSection.style.backgroundColor = "#ee1202";
            index--;
        }

    } else if (reponse < alea) {
        if (index <= 1) {
            console.log(`Vous avez échoué. <br>Vous n'avez plus de tentative.<br> La réponse était ${alea}`);
            jsDiv.innerHTML = `<p>Vous avez échoué. <br>Vous n'avez plus de tentative.<br> La réponse était ${alea}</p>`;
            jsBouton.style.display = "none";
            jsBoutonReset.style.display = "inline-block";
        } else {
            console.log(`C'est plus. Il vous reste ${index-1} chances.`);
            jsDiv.innerHTML = `<p>C'est plus que ${reponse}. Il vous reste ${index-1} chances.</p>`;
            jsSection.style.backgroundColor = "#ee1202";
            index--;
        }
        
    } else if (reponse == alea) {
        console.log(`Vous avez trouvez le nombre mystère. Félicitation ! Il vous restait ${index-1} tentatives.`);
        jsDiv.innerHTML = `<p>Vous avez trouvez le nombre mystère. <br> Félicitation ! <br> Il vous restait ${index-1} tentatives.</p>`;
        jsSection.style.backgroundColor = "#00cd46";
        jsBouton.style.display = "none";
        jsBoutonReset.style.display = "inline-block"
    }
})



// <---------------- VERSION AVEC BOUTON INNACTIF ---------------->

// function room(event) {
//     event.stopPropagation();

//     let reponse = prompt("Devinez le nombre");

//     if (reponse > alea) {
//         if (index <= 1) {
//             jsDiv.innerHTML = `<p>Vous avez échoué.<br>La réponse était ${alea}</p>`;
//             jsBouton.removeEventListener("click", room); // 👈 On retire le listener
//         } else {
//             jsDiv.innerHTML = `<p>C'est moins que ${reponse}. Il vous reste ${index - 1} chances.</p>`;
//             jsSection.style.backgroundColor = "#ee1202";
//             index--;
//         }

//     } else if (reponse < alea) {
//         if (index <= 1) {
//             jsDiv.innerHTML = `<p>Vous avez échoué.<br>La réponse était ${alea}</p>`;
//             jsBouton.removeEventListener("click", room); // 👈 On retire le listener
//         } else {
//             jsDiv.innerHTML = `<p>C'est plus que ${reponse}. Il vous reste ${index - 1} chances.</p>`;
//             jsSection.style.backgroundColor = "#ee1202";
//             index--;
//         }

//     } else if (reponse == alea) {
//         jsDiv.innerHTML = `<p>Vous avez trouvé le nombre mystère !<br>Il vous restait ${index - 1} tentatives.</p>`;
//         jsSection.style.backgroundColor = "#00cd46";
//         jsBouton.removeEventListener("click", room); // 👈 On retire le listener
//     }
// }


// jsBouton.addEventListener("click", room);


// <---------------- VERSION DE BASE AVEC LA BOUCLE ---------------->


// for (let i = 3; i !== 0; i--) {
//     let reponse = prompt("Devinez le nombre");

//     if (reponse > alea) {
//         if (i == 1) {
//             console.log(`Vous avez échoué. <br>Vous n'avez plus de tentative.<br> La réponse était ${alea}`);
//             jsDiv.innerHTML = `<p>Vous avez échoué. <br>Vous n'avez plus de tentative.<br> La réponse était ${alea}</p>`;
//         } else {
//             console.log(`C'est moins. Il vous reste ${i-1} chances.`);
//             jsDiv.innerHTML = `<p>C'est moins. Il vous reste ${i-1} chances.</p>`;
//         }

//     } else if (reponse < alea) {
//         if (i == 1) {
//             console.log(`Vous avez échoué. <br>Vous n'avez plus de tentative.<br> La réponse était ${alea}`);
//             jsDiv.innerHTML = `<p>Vous avez échoué. <br>Vous n'avez plus de tentative.<br> La réponse était ${alea}</p>`;
//         } else {
//             console.log(`C'est plus. Il vous reste ${i-1} chances.`);
//             jsDiv.innerHTML = `<p>C'est plus. Il vous reste ${i-1} chances.</p>`;
//         }
        
//     } else if (reponse == alea) {
//         console.log(`Vous avez trouvez le nombre mystère. Félicitation ! Il vous restait ${i-1} tentatives.`);
//         jsDiv.innerHTML = `<p>Vous avez trouvez le nombre mystère. <br> Félicitation ! <br> Il vous restait ${i-1} tentatives.</p>`;
//         i = 1;
//     }
// }

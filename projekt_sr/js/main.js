// Denna fil ska innehålla er lösning till projektuppgiften.

"use strict";

/*  Delar till ej obligatorisk funktionalitet, som kan ge poäng för högre betyg
*   Radera rader för funktioner du vill visa på webbsidan. */
//document.getElementById("player").style.display = "none";      // Radera denna rad för att visa musikspelare

/* Här under börjar du skriva din JavaScript-kod */

window.onload = init;



function init() {


    loadNames();



}



// async function radioChannels() {

//     const response 

//     fetch("https://api.sr.se/api/v2/channels?format=json&indent=true&size=999")
//     .then((res) => res.json())
//     .then((data) => {
//         channels = data.channels;
//     })



   


 

    async function loadNames() {
        const response = await fetch("https://api.sr.se/api/v2/channels?format=json&indent=true&size=999");
        const radioChannels = await response.json();

        let radiosChannels = radioChannels.channels;
        console.log(radioChannels.channels[5].name);
        console.log(radioChannels);

        for (let i = 0 ; i < radiosChannels.length ; i++) {
            let buildRadioChannels = document.getElementById("mainnavlist");
            buildRadioChannels.innerHTML += "<li>" + radioChannels.channels[i].name + "</li>"

            console.log(radioChannels.channels[i].name);

        }
     
      }
    




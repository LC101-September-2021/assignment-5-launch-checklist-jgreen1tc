//const { myFetch } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.getElementById('launchForm')
    let pilotName = document.getElementById('pilotName')
    let copilotName = document.getElementById('copilotName')
    let fuelLevel = document.getElementById('fuelLevel')
    let cargoMass = document.getElementById('cargoMass')
    let list = document.getElementById('faultyItems')
    form.addEventListener("submit", (event)=> {
        event.preventDefault()
        formSubmission(window.document, list, pilotName, copilotName, fuelLevel, cargoMass);
    })
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      
   })
   
});
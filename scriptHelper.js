// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget')
    missionTarget.innerHTML =
   // Here is the HTML formatting for our mission target div.
                
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">` 
                
}

function validateInput(testInput) {
    let string = testInput;
    let validator = ""
    if (string === ""){
        validator = "Empty"
    }else if (isNaN(Number(string))){
            validator = "Not a Number"
        }
        else {
            validator = "Is a Number"
        }
    return validator
    }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) { 
    //validation
    let pilotField = validateInput(pilot.value) 
    let copilotField = validateInput(copilot.value)
    let fuelLevelField = validateInput(fuelLevel.value)
    let cargoMassField= validateInput(cargoMass.value)
    let fields = [pilotField, copilotField, fuelLevelField, cargoMassField]
    let ready = true;
    for(let i=0;i<fields.length;i++){
        if(fields[i] === "Empty"){
            alert("All fields required")
            ready = false
            break
        }
    }
    for(let i=0;i<2;i++){
        if(fields[i] === "Is a Number"){
            alert("'Pilot Name' and 'Co-pilot Name' must be strings")
            ready = false
            break
        }
    }
    for(let i=2;i<fields.length;i++){
        if(fields[i] === "Not a Number"){
            alert("'Fuel Level (L)' and 'Cargo Mass (kg)' must be numbers")
            ready = false
            break
        }
    }
    //updating
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus'); 

    list.style.visibility = "visible"
    if(pilotField === "Not a Number"){
        pilotStatus.innerHTML = `${pilot.value} ready` 
    } else{
        pilotStatus.innerHTML = "Pilot required"
    }
    if(copilotField === "Not a Number"){
        copilotStatus.innerHTML = `${copilot.value} ready` 
    } else{
        copilotStatus.innerHTML = "Co-pilot required"
    }

    if(fuelLevel.value < 10000){
        fuelStatus.innerHTML = 'Fuel level too low for launch.'
        ready = false
    } 
 
    if(cargoMass.value > 10000){
        cargoStatus.innerHTML = 'Cargo mass too high for launch.'
        ready = false
    }  

    if(ready){ 
        fuelStatus.innerHTML = 'Fuel level high enough for launch'
        cargoStatus.innerHTML = 'Cargo mass low enough for launch' 
        launchStatus.style.color = 'green'
        launchStatus.innerHTML = "Shuttle is ready for launch"
    } else{
        launchStatus.style.color = 'red'
        launchStatus.innerHTML = 'Shuttle not ready for launch'
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.round(Math.random()*planets.length)
    return randomPlanet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

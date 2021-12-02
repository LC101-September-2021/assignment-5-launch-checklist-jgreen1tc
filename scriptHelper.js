// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
                /*
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: </li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">` 
                */
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
    let pilotField = validateInput(pilot.value) 
    let copilotField = validateInput(copilot.value)
    let fuelLevelField = validateInput(fuelLevel.value)
    let cargoMassField= validateInput(cargoMass.value)
    let fields = [pilotField, copilotField, fuelLevelField, cargoMassField]
    for(let i=0;i<fields.length;i++){
        if(fields[i] === "Empty"){
            alert("All fields required")
            break
        }
    }
    for(let i=0;i<2;i++){
        if(fields[i] === "Is a Number"){
            alert("Pilot and co-pilot names must be strings")
            break
        }
    }
    for(let i=2;i<fields.length;i++){
        if(fields[i] === "Not a Number"){
            alert("Fuel levels and cargo mass must be numbers")
            break
        }
    } 
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
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

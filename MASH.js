function mash() {
    let userName = process.argv[2]
    if (userName == undefined) {
        console.log("Type your name next to node MASH.js")
    }
    else {
    return (process.argv[2] + ", You are a " + Career() + ", you will earn $" + Salary() + " a year" + ". You will live in a " + getHome() + ". You will marry " + spouse() + ", and you will have " + getChildrenCount() + " kids!" + ". You will drive a " + getCar())
}
}
console.log(mash())

function getHome() {
    let homeChoice = process.argv[3]
    let x = [homeChoice, "Mansion", "Apartment", "Shack", "House"];
    let house = Math.random();
    let rand = house * x.length;
    let integer = Math.floor(rand);
    let final = x[integer];
    if (homeChoice == undefined) {
        console.log("Enter desired vehicle")
    }
    else {
        return final
    }
}
//console.log(process.argv[2])
//console.log(getHome())

function getChildrenCount () {
    let decimal = Math.random()
    let times100 = decimal * 100;
    let final = Math.floor(times100);
    let Choice = process.argv[4]
    if (Choice == undefined) {
        console.log("Enter desired number of children")
    }
    else {
        return Choice 
    }
    if (Math.floor(Math.random()*2)+1 == 1) {
        return final 
    }
    else {
        return Choice
    }
}
//console.log(getChildrenCount());

function getCar() {
    let userCar = process.argv[5];
    let x = [userCar,"lambo", "convertible", "box with wheels", "batmobile"];
    let car = Math.random();
    let randCar = car * x.length;
    let integer = Math.floor(randCar);
    let final = x[integer];
     if (userCar == undefined) {
         console.log("Enter a desired car");
     }
     else {
    return final;
    }
}

function spouse () {
    let wife = ["Bekah", "Sofia", "Amanda", "Anna"]
    let stress = Math.random();
    let ranWife = stress * wife.length;
    let integer = Math.floor(ranWife)
    let final = wife[integer]
    return final
}
function Career() {
    let careerChoice = ["doctor", "astronaut", "plumer", "actor", "McDonalds employee"]
    let job = Math.random();
    let ranJob = job * careerChoice.length;
    let integer = Math.floor(ranJob);
    let final = careerChoice[integer];
    return final;
}

function Salary() {
    let amount = Math.random();
    let increase = amount * 100000;
    let final = Math.floor(increase);
    return final;
}

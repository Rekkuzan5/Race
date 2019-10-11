var racer1Speed = 0;
var racer2Speed = 0;
var racer3Speed = 0;

var racerArray = [
    {
        name: "Racer1",
        source: "Images/Car.png",
        raceSpeed: 0
    },
    {
        name: "Racer2",
        src: "Images/Car2.png",
        raceSpeed: 0
    },
    {
        name: "Racer3",
        src: "Images/Car.png",
        raceSpeed: 0
    }
]

function displayRacers() {
    document.getElementById("racer1pic").src = racerArray[0].source;
    document.getElementById("racer2pic").src = racerArray[1].source;
    document.getElementById("racer3pic").src = racerArray[0].source;
}
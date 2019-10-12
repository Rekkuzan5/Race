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
        source: "Images/Car2.png",
        raceSpeed: 0
    },
    {
        name: "Racer3",
        source: "Images/Car.png",
        raceSpeed: 0
    }
]

function displayRacers() {
    document.getElementById("racer1pic").src = racerArray[0].source;
    document.getElementById("racer2pic").src = racerArray[1].source;
    document.getElementById("racer3pic").src = racerArray[2].source;
}

function startRace() {
    //var active = false;
    var distance = 0;
    var image = document.getElementById("racer1");

        var frames = setInterval(movement, 100);
        function movement()
        {
            
            if (distance < 500)
            {
                var x = Math.floor(Math.random() * 11);
                distance = racer1Speed += x;      
                image.style.left = racer1Speed + "px";
                console.log(distance);
            } else {
                 clearInterval(frames);
            }
        }
}
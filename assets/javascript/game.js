var wins= 0;
var losses= 0;
var userGuess= 0;
var numberToGuess = Math.floor(Math.random() * 50 + 50);
var lebron = Math.floor (Math.random () * 7 + 3);
var korver = Math.floor (Math.random () * 7 + 3);
var smith = Math.floor (Math.random () * 7 + 3);
var love = Math.floor (Math.random () * 7 + 3);

console.log (numberToGuess);
console.log (lebron, korver, smith, love);


document.getElementById("computerNumber").innerHTML= numberToGuess;
document.getElementById("lossCounter").innerHTML= "Losses: " + losses;
document.getElementById("winCounter").innerHTML= "Wins: " + wins;
document.getElementById("userNumber").innerHTML= userGuess;

function reset(){
    numberToGuess = Math.floor(Math.random() * 50 + 50);
    document.getElementById("computerNumber").innerHTML= numberToGuess;
    lebron = Math.floor (Math.random () * 7 + 3);
    korver = Math.floor (Math.random () * 7 + 3);
    smith = Math.floor (Math.random () * 7 + 3);
    love = Math.floor (Math.random () * 7 + 3);
    console.log (lebron, korver, smith, love);
    userGuess= 0;
    document.getElementById("userNumber").innerHTML= userGuess;
    } 

    document.getElementById("lebron").onclick = function lebronisgood() {
        userGuess = userGuess + lebron;
        document.getElementById("userNumber").innerHTML= userGuess;
        if (userGuess===numberToGuess){
            wins= wins + 1;
            reset();
            document.getElementById("tally").innerHTML= "WINNER!!!";
            document.getElementById("winCounter").innerHTML= "Wins: " + wins;


        } else if (userGuess>numberToGuess){
            losses= losses + 1;
            reset ();
            document.getElementById("tally").innerHTML= "LOOOSER";
            document.getElementById("lossCounter").innerHTML= "Losses: " + losses;


        }
    }
    document.getElementById("korver").onclick = function korveraintbad() {
        userGuess = userGuess + korver;
        document.getElementById("userNumber").innerHTML= userGuess;
        if (userGuess===numberToGuess){
            wins= wins + 1;
            reset();
            document.getElementById("tally").innerHTML= "WINNER!!!";
            document.getElementById("winCounter").innerHTML= "Wins: " + wins;


        } else if (userGuess>numberToGuess){
            losses= losses + 1;
            reset ();
            document.getElementById("tally").innerHTML= "LOOOSER";
            document.getElementById("lossCounter").innerHTML= "Losses: " + losses;


        }
    }
    document.getElementById("smith").onclick = function smithla() {
        userGuess = userGuess + smith;
        document.getElementById("userNumber").innerHTML= userGuess;
        if (userGuess===numberToGuess){
            wins= wins + 1;
            reset();
            document.getElementById("tally").innerHTML= "WINNER!!!";
            document.getElementById("winCounter").innerHTML= "Wins: " + wins;


        } else if (userGuess>numberToGuess){
            losses= losses+ 1;
            reset ();
            document.getElementById("tally").innerHTML= "LOOOSER";
            document.getElementById("lossCounter").innerHTML= "Losses: " + losses;


        }
    }
    document.getElementById("love").onclick = function whatislove() {
        userGuess = userGuess + love;
        document.getElementById("userNumber").innerHTML= userGuess;
        if (userGuess===numberToGuess){
            wins= wins + 1;
            reset();
            document.getElementById("tally").innerHTML= "WINNER!!!";
            document.getElementById("winCounter").innerHTML= "Wins: " + wins;


        } else if (userGuess>numberToGuess){
            losses= losses +1;
            reset ();
            document.getElementById("tally").innerHTML= "LOOOSER";
            document.getElementById("lossCounter").innerHTML= "Losses: " + losses;


        }
    }

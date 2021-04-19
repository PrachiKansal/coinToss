var scoreU;
var scoreC;
var tRun;
var guessU;
var guessC;

function start() {
    scoreU = 0;
    scoreC = 0;
    tRun = 0;
    guessU = "";
    guessC = "";
    console.log("start completed");
    assign();
    ask();
}

function assign(){
    document.getElementById("urS").innerHTML = scoreU;
    document.getElementById("compS").innerHTML = scoreC;
    document.getElementById("total").innerHTML = tRun;
    document.getElementById("urG").innerHTML = guessU;
    document.getElementById("compG").innerHTML = guessC;
    console.log("assign completed");
}

function ask(){
    guessU = window.prompt("Enter Player1 guess(Heads/Tails): ");
    if (guessU == "Heads"){
        guessC = "Tails"
    }
    else if (guessU == "Tails"){
        guessC = "Heads"
    }
    else{
        window.alert("Wrong Input")
        ask();
    }
    window.alert("Then, Player2 guess will be "+guessC);

    assign();
    
    console.log("ask completed");
    /*wait code*/
    results();
}

function results(){
    var stats = "";
    var guessL = ["heads", "tails"];
    var guess = guessL[0];
    var guess = guessL[Math.floor(Math.random() * 2)];
    
    console.log("guess= "+guess);
    document.getElementById("img").src = "img/"+guess+".jpg";

    if (guessU.toLowerCase() == guess){
        stats = "User";
        scoreU = scoreU + 1;
    }
    else{
        stats = "Comp";
        scoreC = scoreC + 1;
    }
    tRun = tRun + 1;
    
    
    console.log("result completed");
    assign();
    if(stats == "Comp"){
        document.getElementById("winText").innerHTML = "It's a "+guess+", Player2 Wins!";
    }
    else{
        document.getElementById("winText").innerHTML = "It's a "+guess+", Player1 Wins!";
    }

}
var player1score = 0;
var player2score = 0;
var tiescore = 0;

function rollcube() {
    

    var a = Math.floor(1 + Math.random() * 6);
    var randomdice = "dice" + a + ".png";

    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomdice)

    var a1 = Math.floor(1 + Math.random() * 6);
    var randomdice2 = "dice" + a1 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomdice2);


    var player;
    if (a > a1) {
        player1score = player1score + 1;
        player = "Player 1 win"
    }
    else if (a < a1) {
        player2score = player2score + 1;
        player = "Player 2 win"
    }
    else {
        player = " Draw! "
        tiescore = tiescore + 1;
    }
    var winTitle = document.getElementById("winTitle");
    winTitle.innerHTML = player;

    document.getElementById("player1").innerHTML = "Player 1 score: " + player1score;
    document.getElementById("player2").innerHTML = "Player 2 score: " +  player2score;
    document.getElementById("tie").innerHTML = "Tie : " +  tiescore;


};

window.onbeforeunload = function() {
    return "";
}



function play() {
    swal("Player 1 Keys!", "Forward = Right Key \n Back = Left Key \n Jump = Up Key \n Kick = Down Key \n Attack = ctrl");
} function play2() {
    swal("Player 2 Keys!", "Forward = C \n Back = Z \n Jump = S  \n Attack = SHIFT");
}
var player1 = document.getElementById("character1");
player1.style.position = "absolute";
player1.style.left = "50px"
var player2 = document.getElementById("character2");
player2.style.position = "absolute";
player2.style.left = "50px"


window.onkeydown = function () {
    console.log(event.keyCode);
    if (event.keyCode === 39) {
        player1.src = "imagesf/character1agay.gif";
        player1.style.left = parseInt(player1.style.left) + 50 + "px";
        setTimeout(function () {
            player1.src = "imagesf/character1.gif";
        }, 1000)
    }
    if (event.keyCode === 37) {
        player1.src = "imagesf/character1pechy.gif";
        player1.style.left = parseInt(player1.style.left) - 50 + "px";

        setTimeout(function () {
            player1.src = "imagesf/character1.gif";
        }, 1000)
    }
    if (event.keyCode === 38) {
        player1.src = "imagesf/character1jump.gif";
        setTimeout(function () {
            player1.src = "imagesf/character1.gif";
        }, 1000)
    }
    if (event.keyCode === 40) {
        player1.src = "imagesf/character1down.gif";
        setTimeout(function () {
            player1.src = "imagesf/character1.gif";
        }, 1000)
    }
    if (event.keyCode === 17) {
        player1.src = "imagesf/character1attack.gif";
        setTimeout(function () {
            player1.src = "imagesf/character1.gif";
        }, 1000)
    }
    if (event.keyCode === 67) {
        player2.src = "imagesf/run2.gif";
        player2.style.left = parseInt(player2.style.left) - 50 + "px";
        setTimeout(function () {
            player2.src = "imagesf/stand2.gif";
        }, 1000)
    }
    if (event.keyCode === 83) {
        player2.src = "imagesf/jump2.gif";
        setTimeout(function () {
            player2.src = "imagesf/stand2.gif";
        }, 1000)
    }
    if (event.keyCode === 90) {
        player2.src = "imagesf/stand2.gif";
        player2.style.left = parseInt(player2.style.left) + 50 + "px";
        setTimeout(function () {
            player2.src = "imagesf/stand2.gif";
        }, 1000)
        
    }
    if (event.keyCode === 16) {
        player2.src = "imagesf/attack2.gif";
        setTimeout(function () {
            player2.src = "imagesf/stand2.gif";
        }, 1000)
    }


}





























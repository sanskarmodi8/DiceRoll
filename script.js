window.addEventListener("load", (event)=> {
    let randomnum1 = Math.floor(Math.random()*6) + 1;
    let randomnum2 = Math.floor(Math.random()*6) + 1;

    document.querySelector("#img1").setAttribute("src", "/images/dice" + randomnum1 + ".png" );
    document.querySelector("#img2").setAttribute("src", "/images/dice" + randomnum2 + ".png" );

    if (randomnum1 == randomnum2){
        document.querySelector("#winnerDeclaration").innerHTML="<p>🚩Draw 🚩</p>";
    }
    else if (randomnum1>randomnum2){
        document.querySelector("#winnerDeclaration").innerHTML="<p>🚩Player 1 wins🚩</p>";
    }
    else {
        document.querySelector("#winnerDeclaration").innerHTML="<p>🚩Player 2 wins🚩</p>";
    }
});
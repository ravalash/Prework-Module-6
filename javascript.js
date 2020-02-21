var boxHeight = 150;
var boxWidth = 150;
var boxOpacity = 100;
var boxColor = Math.floor((Math.random()*4)+1);


function button1(){
    if (boxHeight < 500) {
        boxHeight=boxHeight+10;
        boxWidth=boxWidth+10;
        document.getElementById("box").style.height = boxHeight+"px";
        document.getElementById("box").style.width = boxWidth+"px";
    }
}

function button2(){
    boxColor = Math.floor((Math.random()*4)+1);
    if (boxColor == 1) { 
        document.getElementById("box").style.backgroundColor = "aqua";
    }
    else if (boxColor == 2) {
        document.getElementById("box").style.backgroundColor = "blue";
    } 
    else if (boxCOlor == 3) {
        document.getElementById("box").style.backgroundColor = "cyan";
    }
    else if (boxColor == 4) {
        document.getElementById("box").style.backgroundColor = "darkblue";
    }
}

function button3(){
    if (boxOpacity > 10) {
        boxOpacity = boxOpacity - 10;
        document.getElementById("box").style.opacity = boxOpacity+"%";
    }
}

function button4(){
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "100%";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    boxHeight = 150;
    boxWidth = 150;
    boxOpacity = 100;
}
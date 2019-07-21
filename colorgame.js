    var colors = generaterandomcolors(6);

    var pickedColor = pickColor();
    var  square = document.querySelectorAll(".square");
    var colordisplay = document.querySelector("#colordisplay");
    colordisplay.textContent = pickedColor;
    var messagedisplay = document.querySelector("#messagedisplay");
    colordisplay.setContent = pickedColor;
    var h1 =document.querySelector("#h1");

    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor = colors[i];
        square[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor){
                messagedisplay.textContent = "Correct";
                h1.style.backgroundColor = clickedColor;
                changecolor(clickedColor);
            }
            else{
                this.style.backgroundColor = "#232323";
                messagedisplay.textContent = "Try Again";
            }
        })
    }

function changecolor(color){
    for (var i = 0; i<square.length;i++){
        square[i].style.backgroundColor= color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generaterandomcolors(no){
    var arr = [];
    for(var i=0;i<no;i++){
        arr[i] = randomcolor();
    }
    return arr;

}

function randomcolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}
var num_squares = 6;
    var colors = generaterandomcolors(num_squares);
    
    var pickedColor = pickColor();
    var  square = document.querySelectorAll(".square");
    var colordisplay = document.querySelector("#colordisplay");
    colordisplay.textContent = pickedColor;
    var messagedisplay = document.querySelector("#messagedisplay");
    colordisplay.setContent = pickedColor;
    var reset = document.querySelector("#reset");
    var h1 =document.querySelector("#h1");
    var easy = document.querySelector("#easy");
    var hard = document.querySelector("#hard");
    h1.style.backgroundColor = "steelblue";



    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor = colors[i];
        square[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor){
                messagedisplay.textContent = "Correct";
                h1.style.backgroundColor = clickedColor;
                changecolor(clickedColor);
                reset.textContent="Play Again";

                
            }
            else{
                this.style.backgroundColor = "#232323";
                messagedisplay.textContent = "Try Again";
            }
        })
    }
reset.addEventListener("click",function(){
    colors = generaterandomcolors(6);
    hard.classList.add("selected");
    easy.classList.remove("selected");
    pickedColor = pickColor();
    h1.style.backgroundColor = "steelblue";
    colordisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
    this.textContent = "New Colors";
    messagedisplay.textContent = "";

})
easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    var no_squares = 3;
    colors = generaterandomcolors(no_squares);
    pickedColor = pickColor();
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "New Colors";
    for(var i=0;i<square.length;i++){
        if(colors[i]){
            square[i].style.backgroundColor= colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
})
hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    var no_squares = 6;
    colors = generaterandomcolors(no_squares);
    pickedColor = pickColor();
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "New Colors";
    for(var i=0;i<square.length;i++){
        
            square[i].style.backgroundColor= colors[i];
            square[i].style.display = "block";
    }

        
})
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
var first = document.getElementById("firstPlayer");
var secound = document.getElementById("secoundPlayer");
var score1 = 0;
var score2 = 0;
var gameover = false;
var winningscore = 5;
var sec = document.getElementById("player2");
var Pcontext =document.getElementById("count-to");
var Numinput = document.getElementById("selectWinNum");


Numinput.addEventListener("change", function(){
   Pcontext.textContent= this.value;
    winningscore = Number(Numinput.value);
    resett();
    
});











document.getElementById("player1").onclick=function(){
   
    if(!gameover){
        ++score1;
    
    if(score1===winningscore){
        gameover= true;
        first.style.color="Green";
        }
    
    first.textContent= score1;
   }
    
}
sec.addEventListener("click", function(){
   if(!gameover){
       ++score2;
       if(score2===winningscore){
           gameover = true;
           secound.style.color="green";
           
       }
       secound.textContent = score2;
   }
    
});
document.getElementById("reset").onclick=function(){
    resett();
    
}
function resett(){
    score1=0;
    score2=0;
    first.textContent= score1;
    secound.textContent = score2;
    first.style.color="black";
    secound.style.color="black";
    gameover=false;
}

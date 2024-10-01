
const input =document.querySelector("#input")
var val=" ";

function cal(num){
    val=val+num;
    input.value=val;
   
    
}
function calequal(){
input.value=eval(val)
val="0";
}
function clearwork(){
    val=" ";
    input.value=val;
}



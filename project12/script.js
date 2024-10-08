const addbtn= document.querySelector("#addbtn")
const delbtn=document.querySelector("#delbtn")
 const flashcard= document.querySelector("#qcard")
const questionInput=document.querySelector("#qinput")
const answerInput=document.querySelector("#ainput")
const savebtn=document.querySelector("#save")
const closebtn=document.querySelector("#close")

addbtn.addEventListener("click",function(){
    flashcard.style.visibility = "visible";
    
 })

 delbtn.addEventListener("click",function(){
    flashcard.style.visibility = "hidden";
    questionInput.value="";
    answerInput.value=" ";
 })

 savebtn.addEventListener("click",function(){
    console.log("click save");
    
    
 })
 closebtn.addEventListener("click",function(){
    console.log("click close");
    
    
 })
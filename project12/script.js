const addbtn= document.querySelector("#addbtn")
const delbtn=document.querySelector("#delbtn")
 const flashcard= document.querySelector("#qcard")
const questionInput=document.querySelector("#qinput")
const answerInput=document.querySelector("#ainput")
const savebtn=document.querySelector("#save")
const closebtn=document.querySelector("#close")
const questionadd=document.querySelector("#questionadd")

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
    questionadd.style.visibility = "visible";
    savequestion();
    
 })


function savequestion(){
    console.log("click save question");
       
 var div=document.createElement("div")
 div.id="mydiv"
 div.style.width="20rem";
 div.style.height="20rem";
 div.style.background="green";
//  div.style.marginLeft="1rem";
 div.style.marginTop="1rem";
//  div.style.display="flex";
//  div.style.flexDirection="row";
//  div.style.justifyContent="center";

 var h1=document.createElement("h1")
 var para=document.createElement("p")
 h1.textContent=questionInput.value;
 para.textContent=answerInput.value;
 para.style.color="white";
 para.style.fontSize="2rem";
 div.appendChild(h1)
 div.appendChild(para)
 

 questionadd.appendChild(div);
 questionadd.appendChild(div)
 questionInput.value="";
 answerInput.value="";


}



 closebtn.addEventListener("click",function(){
    console.log("click close");
    questionadd.style.visibility = "hidden";
    
    
 })
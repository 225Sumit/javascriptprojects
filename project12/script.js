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
    questionadd.style.display = "none";
    questionInput.value="";
    answerInput.value=" ";
    window.location.reload();
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
 div.style.background="rgba(220, 133, 19, 0.395)";
 div.style.boxShadow="inset 0 0 10px rgb(220, 133, 19)";

 div.style.marginTop="1rem";


 var head=document.createElement("h1")
 var para=document.createElement("p")
 head.textContent=questionInput.value;
 para.textContent=answerInput.value;
 para.style.color="white";
 para.style.marginTop="5rem";
 para.style.fontSize="2rem";
 head.style.fontSize="2rem";
 head.style.color="black"
 div.appendChild(head)
 div.appendChild(para)
 
console.log(div);

 questionadd.appendChild(div);
 questionadd.appendChild(div);
 questionInput.value="";
 answerInput.value="";

 questionadd.style.visibility = "visible";
 questionadd.style.display = "grid";

}



 closebtn.addEventListener("click",function(){
    console.log("click close");

    questionadd.style.display = "none";
   
    
 })
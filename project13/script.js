const div=document.createElement("div");
const par=document.createElement("p");
const main= document.querySelector(".main")
div.id="mydiv";
const input=document.querySelector("#input")
const sub=document.querySelector("#sub")

sub.addEventListener("click",function(){
    console.log("click");
    makediv();
   
    
})
input.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        makediv();
        }
    })

function makediv(){
    div.style.width="30rem"
    div.style.height="2rem"
    div.style.background="red"
    div.style.margin="auto"
    div.style.marginTop="1rem";
    div.style.padding="2rem"

    par.textContent=input.value;
    div.appendChild(par)
    main.appendChild(div)

}
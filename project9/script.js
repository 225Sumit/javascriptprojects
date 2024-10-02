const userinput=document.getElementById("input")
// const additem=document.getElementById("additem")
const cleantext=document.getElementById("eraser")
const item =document.querySelector("#item")
const grolist=document.querySelector(".grocerylist")



userinput.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        additem();
        console.log("click");
        
    }
})
additem = () => { 
    console.log(userinput.value);
    
    const  element=document.createElement("h2")
    item.innerHTML =`- ` + userinput.value;
    element.appendChild(item.innerHTML);
    userinput.value="";
}
cleantext.addEventListener("click",function(){
    
   
    
})

item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through")
      item.style. 
    else
      item.style.textDecoration = "none";
  })



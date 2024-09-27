const input=document.querySelector("#input")
const output=document.querySelector("#output")
const btn=document.querySelector("#main4")

btn.addEventListener("click",function(){
    output.innerHTML=input.value
})

input.addEventListener("keydown",(e) => {
        if(e.key === "Enter") {
            console.log("click");
            
            output.innerHTML = input.value
        }
    })
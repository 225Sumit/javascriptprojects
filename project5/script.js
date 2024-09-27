const btn1=document.querySelector("#btn1")
const btn2=document.querySelector("#btn2")
const count=document.querySelector("#count")
var i=0;
btn1.addEventListener("click",()=>{
    changeCount(1 );
     
    
})
btn2.addEventListener("click",()=>{
    changeCount(-1 );
     
    
})

changeCount = (num) => {
  i += num;
  document.querySelector("#count").innerHTML = i;
}



// var count = 0;

// document.querySelector("#btn1").addEventListener("click", () => {
//   changeCount(1 );
// });

// document.querySelector("#btn2").addEventListener("click", () => {
//   changeCount(-1);
// });

// changeCount = (number) => {
//   count += number;
//   document.querySelector("#count").innerHTML = count;
// }

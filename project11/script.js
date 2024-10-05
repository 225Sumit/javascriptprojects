const amount=document.querySelector("#money")
const person=document.querySelector("#per")
const quality=document.querySelector("#slc")
const cal=document.querySelector("#cal")
const totaltip=document.querySelector("#totaltip")


cal.addEventListener("click",function(){
    
    const total=((amount.value*quality.value)/person.value).toFixed(2);
    totaltip.innerHTML="Total tip Cost each: "+total;
    console.log(amount.value);
    
    amount.value="";
    person.value="";
    quality.value="";
    
})



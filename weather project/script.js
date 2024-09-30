// const cityname =document.querySelector("#input")
// const btn=document.querySelector("#sub")

// const apikey = '863242cfb2b1d357e6093d9a4df19a4b'
const apiurl ='https://api.publicapis.org/entries';
async function checkweather() {
    const response = await fetch(apiurl );
    var data = await response.json();
    console.log(data);
    
}
checkweather();

// console.log(cityname.value);
// btn.addEventListener("click",function(){
    
    
//     Cityname.innerHTML=input.value;
//     console.log(input.value);
// })

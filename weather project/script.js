const cityname = document.querySelector("#input");
const btn = document.querySelector("#sub");
const temp = document.querySelector("#temp");
const search = document.querySelector("#input");

const apikey = "09b9bbd84a58f8c6cc81616fbf165811";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
//   console.log(data);
//   console.log(data.name);
//   console.log(Math.round(data.main.temp));
  Cityname.innerHTML = data.name;
  temp.innerHTML = Math.floor(data.main.temp) ;
}



btn.addEventListener("click", function () {
 
    checkweather(search.value);


});
search.addEventListener("keydown", function (e) {
    if(e.key=="Enter")
    {
        console.log("enter");
    checkweather(search.value);
    }
       
    
  });

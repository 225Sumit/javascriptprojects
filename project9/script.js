const userinput = document.getElementById("input");
const h2 = document.getElementsByTagName("h2");
const cleantext = document.getElementById("eraser");
var item = document.querySelector("#item");
const grolist = document.querySelector(".grocerylist");

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    additem();
  }
});
additem = () => {
  console.log(userInput.value);
  const list = document.createElement("h2");
  list.textContent = "-" + userInput.value;

  list.addEventListener("click", () => {
    console.log("list");
  
    if (list.style.textDecoration != "line-through")
      list.style.textDecoration = "line-through";
    else list.style.textDecoration = "none";
  });

  item.appendChild(list);

  userInput.value = "";

  
};


cleantext.addEventListener("click",function(){

 item.textContent="";
})



// Import stylesheets
import "./style.css";
import "./index.html";

// Write Javascript code!

let button = document.getElementById("btn");
button.addEventListener("click", addTomato);

function addTomato() {
  //document.getElementById("add-tomato").innerHTML = "Tomato";
  let app = document.querySelector("#crapy-ul");
  let li = document.createElement("li");
  li.textContent = "Tomato";
  app.append(li);
}

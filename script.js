//your code here

let button = document.getElementById("swap");
let main = document.getElementById("app");
function toggle(){
	button.classList.toggle("button_night");
	main.classList.toggle("night");
}

button.addEventListener("click",toggle);

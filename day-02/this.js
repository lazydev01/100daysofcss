const addClass = () =>{
var ham = document.getElementsByClassName("hamburger");

ham[0].classList.toggle("animation")}

const addRevClass = () =>{
	var add = document.getElementsByClassName("animation");
	var ham = document.getElementsByClassName("hamburger");
	console.log(Object.keys(add).length>0);
	if(!Object.keys(add).length>0){
		ham[0].classList.add("revAnimation");
	}
	else{
		ham[0].classList.remove("revAnimation");
	}
} 


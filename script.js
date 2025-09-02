//your JS code here. If required.
const d1=document.getElementById("square1");
const d2=document.getElementById("square2");
const d3=document.getElementById("square3");
d1.addEventListener("mouseenter",function() {
	d2.style.backgroundColor="#6F4E37";
	d3.style.backgroundColor="#6F4E37";
})
d1.addEventListener("mouseleave",function() {
	d2.style.backgroundColor="#E6E6FA";
	d3.style.backgroundColor="#E6E6FA";
})
d2.addEventListener("mouseenter",function() {
	d1.style.backgroundColor="#6F4E37";
	d3.style.backgroundColor="#6F4E37";
})
d2.addEventListener("mouseleave",function() {
	d1.style.backgroundColor="#E6E6FA";
	d3.style.backgroundColor="#E6E6FA";
})
d3.addEventListener("mouseenter",function() {
	d2.style.backgroundColor="#6F4E37";
	d1.style.backgroundColor="#6F4E37";
})
d3.addEventListener("mouseleave",function() {
	d2.style.backgroundColor="#E6E6FA";
	d1.style.backgroundColor="#E6E6FA";
})
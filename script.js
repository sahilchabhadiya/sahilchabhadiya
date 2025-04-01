var full=document.querySelector("#full");
var crsr=document.querySelector("#cursor");

full.addEventListener("mousemove",function(sahil){
	console.log("sahil");
	crsr.style.left=sahil.pageX + "px";
	crsr.style.top=sahil.pageY + "px";
});

const scroll = new LocomotiveScroll({ 
    el: document.querySelector('#smooth-vibe'),
    smooth: true
});
/*

JavaScript for AEN

1) Sticky Navigation
2) Mobile Menu

*/

/* 1) Sticky Navigation */

var getBrowserWidth = document.getElementsByTagName("body")[0].offsetWidth;
console.log(getBrowserWidth);

if (getBrowserWidth > 767 ) {
	var stickyMenu = document.querySelectorAll(".site-nav")[0];
	var stickyMenuOffSet = stickyMenu.offsetTop;

	window.addEventListener("scroll", function(e){
		requestAnimationFrame(function(){
			if (window.pageYOffset > stickyMenuOffSet) {
				stickyMenu.classList.add("sticky");
			} else {
				stickyMenu.classList.remove("sticky");
			}
		});
	});
}

/* Mobile Menu */
var menuButton = document.querySelectorAll(".menu")[0];
var menuHide = document.querySelectorAll(".site-nav")[0];

// var menuShow = document.querySelectorAll(".site-nav")[0];
var menuShow = document.getElementsByTagName("body")[0];


menuButton.addEventListener("click", function() {
	menuShow.classList.toggle("show--menu");
	menuHide.classList.toggle("hide");
});



/* Function classToggle multiple classes*/
function classToggle() {
    this.classList.toggle('class1');
    this.classList.toggle('class2');
}

// document.querySelector('#div').addEventListener('click', classToggle);
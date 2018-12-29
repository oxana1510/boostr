var open = document.querySelector("#mobMenu");
var link = document.querySelector(".topnav");
var close = document.querySelector(".mobail-menu-close");


open.addEventListener("click", function () { 
    link.classList.add("responsive"); 
    close.classList.add("mobail-menuopen-close");
    open.classList.add("mobail-menuopen");
  });

close.addEventListener("click", function () {
	link.classList.remove("responsive");
	close.classList.remove("mobail-menuopen-close");
	open.classList.remove("mobail-menuopen");
});
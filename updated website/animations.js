const fadeElements =
document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {

fadeElements.forEach(el => {

let top =
el.getBoundingClientRect().top;

if(top < window.innerHeight - 100)
{
el.classList.add("show");
}

});

});
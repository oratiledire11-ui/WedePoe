document
.getElementById("searchInput")
.addEventListener("keyup", function(){

let filter =
this.value.toLowerCase();

document
.querySelectorAll(".tour-card")
.forEach(card => {

let text =
card.textContent.toLowerCase();

if(text.includes(filter))
{
card.style.display = "block";
}
else
{
card.style.display = "none";
}

});

});
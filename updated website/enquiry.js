document
.getElementById("enquiryForm")
.addEventListener("submit",
function(e){

e.preventDefault();

let guests =
parseInt(
document.getElementById("guests").value
);

let total =
guests * 5000;

document
.getElementById("response")
.innerHTML = `

<h3>Estimated Cost</h3>

<p>R${total}</p>

`;

});
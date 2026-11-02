document
.querySelectorAll("form")
.forEach(form => {

form.addEventListener("submit",
function(e){

let email =
this.querySelector(
'input[type="email"]'
);

if(
!email.value.includes("@")
)
{
e.preventDefault();

alert(
"Please enter a valid email address"
);
}

});

});
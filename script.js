
// Js for Mousewheel
document.addEventListener('mousewheel' ,function(event){
    const navbar=document.getElementById('navigation')
if(event.wheelDelta>=0){
    navbar.style.top='0'
}
else {
    
    navbar.style.top='-150px'
}
})

// Js for form validation
function validateForm()
{
var firstname = document.getElementById('fname').value;
var lastname = document.getElementById('lname').value;
var Email = document.getElementById('email').value;
var Contact = document.getElementById('number').value;
var address = document.getElementById('address').value;
var message = document.getElementById('message').value;
console.log(Email);

if (firstname == " " || lastname == " " || Contact == "" || message == " " ) 
{
   alert("Empty fields found please fill the form");
}

else
{
    alert("Thank you for your feedback") 
}
}



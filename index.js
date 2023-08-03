const passInput = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

const form = document.getElementById("signUp");
const password = form.password;
const confirmPassword = form.confirmPassword;
const feedback = document.getElementById("confirmPassword-feedback");

let isPasswordMatch = false;

// When the user clicks on the password field, show the message box
passInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
passInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
passInput.onkeyup = function() {
    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    if(passInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
         letter.classList.add("invalid");
    }
    
    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if(passInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if(passInput.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    
    // Validate length
    if(passInput.value.length >= 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}


// Check if password matches
confirmPassword.addEventListener("input", () => {
    if (password.value != confirmPassword.value) {
      feedback.innerHTML = "<img src='./Assets/alerticon.png' alt='Alert Icon' class='alert-icon'> Password did not match.";
      isPasswordMatch = false;
    } else {
      feedback.innerHTML = "";
      isPasswordMatch = true;
    }
});


function submitForm() {
    isPasswordMatch ? window.alert("Welcome onboard!") : null;
};
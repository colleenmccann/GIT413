"use strict";

//dark mode toggle
function toggleDarkMode(e){
    //console.log("hello")
    let theme = document.querySelector("body");
    theme.classList.toggle("dark-mode");
}

// guessing game functionality

function guessingGame(e){
    e.preventDefault();
    let errorMessage = "";

    let numInput = document.getElementById("number-input");
    errorMessage = document.getElementById("win-lose-output");

    // ensure that the user's input falls into range / isn't empty
    if(numInput.value < 1 || numInput.value > 10 || numInput.value === ""){
        errorMessage.innerHTML = "Please enter a number between 1 and 10."
    }else{
        let generatedNumber = Math.floor(Math.random() * (10-1+1) + 1);
        console.log(generatedNumber)
        
        //check for a match
        if(numInput.value == generatedNumber){
            errorMessage.innerHTML = `You won!<br>Your guess was ${numInput.value} and mine was ${generatedNumber}!`
        }else{
            errorMessage.innerHTML = `You lost.<br>Your guess was ${numInput.value} and mine was ${generatedNumber}.<br>Try again!`
        }
    }
}

//product display functionality

function sempervivum(e){
    // get each product info
    let currentPlant = document.getElementById("plant1");
    let plant2 = document.getElementById("plant2");
    let plant3 = document.getElementById("plant3");
    let plant4 = document.getElementById("plant4");

    //check to see if product is already hidden
    if(currentPlant.classList.contains("hide-item")){
        currentPlant.classList.remove("hide-item");
        currentPlant.classList.add("display-item");

        // un-hide item
        document.getElementById("semp-button").classList.add("selected");

        // ensure all other items are h idden
        if(plant2.classList.contains("display-item")){
            plant2.classList.remove("display-item");
            plant2.classList.add("hide-item");

            document.getElementById("grapt-button").classList.remove("selected");

        }else if(plant3.classList.contains("display-item")){
            plant3.classList.remove("display-item");
            plant3.classList.add("hide-item");

            document.getElementById("hawo-button").classList.remove("selected");

        }else if(plant4.classList.contains("display-item")){
            plant4.classList.remove("display-item");
            plant4.classList.add("hide-item");

            document.getElementById("eche-button").classList.remove("selected");
        }
    }
}

// repeat for each item

function graptopetalum(e){
    let currentPlant = document.getElementById("plant2");
    let plant1 = document.getElementById("plant1");
    let plant3 = document.getElementById("plant3");
    let plant4 = document.getElementById("plant4");

    if(currentPlant.classList.contains("hide-item")){
        currentPlant.classList.remove("hide-item");
        currentPlant.classList.add("display-item");

        document.getElementById("grapt-button").classList.add("selected");

        if(plant1.classList.contains("display-item")){
            plant1.classList.remove("display-item");
            plant1.classList.add("hide-item");

            document.getElementById("semp-button").classList.remove("selected");

        }else if(plant3.classList.contains("display-item")){
            plant3.classList.remove("display-item");
            plant3.classList.add("hide-item");

            document.getElementById("hawo-button").classList.remove("selected");

        }else if(plant4.classList.contains("display-item")){
            plant4.classList.remove("display-item");
            plant4.classList.add("hide-item");

            document.getElementById("eche-button").classList.remove("selected");
        }
    }
}

function haworthia(e){
    let currentPlant = document.getElementById("plant3");
    let plant1 = document.getElementById("plant1");
    let plant2 = document.getElementById("plant2");
    let plant4 = document.getElementById("plant4");

    if(currentPlant.classList.contains("hide-item")){
        currentPlant.classList.remove("hide-item");
        currentPlant.classList.add("display-item");

        document.getElementById("hawo-button").classList.add("selected");

        if(plant1.classList.contains("display-item")){
            plant1.classList.remove("display-item");
            plant1.classList.add("hide-item");

            document.getElementById("semp-button").classList.remove("selected");

        }else if(plant2.classList.contains("display-item")){
            plant2.classList.remove("display-item");
            plant2.classList.add("hide-item");

            document.getElementById("grapt-button").classList.remove("selected");

        }else if(plant4.classList.contains("display-item")){
            plant4.classList.remove("display-item");
            plant4.classList.add("hide-item");

            document.getElementById("eche-button").classList.remove("selected");
        }
    }
}

function echeveria(e){
    let currentPlant = document.getElementById("plant4");
    let plant2 = document.getElementById("plant2");
    let plant3 = document.getElementById("plant3");
    let plant4 = document.getElementById("plant1");

    if(currentPlant.classList.contains("hide-item")){
        currentPlant.classList.remove("hide-item");
        currentPlant.classList.add("display-item");

        document.getElementById("eche-button").classList.add("selected");

        if(plant2.classList.contains("display-item")){
            plant2.classList.remove("display-item");
            plant2.classList.add("hide-item");

            document.getElementById("grapt-button").classList.remove("selected");
        }else if(plant3.classList.contains("display-item")){
            plant3.classList.remove("display-item");
            plant3.classList.add("hide-item");

            document.getElementById("hawo-button").classList.remove("selected");
        }else if(plant1.classList.contains("display-item")){
            plant1.classList.remove("display-item");
            plant1.classList.add("hide-item");

            document.getElementById("semp-button").classList.remove("selected");
        }
    }
}

// form validation functionality

function validateName(e){
    // prevent default behavior 
    e.preventDefault();
    //create error message
    let errorMessage = "";

    //validate phone
    let nameInput = document.getElementById("name");
    //console.log(nameInput.value); //code check
    let regex = /[a-z]/

    errorMessage = nameInput.previousElementSibling;
    errorMessage.innerHTML = "";
    if(nameInput.value === ""){
        errorMessage.innerHTML = "This field is required."
    }else if(!regex.test(nameInput.value)){
        errorMessage.innerHTML = "Please enter a valid full name."
    }
}

function validatePhone(e){
    // prevent default behavior 
    e.preventDefault();
    //create error message
    let errorMessage = "";

    //validate phone
    let phoneInput = document.getElementById("phone");
    //console.log(nameInput.value); //code check
    let regex = /[0-9]{10}/;

    errorMessage = phoneInput.previousElementSibling;
    errorMessage.innerHTML = "";
    if(document.getElementById("radio-phone").checked){
        if(phoneInput.value === ""){
            errorMessage.innerHTML = "This field is required."
        }else if(!regex.test(phoneInput.value)){
            errorMessage.innerHTML = "Please enter a valid phone number."
        }
    }
}

function validateEmail(e){
    // prevent default behavior 
    e.preventDefault();
    //create error message
    let errorMessage = "";

    //validate phone
    let emailInput = document.getElementById("email");
    let regex = /^\S+@\S+\.\S+$/;

    errorMessage = emailInput.previousElementSibling;
    errorMessage.innerHTML = "";
    if(document.getElementById("radio-email").checked){
        if(emailInput.value === ""){
            errorMessage.innerHTML = "This field is required.";
        }else if(!regex.test(emailInput.value)){
            errorMessage.innerHTML = "Please enter a valid email address.";
        }
    }
}

function validateComments(e){
    // prevent default behavior 
    e.preventDefault();
    //create error message
    let errorMessage = "";

    //validate phone
    let commentsInput = document.getElementById("comments");

    errorMessage = commentsInput.previousElementSibling;
    errorMessage.innerHTML = "";
    if(commentsInput.value === ""){
        errorMessage.innerHTML = "This field is required."
    }
}

function validateRadio(e){
    // prevent default behavior 
    e.preventDefault();
    //create error message
    let errorMessage = "";

    //validate phone
    let phoneSelected = document.getElementById("radio-phone");
    let emailSelected = document.getElementById("radio-email");

    errorMessage = document.getElementById("radio-message");
    errorMessage.innerHTML = "";
    if(!emailSelected.checked && !phoneSelected.checked){
        errorMessage.innerHTML = "Please select one of the options."
    }
}

function userInputDisplay(e){
    let user = {
        name:"",
        phone:"",
        email:"",
        comments:"",
        preferredContact:""
    }

    user.name = document.getElementById("name");
    user.phone = document.getElementById("phone");
    user.email = document.getElementById("email");
    user.comments = document.getElementById("comments");
    
    if(document.getElementById("radio-phone").checked){
        user.preferredContact = "Phone";
    }else if(document.getElementById("radio-email").checked){
        user.preferredContact = "Email";
    }

    let userDisplay = document.getElementById("display-info");
    userDisplay.innerHTML = `Thank you for subscribing!<br>
    Name: ${user.name.value}<br>
    Phone Number: ${user.phone.value}<br>
    Email: ${user.email.value}<br>
    Comments: ${user.comments.value}<br>
    Preferred Method of Contact: ${user.preferredContact}`;
}


// EVENT LISTENERS

// dark mode
document.getElementById("toggle-dark").addEventListener("click", toggleDarkMode);

// guessing game
document.getElementById("submit-guess").addEventListener("click", guessingGame);

// product display
document.getElementById("semp-button").addEventListener("click", sempervivum);
document.getElementById("grapt-button").addEventListener("click", graptopetalum);
document.getElementById("hawo-button").addEventListener("click", haworthia);
document.getElementById("eche-button").addEventListener("click", echeveria);

// form validation
document.getElementById("subscribe").addEventListener("click", validateName);
document.getElementById("subscribe").addEventListener("click", validatePhone);
document.getElementById("subscribe").addEventListener("click", validateEmail);
document.getElementById("subscribe").addEventListener("click", validateComments);
document.getElementById("subscribe").addEventListener("click", validateRadio);
document.getElementById("subscribe").addEventListener("click", userInputDisplay);
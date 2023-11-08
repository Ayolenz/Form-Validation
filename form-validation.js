/*
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let userName = id('username'),
email = id('email'),
password = id('password'),
password2 = id('password2'),
errorMsg = classes('error'),
success = classes('success'),
failure = classes('failure'),
form = id("form");


// add eventlister to form
form.addEventListener('submit', (e)=>{

// we call the preventDefault method to prevent our form from submitting because we want to validate our input
e.preventDefault();
pass();
// the logic() is called while saving different parameters inside it so that we will not be writing too many if statement
logic(userName, 0, 'username is required')
logic(email, 1, 'email is required')
logic(password, 2, 'password is required')
logic(password2, 3, 'password is required')



})

let logic = (id, serial, message) => {

    if(id.value === "") {
        errorMsg[serial].innerHTML = message;
        failure[serial].style.opacity = '1';
        success[serial].style.opacity ='0';
    }
    
    else{
        errorMsg[serial].innerHTML = "";
        failure[serial].style.opacity = '0'
        success[serial].style.opacity ='1';

    }
    
} 
let passin = document.querySelector('.passmatch');

let pass = () => {
    if (password2.value !== password.value) {
        passin.innerHTML = 'Password do not match';
  
    }
    else if (password2.value === password.value) {
        passin.innerHTML = 'Password confirmed'
    }
}
*/


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInpute();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInpute = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // trim was used to help remove all the white spaces that the string have

    if(usernameValue === '') {
        setError(username, 'username is required');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'email is required');
    }
    else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }else {
        setSuccess(email)
    }

    if(passwordValue === '') {
        setError(password, 'password is required');
    }
    else if(passwordValue.length < 8) {
        setError (password, 'Password must be at least 8 character')
    }
    else{
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'please confirm your password');
    }
    else if (password2Value !== passwordValue) {
        setError(password2, 'Password does not match')
    }
    else{
        setSuccess(password2);
    }
};

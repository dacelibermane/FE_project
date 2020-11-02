window.addEventListener('load', function(){

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const saveBtn = document.getElementById('submitBtn');




//The form popup after clicking the button
document.getElementById('btn').addEventListener('click', function(){
  document.querySelector('.popup-form').style.display = 'flex';
});

//The form closes after clicking "X"
document.querySelector('.close').addEventListener('click', function(){
  document.querySelector('.popup-form').style.display = 'none';
});

//show hide elements by clicking on checkbox
document.getElementById('btn').addEventListener('click', function showHide(){
  if(document.getElementById('checkbox').checked){  
      document.getElementById('receiveOffers').style.display='block';
  }else{
    document.getElementById('receiveOffers').style.display='none';
  }
});
  

//form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});


function checkInputs(){
  //getting values form input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(usernameValue === '') {
      showError(username, 'Username cannot be blank');
  }else{
      showSuccess(username);
  }

  if(emailValue === ''){
    showError(email, 'Email cannot be blank');
  }else if(!isEmail(emailValue)) {
    showError(email, 'Email is not valid');
  }else{
    showSuccess(email);
  }

  
  if(passwordValue === ''){
    showError(password, 'Password cannot be blank');
  }else{
    showSuccess(password);
  }

  // alert(usernameValue + " , thank you! We received your request")


}

function showError(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector('small');

  errorMsg.innerText = message;

  formControl.className = 'input-wrapper error';
}

function showSuccess(input, message){
  const formControl = input.parentElement;
  formControl.className = 'input-wrapper success';
}

function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// saving to local storage
saveBtn.onclick = function (){
  const saveUsername = username.value;
  const saveEmail = email.value;

  console.log(saveUsername);
  console.log(saveEmail);

  if(saveUsername && saveEmail){
    localStorage.setItem(saveUsername, saveEmail);
    location.reload();
  }
};

});





 

  
   

 


  




   







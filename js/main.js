window.addEventListener('load', function(){

//The form popup after clicking the button
  document.getElementById('btn').addEventListener('click', function(){
   document.querySelector('.popup-form').style.display = 'flex';
});

//The form closes after clicking "X"
  document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.popup-form').style.display = 'none';
});

//User validation
  document.getElementById('btn').addEventListener('click', function() {
    const form = document.getElementById('form').elements;

  

    if(isFormValid(form)) {
      console.log('can be saved')
    }else{
      console.log('not valid')
    }


});

  function isFormValid(form) {
    let isFormValid = true;

    const username = form.namedItem('username').value;
    console.log(username);
    return isFormValid;
  }




})




// / document.getElementById('submitBtn').addEventListener('click', function(){
//   const form = document.getElementById('form').elements;

//     if (isFormValid(form)) {
//      let userList = localStorage.userList;
 
//      if(userList) {
//        userList = JSON.parse(userList);
//       }else{
//         userList = [];
//       }

//       const user = {
//         username: form.namedItem('username').value,
//         email: form.namedItem('email').value,
//         password: form.namedItem('password').value
//       };
//         userList.push(JSON.stringify(user));
//         localStorage.userList = JSON.stringify(userList);
    
//     console.log('can be saved')
//     }else{
//   console.log('form not valid')
//  }
// });
 
// function isFormValid(form) {
// let isFormValid = true;

// const name = form.namedItem('name').value;
// if(name.lenght < 3) {
//  const errorMsg = document.querySelector('.error-msg name')[0];
//  errorMsg.innerHTML = "Please enter valid name is required"
//  isFormValid = false;
// }

// const email = form.namedItem('email').value;
// const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// if(!re.test(email)){
//  isFormValid = false;

// }



// return isFormValid;
// }



 
// //Select appears, When checkbox is checked
// let checkbox = document.getElementById('sendOffers');
// let receiveOffers = document.getElementById('receiveOffers');

// checkbox.addEventListener('click', function (){
//   if(checkbox.checked){
//     receiveOffers.style.display = 'block';
//   }else{
//     receiveOffers.style.display = 'none';
//   }
// })
  
   

 


  




   







window.addEventListener('load', function() {

  document.getElementById('btn').addEventListener('click', function(){
    document.querySelector('.popup-form').style.display = 'flex';
  });



  document.getElementById('submitBtn').addEventListener('click', function(){
    const form = document.getElementById('inputGroup').elements;

    if (isFormValid(form)) {
      console.log('can be saved')
    } else{
      console.log('form not valid')
    }
  });

  function isFormValid(form) {
    let isFormValid = true;

    const userName = form.namedItem('username').value;

    console.log(userName);
    return isFormValid;
  }

})

function showHideDiv(){
  if(document.getElementById('sendOffers').checked) {
    document.getElementById('receiveOffers').style.display='block';
  }else{
    document.getElementById('receiveOffers').style.display='none';
  }
};


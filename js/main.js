window.addEventListener('load', function() {
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


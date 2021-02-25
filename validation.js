const email = document.getElementById('check-email');
const form = document.getElementById('form');
const error = document.getElementById('error-message');
const checkBox = document.getElementById('checkboxx');
const colombia = "co";
const section_text = document.getElementById('sub-section-text');
const section_input = document.getElementById('sub-section-input');
const section_sub = document.getElementById('section-subscribe')
const success = document.getElementById('section-success');

form.addEventListener('submit', (e) => {
  let errorMessages = [];
  if (email.value === '' || email.value == null){
    errorMessages.push("Email address is required");
  }

  if (checkBox.checked != true){
    errorMessages.push("You must accept the terms and conditions");
  }

  if (email.value.includes("@") == true){
    let email_split = email.value.split("@");
    if (email_split[1].includes(".") != true){
      errorMessages.push("Please provide a valid e-mail address");
    }else{
      let final_split = email.value.split(".");
      if (final_split[1] == colombia){
        errorMessages.push("We are not accepting subscriptions from Colombia emails");
      }
    }
  }else{
    errorMessages.push("Please provide a valid e-mail address");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    error.style.visibility = 'visible';
    error.innerText = errorMessages.join(', ');
  }else{
    e.preventDefault();
    error.style.visibility = 'hidden';
    error.innerText = "e";
    section_text.style.display = 'none';
    section_input.style.display = 'none';
    section_sub.style.paddingTop = '10.6vh';
    success.style.display = 'initial';
  }
});

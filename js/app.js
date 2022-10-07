const submit = document.querySelector('button[type="submit"]');
const email = document.querySelector('input');
const form = document.querySelector('form');
const msg = document.querySelector('.error-msg');

const rfc5322 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (email.value === '' || !rfc5322.test(email.value)) {
    form.classList.add('error');
    msg.style.color = '';
    msg.style.display = 'block';
  } else {
    form.classList.remove('error');
    email.value = '';
    msg.style.color = 'hsl(0, 35.5%, 70.2%)';
    msg.innerText = 'Thank you for subscribing!';
    msg.style.display = 'block';
    
    setTimeout(() => {
      msg.style.display = '';
      msg.innerText = 'Please provide a valid email';
    }, 3000);
    
  }
});
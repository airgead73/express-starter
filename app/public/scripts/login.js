console.log('login script uploaded.')
const login = document.getElementById('form_login');
const nameError = document.querySelector('.name.error');
const emailError = document.querySelector('.email.error');
const passwordError = document.querySelector('.password.error');
const success = document.querySelector('.success');

if(login) {
  login.addEventListener('submit', async (e) => {
    e.preventDefault();

    // reset errors
    emailError.textContent = '';
    passwordError.textContent = '';
  
    // get values
    const email = login.email.value;
    const password = login.password.value;

  
    try {

      const res = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'

        }

      });
      const data = await res.json();
      if(data.errors) {
        message.textContent = data.errors.msg || '';        
      }
      if(data) {
        console.log(data);
        login.reset();
        //location.assign('/');
      }

    } catch(err) {
      console.log(err)
    }
  
  
  
  });

}








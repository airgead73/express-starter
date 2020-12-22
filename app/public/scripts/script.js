const signup = document.getElementById('form_signup');
const login = document.getElementById('form_login');
const nameError = document.querySelector('.name.error');
const emailError = document.querySelector('.email.error');
const passwordError = document.querySelector('.password.error');
const success = document.querySelector('.success');

if(signup) {
  signup.addEventListener('submit', async (e) => {
    e.preventDefault();

    // reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
  
    // get values
    const email = signup.email.value;
    const name = signup.name.value;
    const password = signup.password.value;
  
    try {

      const res = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'

        }

      });
      const data = await res.json();
      if(data.errors) {
        nameError.textContent = data.errors.name || '';
        emailError.textContent = data.errors.email || '';
        passwordError.textContent = data.errors.password || '';
      }
      if(data.user) {
        console.log(data.user);
        success.textContent = `${name} is successfully signed up`
        signup.reset();
        //location.assign('/');
      }

    } catch(err) {
      console.log(err)
    }
  
  });

}

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
        emailError.textContent = data.errors.email || '';
        passwordError.textContent = data.errors.password || '';
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








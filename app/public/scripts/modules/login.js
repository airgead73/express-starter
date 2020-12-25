console.log('login script uploaded.')
const login = document.getElementById('form_login');
const message = document.getElementById('form_message');

if(login) {
  login.addEventListener('submit', async (e) => {
    e.preventDefault();

    // reset message
    message.style.display = null;
    message.textContent = '';
      
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

      const { success, user, errors } = data;

      if(!success) {
        message.textContent = errors.msg; 
        message.style.display = "block";      
      }

      if(success) {
        location.assign('/');
      }

    } catch(err) {
      console.log(err)
    }
  
  
  
  });

}








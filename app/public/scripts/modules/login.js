export function login(form) {

  const message = form.querySelector('[data-message="form_message"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // reset form
    message.style.display = null;

    // get values
    const email = form.email.value;
    const password = form.password.value;

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
      const { success, errors } = data;

      if(!success) {
        message.textContent = errors.msg || '';
        message.style.display = 'block';
      }

      if(success) {
        form.reset();
        location.assign('/')
      }

    } catch(err) {

      console.error(err);

    }

    
  });

}
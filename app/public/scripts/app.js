import {login} from "./modules/login.js";
import {signup} from "./modules/signup.js";

const formLogin = document.getElementById('form_login');
const formSignup = document.getElementById('signup');

if(formLogin) login(formLogin);
if(formSignup) signup(form);









import {login} from "./modules/login.js";
import {signup} from "./modules/signup.js";
import {projectAdd} from "./modules/project_add.js";

const d = document;
const formLogin = d.getElementById('form_login');
const formSignup = d.getElementById('signup');
const formProjectAdd = d.getElementById('form_project_add');

if(formLogin) login(formLogin);
if(formSignup) signup(formSignup);
if(formProjectAdd) projectAdd(formProjectAdd);









/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Jayvee Milana

Final Assignment
Login Page

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

// Login

const usernameTxt = document.querySelector('.username');
const passwordTxt = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');
const incorrect = document.querySelector('.incorrect');

loginBtn.addEventListener('click', () => {
  if (usernameTxt.value === localStorage.getItem('username') &&
      passwordTxt.value === localStorage.getItem('password')) {
        window.location.href = `./home.html`;
      } else {
        incorrect.innerHTML = 'Incorrect Username/Password';
      }
});

// Local Storage Password
localStorage.setItem("username", "JayveeMilana12");
localStorage.setItem("password", "12345!");
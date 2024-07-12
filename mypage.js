const msg = document.getElementById('wel-msg');
 const name =localStorage.getItem('username');

 msg.innerText = `Hello ${name}`;
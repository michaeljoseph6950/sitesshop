const loginBtn = document.getElementById("login");
const btn = document.getElementById("btn");

loginBtn.addEventListener('click',(e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email,pass)
        .then(() => {
            alert('Login successful, redirecting...');
            window.location.assign('home.html');
        })
        .catch(err => alert(err.message));

    
})

btn.addEventListener('click', e => {
    e.preventDefault();
    window.location.assign("register.html");
})
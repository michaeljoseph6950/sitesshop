const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', e => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(() => {
            alert('Account has been created');
            window.location.assign('index.html');
        })
        .catch(err => alert(err.message));
})
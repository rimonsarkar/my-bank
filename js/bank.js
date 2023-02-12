document.getElementById('submit-button').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
   console.log(email, password);
   const email = emailField.value;
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
    if(email === 'rimonsarkarofficial@gmail.com' && password === 'Official281522'){
        window.location.href = 'bank.html';
    }
    else{
        alert('you are wrong user');
    }
})   
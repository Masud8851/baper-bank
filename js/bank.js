document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    // check email and password
    if(userEmail == 'masudur15-8851@diu.edu.bd' && userPassword == 'secret')
    {
        // console.log("Valid User")
        window.location.href = 'banking.html'
    }
    else
    {
        console.log('Wrong email or password')
    }
});
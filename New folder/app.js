function validation(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let number = document.getElementById('number').value;


    let usercheck =  /^[0-9a-zA-Z]+$/ ;
    let emailcheck =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let passwordcheck =  /^[0-9a-zA-Z]+$/ ;
    let numbercheck =  /^[0-9a-zA-Z]+$/ ;

    if(usercheck.test(username)){
        documents.getElementById('usererror').innerHTML ="";
        return false;
    }
    else{
        documents.getElementById('usererror').innerHTML ="invalid username";
        return false;
    }

    if(emailcheck.test(email)){
        documents.getElementById('emailerror').innerHTML ="";
        return false;
    }
    else{
        documents.getElementById('emailerror').innerHTML ="invalid email";
        return false;
    }

    if(passwordcheck.test(password)){
        documents.getElementById('passworderror').innerHTML ="";
        return false;
    }
    else{
        documents.getElementById('passworderror').innerHTML ="invalid password";
        return false;
    }

    if(numbercheck.test(number)){
        documents.getElementById('numbererror').innerHTML ="";
        return false;
    }
    else{
        documents.getElementById('numbererror').innerHTML ="invalid error";
        return false;
    }
    if
}
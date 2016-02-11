Parse.initialize("SLgQi40ZWuXta0IwBzaKNxSVE2vUQveZRQHgREaw", "lVYH1g2UpO9PokeMDrxCBv4gZdqEkWIfSShdesE7");


var user = new Parse.User();


var agreed = 0;

var usedNames = "";


var userName = $('#username').val();
var Password = $('#password').val();
var ConfirmPassword = $('#confirmPassword').val();
var age = $('#age').val();


function rulesOpen(){
    $('.popUpDiv').css("display", "block");
    agreed = 1;
}

function rulesClose(){
    $('.popUpDiv').css("display", "none");
}

function signUp(){
    userName = $('#username').val();
    Password = $('#password').val();
    ConfirmPassword = $('#confirmPassword').val();
    age = $('#age').val();
    
    if(agreed == 1){
        if(userName.length > 5 && userName.length < 13 && age > 13 && Password.length > 5 && ConfirmPassword == Password){
            alert("Still working on this. Please be patient anyone reading this! Also, hello " + userName + " how are ya? Your password is " + Password + " and your confirm password is " + ConfirmPassword + " finally, your age is " + age);
            user.set("username", userName);
            user.set("password", Password);
            user.set("age", age);
        }

        if(Password.length < 6){
            $('.2').html("Your password is too short!");
        }

        if(userName.length < 6){
            $('.1').html("Your username is too short!");
        }

        if(age < 14){
            $('.3').html("You're to young!");
        }

        if(userName.length > 12){
            $('.1').html("Your username is too long!");
        }

        if(Password !== ConfirmPassword){
            $('.4').html("Your passwords do not match!");
        }
    }
}

Parse.initialize("SLgQi40ZWuXta0IwBzaKNxSVE2vUQveZRQHgREaw", "lVYH1g2UpO9PokeMDrxCBv4gZdqEkWIfSShdesE7");



var acountMade = 0;

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
    
    if(acountMade == 1){
        window.location = "http://lolsonic1234.github.io/newMediaSocial/logIn.html"
    }
    
    userName = $('#username').val();
    Password = $('#password').val();
    ConfirmPassword = $('#confirmPassword').val();
    age = $('#age').val();
    
    if(agreed == 1){
        if(userName.length > 5 && userName.length < 13 && age > 13 && Password.length > 5 && ConfirmPassword == Password){
            alert("Still working on this. Please be patient anyone reading this! Also, hello " + userName + " how are ya? Your password is " + Password + " and your confirm password is " + ConfirmPassword + " finally, your age is " + age);
            
            var saveInfo = {userName, Password, age};
            var saveFiles = Parse.Object.extend("Usernames");
            var saveFiles = new saveFiles();
            saveFiles.save(saveInfo).then(function(object){
                $('#idPl').html("Your ID is " + saveFiles.id + " do not forget it. You will need it to log in. It exists to protect your account.");
                acountMade = 1;
                agreed = 0;
                $('.submit').val("Log In");
            })
            
            
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

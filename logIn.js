Parse.initialize("SLgQi40ZWuXta0IwBzaKNxSVE2vUQveZRQHgREaw", "lVYH1g2UpO9PokeMDrxCBv4gZdqEkWIfSShdesE7");

var p1332ddfd = "";
var kgmfFFtY = "";

var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();
var currentDate = year + "" + month + "" + day + "" + hours + "" + minutes + "" + seconds;
var currentDateStylish = "Year(" + year + ")- Day(" + day + ")- Month(" + month + ") - Time(" + hours + ":" + minutes + ":" + seconds + " )";



var updater = setInterval(updateStatuses, 2000);
clearInterval(updater);

logIn();
currentTime();


function currentTime(){
    year = new Date().getFullYear();
    month = new Date().getMonth() + 1;
    day = new Date().getDate();
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    if(hours < 10){
        hours = "0" + new Date().getHours() + 1;
    }
    
    if(month < 10){
        hours = "0" + new Date().getHours();
    }
    
    if(minutes < 10){
        minutes = "0" + new Date().getMinutes();
    }
    
    if(seconds < 10){
        seconds = "0" + new Date().getSeconds();
    }
    
    currentDate = year + "" + month + "" + day + "" + hours + "" + minutes + "" + seconds;
    
    window.setTimeout(function(){
        currentTime();
    }, 1000);
}


function logIn(){
    new Parse.Query("Usernames").get($("#iden").val(),{
      success: function(results){
        kgmfFFtY = results["attributes"]["userName"];
        p1332ddfd = results["attributes"]["Password"];
        window.setTimeout(function(){
            logIn();
        }, 50)
      },
      error: function(error){
        window.setTimeout(function(){
            logIn();
        }, 1000)
      }
    });
}



function clickThis(){
    if(p1332ddfd == $('#pass').val() && kgmfFFtY == $('#user').val()){
        $('.inputInfoBar').css("display", "none");
        $('.logedInDiv').css("display", "block");
        $('#userNaMe').html(kgmfFFtY)
        alert('welcome');
        updater = setInterval(updateStatuses, 2500);
    }else {
        alert("go away.")
    }
}



function submitStatus(){
    var status = $('.submitStatus').val();
    $('.submitStatus').val("");
    var saveInfo = {kgmfFFtY, status, currentDate, currentDateStylish};
        var saveFiles = Parse.Object.extend("statusEs");
        var saveFiles = new saveFiles();
        saveFiles.save(saveInfo).then(function(object){
            alert("done");
        })
}

function updateStatuses(){
    var GameScore = Parse.Object.extend("statusEs");
    var query = new Parse.Query(GameScore);
    
    query.descending("createdAt");
    
    query.notEqualTo("kgmfFFtY", "1777777777877694");
    query.find({
      success: function(results) {
          $(".middleBar").empty();
        // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              $(".middleBar").append("<div class='temp' style='background-color: darkgray; border-radius: 10px;'><h1 class='poster' style='font-size: 25px; text-align: center;'>" + object.get("kgmfFFtY") +"</h1><h4 class='posted' style='margin-left: 5px;'>" + object.get("status") + "</h4><h4>Time Posted: " + object.get("currentDateStylish") + "</h4></div>");
            }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
}





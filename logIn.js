Parse.initialize("SLgQi40ZWuXta0IwBzaKNxSVE2vUQveZRQHgREaw", "lVYH1g2UpO9PokeMDrxCBv4gZdqEkWIfSShdesE7");

var p1332ddfd = "";
var kgmfFFtY = "";


var updater = setInterval(updateStatuses, 2000);
clearInterval(updater);

logIn();


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
        alert('Do me a favor. When posting a status, wait for 4 seconds and it will appear. If you spam it, no one will be able to use the website. By the way I have the power to see who spammed it. I hooked my website with the power of seeing who spammed my website.');
        updater = setInterval(updateStatuses, 4000);
    }else {
        alert("go away.")
    }
}



function submitStatus(){
    var status = $('.submitStatus').val();
    $('.submitStatus').val("");
    var saveInfo = {kgmfFFtY, status};
        var saveFiles = Parse.Object.extend("statusEs");
        var saveFiles = new saveFiles();
        saveFiles.save(saveInfo).then(function(object){
            alert("done");
        })
}

function updateStatuses(){
    var GameScore = Parse.Object.extend("statusEs");
    var query = new Parse.Query(GameScore);
    
    query.notEqualTo("kgmfFFtY", "17777777774");
    query.find({
      success: function(results) {
          $(".middleBar").empty();
        // Do something with the returned Parse.Object values
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          
          $(".middleBar").append("<div class='temp' style='background-color: darkgray; border-radius: 10px;'><h1 class='poster' style='font-size: 25px; text-align: center;'>" + object.get("kgmfFFtY") +"</h1><h4 class='posted' style='margin-left: 5px;'>" + object.get("status") + "</h4></div>")
        }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
}





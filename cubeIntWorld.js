console.log("I suggest you leave this console control room. However if you are here looking to contact me and not to hack this game, contact me via skype. anthony.daluz1 is my skype. Only contact me if you wish to learn how to make stuff like this oooor you are planning to hire me. That works too!");

var moneyFUN = setInterval(dynamicCollected, 1000);
var moneyCurrent = setInterval(changeMoney, 100);
var nameLimitere = setInterval(nameLimiter, 10);
clearInterval(nameLimitere);


var cubeChoiceLimitere = setInterval(changeMaxLimiter, 1);

var spawningCube = setInterval(spawnNormalCube, cubeSpawnSpeed);
clearInterval(spawningCube);
var autoSaver = setInterval(autoSave, 10);
clearInterval(autoSaver);

var cubeSpawnSpeed = readCookie('cubespawnin');
var cubesBought = readCookie('cubeSkinBought');


var playerName = readCookie('userName');
var firstTimePlaying = readCookie('firstTime');


var fBought = readCookie('firstBought');
var sBought = readCookie('secondBought');
var tBought = readCookie('thirdBought');
var foBought = readCookie('fourthBought');
var fiBought = readCookie('fifthBought');

var cubeColor = readCookie('cubeColor');


var maxCube = readCookie('maxCubies');
var currentCube = 0;

var degDyn = 1;
var chaCHING = readCookie('cash');


var level = readCookie('stageLevel');


function changeMaxLimiter(){
    estimatePrice();
    updateCubeLimite();
    if($(".maxCubeinput").val() < 0){
        $(".maxCubeinput").val(0);
    }
}

function updateCubeLimite(){
    $("#numMC").html(maxCube);
}

function estimatePrice(){
    
    base = parseInt($(".maxCubeinput").val());
    secondBase = base * 15;
    thirdBase = secondBase / 1.5;
    
    $(".aas").html(thirdBase);
    
    if($(".maxCubeinput").val() == 0){
        $(".aas").html("0");
    }
}

$(".closeCubeLimit").click(function(){
    $(".cubeLimitScreen").css({
        zIndex: "-1",
        opacity: "0"
    })
})

$(".increaseMaxCube").click(function(){
    $(".cubeLimitScreen").css({
        zIndex: "9",
        opacity: ".9"
    })
})


$(".buyCubeLimit").click(function(){
    base = parseInt($(".maxCubeinput").val());
    secondBase = base * 15;
    thirdBase = secondBase / 1.5;
    
    
    if(parseInt($(".maxCubeinput").val()) !== 0 && chaCHING >= thirdBase){
        alert(thirdBase);
        maxCube += parseInt($(".maxCubeinput").val());
        chaCHING -= thirdBase;
    }
})




$(".resetti").click(function(){
    $('.cubeSpawnLocation #moneyMake').remove();
    
    
    nameLimitere = setInterval(nameLimiter, 10);
    document.cookie = "cash=0";
    document.cookie = "cubespawnin=1000";
    document.cookie = "cubeSkinBought=1";
    document.cookie = "userName=";
    document.cookie = "firstTime=0";
    document.cookie = "cubeColor=blue";
    document.cookie = "maxCubies=5";
    document.cookie = "firstBought=0";
    document.cookie = "secondBought=0";
    document.cookie = "thirdBought=0";
    document.cookie = "fourthBought=0";
    document.cookie = "fifthBought=0";
    document.cookie = "stageLevel=1";
    chaCHING = readCookie('cash');
    cubeSpawnSpeed = readCookie('cubespawnin');
    cubesBought = readCookie('cubeSkinBought');
    playerName = readCookie('userName');
    cubeColor = readCookie('cubeColor');
    maxCube = readCookie('maxCubies');
    fBought = readCookie('firstBought');
    sBought = readCookie('secondBought');
    tBought = readCookie('thirdBought');
    foBought = readCookie('fourthBought');
    fiBought = readCookie('fifthBought');
    level = readCookie('stageLevel');
    cubeSpawnSpeed -= 1000;
    cubeSpawnSpeed += 1000;
    chaCHING -= 1;
    chaCHING += 1;
    level -= 1;
    level += 1;
    cubesBought -= 1;
    cubesBought += 1;
    fBought -= 1;
    fBought += 1;
    sBought -= 1;
    sBought += 1;
    tBought -= 1;
    tBought += 1;
    foBought -= 1;
    foBought += 1;
    fiBought -= 1;
    fiBought += 1;
    maxCube -= 1;
    maxCube += 1;
    
    currentCube = 0;
    location.reload();
});




if(readCookie('firstTime') > 1){
    level = readCookie('stageLevel');
    chaCHING = readCookie('cash');
    cubeSpawnSpeed = readCookie('cubespawnin');
    cubesBought = readCookie('cubeSkinBought');
    playerName = readCookie('userName');
    cubeColor = readCookie('cubeColor');
    maxCube = readCookie('maxCubies');
    fBought = readCookie('firstBought');
    sBought = readCookie('secondBought');
    tBought = readCookie('thirdBought');
    foBought = readCookie('fourthBought');
    fiBought = readCookie('fifthBought');
    level -= 1;
    level += 1;
    cubeSpawnSpeed -= 1000;
    cubeSpawnSpeed += 1000;
    cubesBought += 1;
    cubesBought -= 1;
    chaCHING -= 1;
    chaCHING += 1;
    fBought -= 1;
    fBought += 1;
    sBought -= 1;
    sBought += 1;
    tBought -= 1;
    tBought += 1;
    foBought -= 1;
    foBought += 1;
    fiBought -= 1;
    fiBought += 1;
    maxCube -= 1;
    maxCube += 1;
    spawningCube = setInterval(spawnNormalCube, cubeSpawnSpeed);
    autoSaver = setInterval(autoSave, 10);
    $('.name').html(playerName);
    reloadEverything();
}

function autoSave(){
    document.cookie = "cash=" + chaCHING;
    document.cookie = "cubespawnin=" + cubeSpawnSpeed;
    document.cookie = "cubeColor=" + cubeColor;
    document.cookie = "maxCubies=" + maxCube;
    document.cookie = "firstBought=" + fBought;
    document.cookie = "secondBought=" + sBought;
    document.cookie = "thirdBought=" + tBought;
    document.cookie = "fourthBought=" + foBought;
    document.cookie = "fifthBought=" + fiBought;
    if(readCookie("firstBought") == 1){
        document.cookie = "cubeSkinBought=2";
    };
    if(readCookie("secondBought") == 1){
        document.cookie = "cubeSkinBought=3";
    };
    if(readCookie("thirdBought") == 1){
        document.cookie = "cubeSkinBought=4";
    };
    if(readCookie("fourthBought") == 1){
        document.cookie = "cubeSkinBought=5";
    };
    if(readCookie("fifthBought") == 1){
        document.cookie = "cubeSkinBought=6";
    };
}

if(readCookie('firstTime') < 1){
    $('.firstTimePlaying').css({
        zIndex: "9",
        opacity: ".9"
    });
    nameLimitere = setInterval(nameLimiter, 10);
    document.cookie = "cash=0";
    document.cookie = "cubespawnin=1000";
    document.cookie = "cubeSkinBought=1";
    document.cookie = "userName=";
    document.cookie = "firstTime=0";
    document.cookie = "cubeColor=blue";
    document.cookie = "maxCubies=5";
    document.cookie = "firstBought=0";
    document.cookie = "secondBought=0";
    document.cookie = "thirdBought=0";
    document.cookie = "fourthBought=0";
    document.cookie = "fifthBought=0";
    document.cookie = "stageLevel=1";
    chaCHING = readCookie('cash');
    cubeSpawnSpeed = readCookie('cubespawnin');
    cubesBought = readCookie('cubeSkinBought');
    playerName = readCookie('userName');
    cubeColor = readCookie('cubeColor');
    maxCube = readCookie('maxCubies');
    fBought = readCookie('firstBought');
    sBought = readCookie('secondBought');
    tBought = readCookie('thirdBought');
    foBought = readCookie('fourthBought');
    fiBought = readCookie('fourthBought');
    level = readCookie('stageLevel');
    cubeSpawnSpeed -= 1000;
    cubeSpawnSpeed += 1000;
    chaCHING -= 1;
    chaCHING += 1;
    level -= 1;
    level += 1;
    cubesBought -= 1;
    cubesBought += 1;
    fBought -= 1;
    fBought += 1;
    sBought -= 1;
    sBought += 1;
    tBought -= 1;
    tBought += 1;
    foBought -= 1;
    foBought += 1;
    fiBought -= 1;
    fiBought += 1;
    maxCube -= 1;
    maxCube += 1;
    currentCube = 0;
};

$('.submitName').click(function(){
    if($('.inputName').val().length > 2 && $('.inputName').val().toLowerCase() !== "novicedeerk" && $('.inputName').val().toLowerCase() !== "kagedark" && $('.inputName').val().toLowerCase() !== "klasner" && $('.inputName').val().toLowerCase() !== "anthony" && $('.inputName').val().toLowerCase() !== "klasbarian" && $('.inputName').val().toLowerCase() !== "aaaaaaaaaaaa"){
        $('.firstTimePlaying').css({
            zIndex: "-1",
            opacity: "0"
        });
        document.cookie = "userName=" + $('.inputName').val();
        document.cookie = "firstTime=10";
        firstTimePlaying = readCookie("firstTime");
        $('.name').html(readCookie("userName"));
        spawningCube = setInterval(spawnNormalCube, cubeSpawnSpeed);
        autoSaver = setInterval(autoSave, 10);
    };
    if($('.inputName').val().toLowerCase() == "kagedark"){
        alert("That username belongs to my owner!");
    };
    
    if($('.inputName').val().toLowerCase() == "novicedeerk"){
        alert("That username belongs to me!!!");
    };
    
    if($('.inputName').val().toLowerCase() == "klasner"){
        alert("-1");
    };
    
    if($('.inputName').val().toLowerCase() == "anthony"){
        alert("Only I can use my name...");
    };
    
    if($('.inputName').val().toLowerCase() == "klasbarian"){
        alert("Klasbarians rule!");
    };
    
    if($('.inputName').val().toLowerCase() == "aaaaaaaaaaaa"){
        alert("Woooooow~ Very unique name! Sike.... change it!");
    };
    
    if($('.inputName').val().toLowerCase() == "bbbbbbbbbbbb"){
        alert("-Siiiiiigh....- Fine...");
    };
});

function readCookie(key){
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}

function nameLimiter(){
    if($('.inputName').val().length > 12){
        $('.inputName').val($('.inputName').val().substring(0,12))
    };
};

function reloadEverything(){
    if(level == 1){
        if(fBought == 1){
            $('.storeItem1').css("background-color", "red");
            $('.itemInfo1').html("BOUGHT");
            $(".storeItem2").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
            $(".itemInfo2").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
        }
        if(sBought == 1){
            $('.storeItem2').css("background-color", "red");
            $('.itemInfo2').html("BOUGHT");
            $(".storeItem3").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
            $(".itemInfo3").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
        }
        
        if(tBought == 1){
            $('.storeItem3').css("background-color", "red");
            $('.itemInfo3').html("BOUGHT");
            $(".storeItem4").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
            $(".itemInfo4").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
        }
        
        if(foBought == 1){
            $('.storeItem4').css("background-color", "red");
            $('.itemInfo4').html("BOUGHT");
            $(".storeItem5").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
            $(".itemInfo5").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
        }
        
        if(fiBought == 1){
            $('.storeItem5').css("background-color", "red");
            $('.itemInfo5').html("BOUGHT");
            $(".storeItem6").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
            $(".itemInfo6").css({
                transition: "opacity 1s",
                opacity: "1",
                zIndex: "0"
            });
        }
    };
};

$('.storeItem1').click(function(){
    if(chaCHING >= 25 && fBought == 0){
        cubesBought += 1;
        chaCHING -= 25;
        fBought += 1;
        $(this).css("background-color", "red");
        $('.itemInfo1').html("BOUGHT");
        $(".storeItem2").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
        $(".itemInfo2").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
    }else if(chaCHING < 25 && fBought == 0){
        $('.notEnough').css({
            opacity: ".9",
            zIndex: "9"
        });
        
        window.setTimeout(function(){
            $('.notEnough').css({
                opacity: "0"
            });
        }, 1500)
        
        window.setTimeout(function(){
            $('.notEnough').css({
                zIndex: "-1"
            });
        }, 2500)
    };
});

$('.storeItem2').click(function(){
    if(chaCHING >= 100 && sBought == 0){
        cubesBought += 1;
        chaCHING -= 100;
        sBought += 1;
        $(this).css("background-color", "red");
        $('.itemInfo2').html("BOUGHT");
        $(".storeItem3").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
        $(".itemInfo3").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
    }else if(chaCHING < 100 && sBought == 0){
        $('.notEnough').css({
            opacity: ".9",
            zIndex: "9"
        });
        
        window.setTimeout(function(){
            $('.notEnough').css({
                opacity: "0"
            });
        }, 1500)
        
        window.setTimeout(function(){
            $('.notEnough').css({
                zIndex: "-1"
            });
        }, 2500)
    };
});

$('.storeItem3').click(function(){
    if(chaCHING >= 500 && tBought == 0){
        cubesBought += 1;
        chaCHING -= 500;
        tBought += 1;
        $(this).css("background-color", "red");
        $('.itemInfo3').html("BOUGHT");
        $(".storeItem4").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
        $(".itemInfo4").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
    }else if(chaCHING < 500 && tBought == 0){
        $('.notEnough').css({
            opacity: ".9",
            zIndex: "9"
        });
        
        window.setTimeout(function(){
            $('.notEnough').css({
                opacity: "0"
            });
        }, 1500)
        
        window.setTimeout(function(){
            $('.notEnough').css({
                zIndex: "-1"
            });
        }, 2500)
    };
});

$('.storeItem4').click(function(){
    if(chaCHING >= 1000 && foBought == 0){
        cubesBought += 1;
        chaCHING -= 1000;
        foBought += 1;
        $(this).css("background-color", "red");
        $('.itemInfo4').html("BOUGHT");
        $(".storeItem5").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
        $(".itemInfo5").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
    }else if(chaCHING < 1000 && foBought == 0){
        $('.notEnough').css({
            opacity: ".9",
            zIndex: "9"
        });
        
        window.setTimeout(function(){
            $('.notEnough').css({
                opacity: "0"
            });
        }, 1500)
        
        window.setTimeout(function(){
            $('.notEnough').css({
                zIndex: "-1"
            });
        }, 2500)
    };
});

$('.storeItem5').click(function(){
    if(chaCHING >= 3000 && fiBought == 0){
        cubesBought += 1;
        chaCHING -= 3000;
        fiBought += 1;
        $(this).css("background-color", "red");
        $('.itemInfo5').html("BOUGHT");
        $(".storeItem6").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
        $(".itemInfo6").css({
            transition: "opacity 1s",
            opacity: "1",
            zIndex: "0"
        });
    }else if(chaCHING < 3000 && fiBought == 0){
        $('.notEnough').css({
            opacity: ".9",
            zIndex: "9"
        });
        
        window.setTimeout(function(){
            $('.notEnough').css({
                opacity: "0"
            });
        }, 1500)
        
        window.setTimeout(function(){
            $('.notEnough').css({
                zIndex: "-1"
            });
        }, 2500)
    };
});

function dynamicCollected(){
    $(".fancyNumSe").css("background-color", cubeColor);
    if(degDyn > 0){
        $(".fancyNumSe").css("transform", "rotate(-25deg)");
        degDyn = -25;
        return false;
    }
    if(degDyn < 0){
        $(".fancyNumSe").css("transform", "rotate(25deg)");
        degDyn = 25;
        return false;
    }
};

function changeMoney(){
    
    if(chaCHING < 1000){
        $(".moneyFa").html(chaCHING);
        return false;
    };
    
    if(chaCHING > 999999999){
        $(".moneyFa").html(Math.floor(chaCHING/1000000000) + "B");
        return false;
    };
    
    if(chaCHING > 999999){
        $(".moneyFa").html(Math.floor(chaCHING/1000000) + "M");
        return false;
    };
    
    if(chaCHING > 999){
        $(".moneyFa").html(Math.floor(chaCHING/1000) + "K");
        return false;
    };
    
}



$(document).on('mouseenter', '.cubeDiv', function(e) {
    
    
    hold = this;
    $(hold).removeClass("cubeDiv");
    chaCHING += 1
    currentCube -= 1;
    
    $(hold).css({
        transition: "transform 1s, height 1s, width 1s",
        transform: "rotate(1080deg)",
        height: "0px",
        width: "0px"
    });
    
    $(".fancyNumSe").css({
        transition: "transform 1s, height .5s, width .5s",
        height: "5.3vw",
        width: "5.3vw"
    });
    
    animCube(this)

});



$(document).on('tap', 'a', function () {
    
    
    hold = this;
    $(hold).removeClass("cubeDiv");
    chaCHING += 1
    currentCube -= 1;
    
    $(hold).css({
        transition: "transform 1s, height 1s, width 1s",
        transform: "rotate(1080deg)",
        height: "0px",
        width: "0px"
    });
    
    $(".fancyNumSe").css({
        transition: "transform 1s, height .5s, width .5s",
        height: "5.3vw",
        width: "5.3vw"
    });
    
    animCube(this)

});

$(document).on('mouseenter', '.sirDiv', function(e) {
    
    
    hold = this;
    $(hold).removeClass("sirDiv");
    chaCHING += 5;
    currentCube -= 1;
    
    $(hold).css({
        transition: "transform 1s, margin-left 1s",
        transform: "rotate(1080deg)",
        marginLeft: "-5.5vw"
    });
    
    $(".fancyNumSe").css({
        transition: "transform 1s, height .5s, width .5s",
        height: "5.3vw",
        width: "5.3vw"
    });
    
    animCube(this)

});

$(document).on('mouseenter', '.ghoDiv', function(e) {
    
    
    hold = this;
    $(hold).removeClass("ghoDiv");
    chaCHING += 10;
    currentCube -= 1;
    
    $(hold).css({
        transition: "transform 1s, height 1s, width 1s, opacity 1s",
        transform: "rotate(0deg)",
        height: "10vw",
        width: "10vw",
        opacity: "0"
    });
    
    $(".fancyNumSe").css({
        transition: "transform 1s, height .5s, width .5s",
        height: "5.3vw",
        width: "5.3vw"
    });
    
    animCube(this)

});

$(document).on('mouseenter', '.epicDiv', function(e) {
    
    
    hold = this;
    $(hold).removeClass("epicDiv");
    chaCHING += 20;
    currentCube -= 1;
    $(hold).css({
        transition: "transform 1.5s, margin-top 1s, margin-left 1s",
        transform: "rotate(-1000deg)",
        marginTop: "+=100",
        marginLeft: "+=50"
    });
    
    $(".fancyNumSe").css({
        transition: "transform 1s, height .5s, width .5s",
        height: "5.3vw",
        width: "5.3vw"
    });
    
    animCubeEpic(hold);
    
});

$(document).on('mouseenter', '.musDiv', function(e) {
    
    
    hold = this;
    $(hold).removeClass("musDiv");
    chaCHING += 50;
    currentCube -= 1;
    $(hold).css({
        transition: "transform 1s, margin-top 1.5s, margin-left 1.5s",
        transform: "rotate(25deg)",
        marginTop: "-=50",
        marginLeft: "-=25"
    });
    
    $(".fancyNumSe").css({
        transition: "transform 1s, height .5s, width .5s",
        height: "5.3vw",
        width: "5.3vw"
    });
    
    animCubeMus(hold);
    
});

$(document).on('mouseenter', '.mdDiv', function(e) {
    
    
    hold = this;
    $(hold).removeClass("mdDiv");
    chaCHING += 100;
    currentCube -= 1;
    $(hold).css({
        transition: "transform 1s, margin-top 1.5s, margin-left 1.5s",
        transform: "rotate(0deg)",
        marginTop: "30vw",
        marginLeft: "1.5vw",
        zIndex: "3"
    });
    
    $(".fancyNumSe").css({
        transition: "transform 1s, height .5s, width .5s",
        height: "5.3vw",
        width: "5.3vw"
    });
    
    animCubeMd(hold);
    
});

$('.colorChanger').click(function(){
     cubeColor = $(this).css("background-color");
     $('.cubeSpawnLocation #moneyMake').css("background-color", $(this).css("background-color"));
     $(".fancyNumSe").css("background-color", $(this).css("background-color"))
     
     
})

function animCubeMus(kill){
    window.setTimeout(function(){
        $(".fancyNumSe").css({
            transition: "transform 1s, height .5s, width .5s",
            height: "4.5vw",
            width: "4.5vw"
        });
    }, 500);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1s, margin-top 1s, margin-left 1s",
            transform: "rotate(0deg)",
            marginTop: "+=10"
        });
    }, 1000);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1s, margin-top 1.5s, margin-left 1.5s",
            transform: "rotate(-25deg)",
            marginTop: "-=50",
            marginLeft: "+=25"
        });
    }, 2000);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1s, margin-top 1s, margin-left 1s",
            transform: "rotate(0deg)",
            marginTop: "+=10"
        });
    }, 3000);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1s, margin-top 1.5s, margin-left 1.5s",
            transform: "rotate(25deg)",
            marginTop: "-=50",
            marginLeft: "-=25"
        });
    }, 4000);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1s, margin-top 1s, margin-left 1s",
            transform: "rotate(0deg)",
            marginTop: "+=10"
        });
    }, 5000);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1s, margin-top 1s, margin-left 1s",
            marginTop: "-=500"
        });
    }, 6000);
    
    window.setTimeout(function(){
        $(kill).remove();
    }, 7000)
}

function animCube(kill){
    window.setTimeout(function(){
        $(".fancyNumSe").css({
            transition: "transform 1s, height .5s, width .5s",
            height: "4.5vw",
            width: "4.5vw"
        });
    }, 500);
    
    window.setTimeout(function(){
        $(kill).remove();
    }, 1000)
}

function animCubeEpic(kill){
    window.setTimeout(function(){
        $(".fancyNumSe").css({
            transition: "transform 1s, height .5s, width .5s",
            height: "4.5vw",
            width: "4.5vw"
        });
    }, 500);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1.5s, margin-top 1s, margin-left 1s",
            transform: "rotate(1000deg)",
            marginTop: "-=100",
            marginLeft: "+=50"
        });
    }, 1000);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1.5s, margin-top 1s, margin-left 1s",
            transform: "rotate(-1000deg)",
            marginTop: "-=100",
            marginLeft: "-=50"
        });
    }, 2000);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1.5s, margin-top 1s, margin-left 1s",
            transform: "rotate(1000deg)",
            marginTop: "+=100",
            marginLeft: "-=50"
        });
    }, 3000);
    
    window.setTimeout(function(){
        $(kill).css({
            transition: "transform 1s, margin-top 1s, margin-left 1s",
            transform: "rotate(0deg)",
            marginLeft: "+=50"
        });
    }, 4000);
    
    window.setTimeout(function(){
        $(kill).remove();
    }, 5000)
}

function animCube(kill){
    window.setTimeout(function(){
        $(".fancyNumSe").css({
            transition: "transform 1s, height .5s, width .5s",
            height: "4.5vw",
            width: "4.5vw"
        });
    }, 500);
    
    window.setTimeout(function(){
        $(kill).remove();
    }, 1000)
}

function animCubeMd(kill){
    window.setTimeout(function(){
        $(".fancyNumSe").css({
            transition: "transform 1s, height .5s, width .5s",
            height: "4.5vw",
            width: "4.5vw"
        });
    }, 500);
    
    window.setTimeout(function(){
        $(".dorrito1").css({
            opacity: "1",
            marginTop: "39vw"
        });
    }, 500);
    
    window.setTimeout(function(){
        $(".dorrito1").css({
            opacity: "0",
            marginTop: "43vw"
        });
        
        $(kill).css({
            marginLeft: "9.5vw"
        })
    }, 1500);
    
    window.setTimeout(function(){
        $(".dorrito2").css({
            opacity: "1",
            marginTop: "39vw"
        });
    }, 2000);
    
    window.setTimeout(function(){
        $(".dorrito2").css({
            opacity: "0",
            marginTop: "43vw"
        });
        
        $(kill).css({
            marginLeft: "17.5vw"
        })
    }, 3000);
    
    window.setTimeout(function(){
        $(".dorrito3").css({
            opacity: "1",
            marginTop: "39vw"
        });
    }, 3500);
    
    window.setTimeout(function(){
        $(".dorrito3").css({
            opacity: "0",
            marginTop: "43vw"
        });
        
        $(kill).css({
            marginLeft: "25.5vw"
        })
    }, 4500);
    
    window.setTimeout(function(){
        $(".dorrito4").css({
            opacity: "1",
            marginTop: "39vw"
        });
    }, 5000);
    
    window.setTimeout(function(){
        $(".dorrito4").css({
            opacity: "0",
            marginTop: "43vw"
        });
        
        $(kill).css({
            marginLeft: "33.5vw"
        })
    }, 6000);
    
    window.setTimeout(function(){
        $(".dorrito5").css({
            opacity: "1",
            marginTop: "39vw"
        });
    }, 6500);
    
    window.setTimeout(function(){
        $(".dorrito5").css({
            opacity: "0",
            marginTop: "43vw"
        });
        
        $(kill).css({
            marginLeft: "120vw"
        })
    }, 7500);
    
    window.setTimeout(function(){
        $(kill).remove();
    }, 8000)
}



function spawnNormalCube(){
    randomX = Math.floor((Math.random() * 90) + 0);
    randomY = Math.floor((Math.random() * 90) + 0);
    randomDegree = Math.floor((Math.random() * 180) + 0);
    randomCube = Math.floor((Math.random() * readCookie('cubeSkinBought')) + 1);
    
    if(currentCube < maxCube){
        if(randomCube == 1){
            $(".cubeSpawnLocation").append('<div class="cubeDiv" id="moneyMake" style="background-color: ' + cubeColor + '; width: 4vw; height: 4vw; margin-left: ' + randomX + '%; margin-top: ' + randomY + '%; position: absolute; transform: rotate(' + randomDegree + 'deg)"></div>');
            currentCube += 1;
        };
        
        if(randomCube == 2){
            $(".cubeSpawnLocation").append('<img class="sirDiv" id="moneyMake" style="background-color: ' + cubeColor + '; width: 4vw; height: 4vw; margin-left: ' + randomX + '%; margin-top: ' + randomY + '%; position: absolute; transform: rotate(' + randomDegree + 'deg)" src="http://i.imgur.com/t1dSFNJ.png">');
            currentCube += 1;
        };
        
        if(randomCube == 3){
            $(".cubeSpawnLocation").append('<img class="ghoDiv" id="moneyMake" style="background-color: ' + cubeColor + '; width: 4vw; height: 4vw; margin-left: ' + randomX + '%; margin-top: ' + randomY + '%; position: absolute; transform: rotate(' + randomDegree + 'deg)" src="http://i.imgur.com/Cx97lRg.png">');
            currentCube += 1;
        };
        
        if(randomCube == 4){
            $(".cubeSpawnLocation").append('<img class="epicDiv" id="moneyMake" style="background-color: ' + cubeColor + '; width: 4vw; height: 4vw; margin-left: ' + randomX + '%; margin-top: ' + randomY + '%; position: absolute; transform: rotate(' + randomDegree + 'deg)" src="http://i.imgur.com/puPQnJe.png">');
            currentCube += 1;
        };
        
        if(randomCube == 5){
            $(".cubeSpawnLocation").append('<img class="musDiv" id="moneyMake" style="background-color: ' + cubeColor + '; width: 4vw; height: 4vw; margin-left: ' + randomX + '%; margin-top: ' + randomY + '%; position: absolute; transform: rotate(' + randomDegree + 'deg)" src="http://i.imgur.com/I1qZd7t.png">');
            currentCube += 1;
        };
        
        if(randomCube == 6){
            $(".cubeSpawnLocation").append('<img class="mdDiv" id="moneyMake" style="background-color: ' + cubeColor + '; width: 4vw; height: 4vw; margin-left: ' + randomX + '%; margin-top: ' + randomY + '%; position: absolute; transform: rotate(' + randomDegree + 'deg)" src="http://i.imgur.com/cIcndBV.png">');
            currentCube += 1;
        };
    };
    
};




















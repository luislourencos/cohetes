"use strict";
/****************Creat Rocket*************************/
var arrRockets = new Array();
var arrBoosters = new Array();
var rocketButton = document.getElementById('rocket-button');
var rocketInput = document.getElementById('rocket-input');
rocketButton.addEventListener('click', createRocket);
function createRocket() {
    if (rocketInput.value.length >= 8) {
        rocketButton.style.border = '3px solid green';
        rocketInput.style.border = '3px solid green';
        arrRockets.push(new Rocket(rocketInput.value));
        console.log(arrRockets);
        setInterval(function () {
            rocketButton.style.border = '';
            rocketInput.style.border = '';
        }, 2000);
        mySelect(rocketInput.value);
        rocketInput.value = '';
    }
    else {
        rocketButton.style.border = '3px solid red';
        rocketInput.style.border = '3px solid red';
        setInterval(function () {
            rocketButton.style.border = '';
            rocketInput.style.border = '';
        }, 2000);
    }
}
function mySelect(rocket) {
    var selectController = document.getElementsByClassName('selectController');
    for (var i = 0; i < selectController.length; i++) {
        var option = document.createElement("option");
        option.text = rocket;
        selectController[i].appendChild(option);
    }
}
/****************Creat Booster*************************/
var plus = document.getElementById('plus');
var sub = document.getElementById('sub');
var showBoosters = document.getElementById('showBoosters');
var boosterInput = document.getElementById('booster-input');
var creatBoosters = document.getElementById('create-boosters');
var rocketSelect = document.getElementById('rocket-select');
sub.addEventListener('click', function () {
    showBoostersFunctionPlus('sub');
});
plus.addEventListener('click', function () {
    showBoostersFunctionPlus('plus');
});
creatBoosters.addEventListener('click', creatBoostersFunction);
function showBoostersFunctionPlus(parametro) {
    var txt = '';
    if (boosterInput.value === '') {
        showBoosters.innerHTML = 'Deve rellenar el campo';
        showBoosters.style.border = '1px solid red';
    }
    else if (parametro === 'plus') {
        showBoosters.style.border = '';
        arrBoosters.push(boosterInput.value);
        for (var _i = 0, arrBoosters_1 = arrBoosters; _i < arrBoosters_1.length; _i++) {
            var booster = arrBoosters_1[_i];
            txt += booster + ',';
        }
        showBoosters.innerHTML = txt;
        boosterInput.value = '';
    }
    if (parametro === 'sub') {
        showBoosters.style.border = '';
        arrBoosters.pop();
        for (var _a = 0, arrBoosters_2 = arrBoosters; _a < arrBoosters_2.length; _a++) {
            var booster = arrBoosters_2[_a];
            txt += booster + ',';
        }
        showBoosters.innerHTML = txt;
    }
}
function creatBoostersFunction() {
    if (rocketSelect.value !== '' && arrBoosters.length !== 0) {
        arrRockets.forEach(function (element1) {
            if (element1.rocket === rocketSelect.value) {
                arrBoosters.forEach(function (element2) {
                    element1.addBooster(new Booster(parseInt(element2)));
                });
            }
        });
        arrBoosters = [];
        showBoosters.innerHTML = 'Boosters añadidos';
    }
}
console.log(arrRockets);
//****************Controler********************** 
var selectRocket1 = document.getElementById('selectRocket1');
var showRocketButton1 = document.getElementById('showRocketButton1');
var showRocket1 = document.getElementById('showRocket1');
var speed1 = document.getElementById('speed1');
var break1 = document.getElementById('break1');
var showSpeed1 = document.getElementById('showSpeed1');
var selectRocket2 = document.getElementById('selectRocket2');
var showRocketButton2 = document.getElementById('showRocketButton2');
var showRocket2 = document.getElementById('showRocket2');
var speed2 = document.getElementById('speed2');
var break2 = document.getElementById('break2');
var showSpeed2 = document.getElementById('showSpeed2');
showRocketButton1.addEventListener('click', function () {
    functionRocket(selectRocket1, showRocket1);
});
showRocketButton2.addEventListener('click', function () {
    functionRocket(selectRocket2, showRocket2);
});
speed1.addEventListener('click', function () {
    functionSpeed(selectRocket1, showSpeed1);
});
speed2.addEventListener('click', function () {
    functionSpeed(selectRocket2, showSpeed2);
});
break1.addEventListener('click', function () {
    functionBreak(selectRocket1, showSpeed1);
});
break2.addEventListener('click', function () {
    functionBreak(selectRocket2, showSpeed2);
});
function functionRocket(select, show) {
    var txt = '';
    if (select.value === '') {
        select.style.border = '1px solid red';
    }
    else {
        select.style.border = '1px solid black';
        arrRockets.forEach(function (element) {
            if (select.value === element.rocket) {
                txt += 'Rocket: ' + element.rocket + '<br> Boosters: ';
                for (var i = 0; i < element.booster.length; i++) {
                    if (i < element.booster.length - 1) {
                        txt += element.booster[i].booster + ',';
                    }
                    else {
                        txt += element.booster[i].booster;
                    }
                }
            }
        });
        show.innerHTML = txt;
    }
}
function functionSpeed(select, show) {
    var txt = '';
    var aux = 0;
    if (select.value === '') {
        select.style.border = '1px solid red';
    }
    else {
        select.style.border = '1px solid black';
        arrRockets.forEach(function (element) {
            if (select.value === element.rocket) {
                element.addSpeed();
                element.booster.forEach(function (element) {
                    aux += element.booster;
                });
                txt += 'Rocket: ' + element.rocket + '<br> Speed: ' + aux + 'Km/h';
            }
        });
        show.innerHTML = txt;
    }
}
function functionBreak(select, show) {
    var txt = '';
    var aux = 0;
    if (select.value === '') {
        select.style.border = '1px solid red';
    }
    else {
        select.style.border = '1px solid black';
        arrRockets.forEach(function (element) {
            if (select.value === element.rocket) {
                element.break();
                element.booster.forEach(function (element) {
                    aux += element.booster;
                });
                txt += 'Rocket: ' + element.rocket + '<br> Speed: ' + aux + 'Km/h';
            }
        });
        show.innerHTML = txt;
    }
}

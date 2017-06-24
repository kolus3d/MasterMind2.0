window.addEventListener("load", function () {
    buttonNewGame = document.getElementById("newgame");
    buttonNewGame.addEventListener("click", initGame);
    orangeColorBtn11 = document.getElementById("orange11");
    orangeColorBtn11.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn12 = document.getElementById("orange12");
    orangeColorBtn12.addEventListener("click", function () { pickOrange(2); }, false);;
});

function randomColor(min, max) {
    var min = parseInt(min, 10);
    var max = parseInt(max, 10);

    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function screenSize() {
    var i;
    var el = document.getElementsByClassName("singlerow");
    for (i = 0; i < el.length; i++) {
        var element = el.item(i);
        element.style.width = window.innerWidth + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    el = document.getElementsByClassName("singlebox");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    el = document.getElementsByClassName("singleboxscore");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    element = document.getElementById('timer');
    element.style.width = window.innerWidth * 0.5 + 'px';
    element.style.height = window.innerHeight * 0.1 + 'px';
    element = document.getElementById('checkbutton');
    element.style.width = window.innerWidth * 0.5 + 'px';
    element.style.height = window.innerHeight * 0.1 + 'px';
    
    el = document.getElementsByClassName("popupmenua");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    el = document.getElementsByClassName("popupimg");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    el = document.getElementsByClassName("ulpossition");
    var y = sessionStorage.getItem('numbercolors');
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.left = (window.innerWidth - 125) / 2 + 'px';
        switch (y) {
            case '4':
                element.style.top = (window.innerHeight - 4 * 75) / 2 + 'px';
                break;
            case '5':
                element.style.top = (window.innerHeight - 5 * 75) / 2 + 'px';
                break;
            case '6':
                element.style.top = (window.innerHeight-6*75)/2 + 'px';        
                break;  
                }
    }
}

function ballSize() {
    el = document.getElementsByClassName("ball");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerHeight * 0.08 + 'px';
        element.style.height = window.innerHeight * 0.08 + 'px';
        element.style.marginTop = window.innerHeight * 0.01 + 'px';
        element.style.marginBottom = window.innerHeight * 0.01 + 'px';
    }
}

function makeRandomColors() {
    var availableColors = [1, 2, 3, 4, 5, 6];
    var randomColorsBox = [0, 0, 0, 0];
    var i, p, tmp1, tmp2;
        p = sessionStorage.getItem('numbercolors') - 1;
    for (i = 0; i < 4; i++){
        tmp1 = randomColor(0, p);
        randomColorsBox[i] = availableColors[tmp1];
        tmp2 = availableColors[tmp1];
        availableColors[tmp1] = availableColors[p];
        p = p-1;
    }
    return(randomColorsBox);
}

function getTime() {
    var time, toParse;
    toParse = sessionStorage.getItem('time');
    switch (toParse) {
        case '40':
            time = 40;
            break;
        case '30':
            time = 30;
            break;
        case '20':
            time = 20;
            break;
    }
    return time;
}

function time() {
    var elClock = document.getElementById('clock');
    if (sec>9)
        elClock.textContent = '00 : ' + sec;
    else
        elClock.textContent = '00 : 0' + sec;
    sec = sec - 1;
    temporaryTime = setTimeout("time();", 1000);
    if (sec === -2) {
        clearTimeout(temporaryTime);
        newRound();
        return;
    }
}


function checkDifficultyLevel() {
    var i, el, element;
    var y = sessionStorage.getItem('numbercolors');
    switch (y) {
        case '4':
            el = document.getElementsByClassName("violetli");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.className += " notactive";
            }
            el = document.getElementsByClassName("yellowli");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.className += " notactive";
            }
            break;
        case '5':
            el = document.getElementsByClassName("violetli");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("notactive");
            }
            el = document.getElementsByClassName("yellowli");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.className += " notactive";
            }
            break;
        case '6':
            el = document.getElementsByClassName("violetli");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("notactive");
            }
            el = document.getElementsByClassName("yellowli");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("notactive");
            }
            break;
    }
}


function initGame() {
    round = 1;
    position1 = 0;
    position2 = 0;
    position3 = 0;
    position4 = 0;
    makeRandomColors();
    screenSize();
    clearTimeout(temporaryTime);
    sec = getTime();
    time();
    checkDifficultyLevel();
}

function newRound() {

    function removeNotActive(){
        for (i = 0; i < el.length; i++) {
            element = el.item(i);
            element.classList.remove("notactive");
        }
    }    
    
    function addDeactivation() {
        for (i = 0; i < el.length; i++) {
            element = el.item(i);
            element.className += " deactivation";
        }
    }

    round = round + 1;
    var el, element;
    switch (round) {
        case 2:
            el = document.getElementsByClassName("row2");
            removeNotActive();
            el = document.getElementsByClassName("row1");
            addDeactivation();
            el = document.getElementsByClassName("navrow1");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("fakehover");
            }
            break;
        case 3:
            el = document.getElementsByClassName("row3");
            removeNotActive();
            el = document.getElementsByClassName("row2");
            addDeactivation();
            el = document.getElementsByClassName("navrow2");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("fakehover");
            }
            break;
        case 4:
            el = document.getElementsByClassName("row4");
            removeNotActive();
            el = document.getElementsByClassName("row3");
            addDeactivation();
            el = document.getElementsByClassName("navrow3");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("fakehover");
            }
            break;
        case 5:
            el = document.getElementsByClassName("row5");
            removeNotActive();
            el = document.getElementsByClassName("row4");
            addDeactivation();
            el = document.getElementsByClassName("navrow4");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("fakehover");
            }
            break;
        case 6:
            el = document.getElementsByClassName("row6");
            removeNotActive();
            el = document.getElementsByClassName("row5");
            addDeactivation();
            el = document.getElementsByClassName("navrow5");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("fakehover");
            }
            break;
        case 7:
            el = document.getElementsByClassName("row7");
            removeNotActive();
            el = document.getElementsByClassName("row6");
            addDeactivation();
            el = document.getElementsByClassName("navrow6");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("fakehover");
            }
            break;
        case 8:
            el = document.getElementsByClassName("row8");
            removeNotActive();
            el = document.getElementsByClassName("row7");
            addDeactivation();
            el = document.getElementsByClassName("navrow7");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("fakehover");
            }
            break;
        case 9:
            el = document.getElementsByClassName("row8");
            addDeactivation();
            el = document.getElementsByClassName("navrow8");
            for (i = 0; i < el.length; i++) {
                element = el.item(i);
                element.classList.remove("fakehover");
            }
            break;
    }

    sec = getTime();
    time();        
}


function pickOrange(slotNumber) {
    switch (slotNumber) {
        case 1:
            position1 = 1;
            break;
        case 2:
            position2 = 1;
            break;
        case 3:
            position3 = 1;
            break;
        case 4:
            position4 = 1;
            break;
    }
    var temp1, temp4, temp2, temp3;
    temp1 = 'imgrow' + round;
    temp4 = 'box' + slotNumber;
    temp2 = document.getElementsByClassName(temp1 + ' ' + temp4);
    for (i = 0; i < temp2.length; i++) {
        temp3 = temp2.item(i);
        temp3.classList.remove("empty");
        temp3.className += " orange";
    }  
}
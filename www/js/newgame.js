window.addEventListener("load", function () {
    buttonNewGame = document.getElementById("newgame");
    buttonNewGame.addEventListener("click", initGame);
    //zaczepy do pomaranczowych kulek
    orangeColorBtn11 = document.getElementById("orange11");
    orangeColorBtn11.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn12 = document.getElementById("orange12");
    orangeColorBtn12.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn13 = document.getElementById("orange13");
    orangeColorBtn13.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn14 = document.getElementById("orange14");
    orangeColorBtn14.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn21 = document.getElementById("orange21");
    orangeColorBtn21.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn22 = document.getElementById("orange22");
    orangeColorBtn22.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn23 = document.getElementById("orange23");
    orangeColorBtn23.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn24 = document.getElementById("orange24");
    orangeColorBtn24.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn31 = document.getElementById("orange31");
    orangeColorBtn31.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn32 = document.getElementById("orange32");
    orangeColorBtn32.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn33 = document.getElementById("orange33");
    orangeColorBtn33.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn34 = document.getElementById("orange34");
    orangeColorBtn34.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn41 = document.getElementById("orange41");
    orangeColorBtn41.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn42 = document.getElementById("orange42");
    orangeColorBtn42.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn43 = document.getElementById("orange43");
    orangeColorBtn43.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn44 = document.getElementById("orange44");
    orangeColorBtn44.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn51 = document.getElementById("orange51");
    orangeColorBtn51.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn52 = document.getElementById("orange52");
    orangeColorBtn52.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn53 = document.getElementById("orange53");
    orangeColorBtn53.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn54 = document.getElementById("orange54");
    orangeColorBtn54.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn61 = document.getElementById("orange61");
    orangeColorBtn61.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn62 = document.getElementById("orange62");
    orangeColorBtn62.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn63 = document.getElementById("orange63");
    orangeColorBtn63.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn64 = document.getElementById("orange64");
    orangeColorBtn64.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn71 = document.getElementById("orange71");
    orangeColorBtn71.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn72 = document.getElementById("orange72");
    orangeColorBtn72.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn73 = document.getElementById("orange73");
    orangeColorBtn73.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn74 = document.getElementById("orange74");
    orangeColorBtn74.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn81 = document.getElementById("orange81");
    orangeColorBtn81.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn82 = document.getElementById("orange82");
    orangeColorBtn82.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn83 = document.getElementById("orange83");
    orangeColorBtn83.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn84 = document.getElementById("orange84");
    orangeColorBtn84.addEventListener("click", function () { pickOrange(4); }, false);;
    //zaczepy do niebieskich kulek
    blueColorBtn11 = document.getElementById("blue11");
    blueColorBtn11.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn12 = document.getElementById("blue12");
    blueColorBtn12.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn13 = document.getElementById("blue13");
    blueColorBtn13.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn14 = document.getElementById("blue14");
    blueColorBtn14.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn21 = document.getElementById("blue21");
    blueColorBtn21.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn22 = document.getElementById("blue22");
    blueColorBtn22.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn23 = document.getElementById("blue23");
    blueColorBtn23.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn24 = document.getElementById("blue24");
    blueColorBtn24.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn31 = document.getElementById("blue31");
    blueColorBtn31.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn32 = document.getElementById("blue32");
    blueColorBtn32.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn33 = document.getElementById("blue33");
    blueColorBtn33.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn34 = document.getElementById("blue34");
    blueColorBtn34.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn41 = document.getElementById("blue41");
    blueColorBtn41.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn42 = document.getElementById("blue42");
    blueColorBtn42.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn43 = document.getElementById("blue43");
    blueColorBtn43.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn44 = document.getElementById("blue44");
    blueColorBtn44.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn51 = document.getElementById("blue51");
    blueColorBtn51.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn52 = document.getElementById("blue52");
    blueColorBtn52.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn53 = document.getElementById("blue53");
    blueColorBtn53.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn54 = document.getElementById("blue54");
    blueColorBtn54.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn61 = document.getElementById("blue61");
    blueColorBtn61.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn62 = document.getElementById("blue62");
    blueColorBtn62.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn63 = document.getElementById("blue63");
    blueColorBtn63.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn64 = document.getElementById("blue64");
    blueColorBtn64.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn71 = document.getElementById("blue71");
    blueColorBtn71.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn72 = document.getElementById("blue72");
    blueColorBtn72.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn73 = document.getElementById("blue73");
    blueColorBtn73.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn74 = document.getElementById("blue74");
    blueColorBtn74.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn81 = document.getElementById("blue81");
    blueColorBtn81.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn82 = document.getElementById("blue82");
    blueColorBtn82.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn83 = document.getElementById("blue83");
    blueColorBtn83.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn84 = document.getElementById("blue84");
    blueColorBtn84.addEventListener("click", function () { pickBlue(4); }, false);;
    //zaczepy do czerwonych kulek
    redColorBtn11 = document.getElementById("red11");
    redColorBtn11.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn12 = document.getElementById("red12");
    redColorBtn12.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn13 = document.getElementById("red13");
    redColorBtn13.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn14 = document.getElementById("red14");
    redColorBtn14.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn21 = document.getElementById("red21");
    redColorBtn21.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn22 = document.getElementById("red22");
    redColorBtn22.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn23 = document.getElementById("red23");
    redColorBtn23.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn24 = document.getElementById("red24");
    redColorBtn24.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn31 = document.getElementById("red31");
    redColorBtn31.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn32 = document.getElementById("red32");
    redColorBtn32.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn33 = document.getElementById("red33");
    redColorBtn33.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn34 = document.getElementById("red34");
    redColorBtn34.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn41 = document.getElementById("red41");
    redColorBtn41.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn42 = document.getElementById("red42");
    redColorBtn42.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn43 = document.getElementById("red43");
    redColorBtn43.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn44 = document.getElementById("red44");
    redColorBtn44.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn51 = document.getElementById("red51");
    redColorBtn51.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn52 = document.getElementById("red52");
    redColorBtn52.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn53 = document.getElementById("red53");
    redColorBtn53.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn54 = document.getElementById("red54");
    redColorBtn54.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn61 = document.getElementById("red61");
    redColorBtn61.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn62 = document.getElementById("red62");
    redColorBtn62.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn63 = document.getElementById("red63");
    redColorBtn63.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn64 = document.getElementById("red64");
    redColorBtn64.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn71 = document.getElementById("red71");
    redColorBtn71.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn72 = document.getElementById("red72");
    redColorBtn72.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn73 = document.getElementById("red73");
    redColorBtn73.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn74 = document.getElementById("red74");
    redColorBtn74.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn81 = document.getElementById("red81");
    redColorBtn81.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn82 = document.getElementById("red82");
    redColorBtn82.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn83 = document.getElementById("red83");
    redColorBtn83.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn84 = document.getElementById("red84");
    redColorBtn84.addEventListener("click", function () { pickRed(4); }, false);;
    //zaczepy do zielonych kulek
    greenColorBtn11 = document.getElementById("green11");
    greenColorBtn11.addEventListener("click", function () { pickGreen(1); }, false);;
    greenColorBtn12 = document.getElementById("green12");
    greenColorBtn12.addEventListener("click", function () { pickGreen(2); }, false);;
    greenColorBtn13 = document.getElementById("green13");
    greenColorBtn13.addEventListener("click", function () { pickGreen(3); }, false);;
    greenColorBtn14 = document.getElementById("green14");
    greenColorBtn14.addEventListener("click", function () { pickGreen(4); }, false);;

    greenColorBtn21 = document.getElementById("green21");
    greenColorBtn21.addEventListener("click", function () { pickGreen(1); }, false);;
    greenColorBtn22 = document.getElementById("green22");
    greenColorBtn22.addEventListener("click", function () { pickGreen(2); }, false);;
    greenColorBtn23 = document.getElementById("green23");
    greenColorBtn23.addEventListener("click", function () { pickGreen(3); }, false);;
    greenColorBtn24 = document.getElementById("green24");
    greenColorBtn24.addEventListener("click", function () { pickGreen(4); }, false);;

    greenColorBtn31 = document.getElementById("green31");
    greenColorBtn31.addEventListener("click", function () { pickGreen(1); }, false);;
    greenColorBtn32 = document.getElementById("green32");
    greenColorBtn32.addEventListener("click", function () { pickGreen(2); }, false);;
    greenColorBtn33 = document.getElementById("green33");
    greenColorBtn33.addEventListener("click", function () { pickGreen(3); }, false);;
    greenColorBtn34 = document.getElementById("green34");
    greenColorBtn34.addEventListener("click", function () { pickGreen(4); }, false);;

    greenColorBtn41 = document.getElementById("green41");
    greenColorBtn41.addEventListener("click", function () { pickGreen(1); }, false);;
    greenColorBtn42 = document.getElementById("green42");
    greenColorBtn42.addEventListener("click", function () { pickGreen(2); }, false);;
    greenColorBtn43 = document.getElementById("green43");
    greenColorBtn43.addEventListener("click", function () { pickGreen(3); }, false);;
    greenColorBtn44 = document.getElementById("green44");
    greenColorBtn44.addEventListener("click", function () { pickGreen(4); }, false);;

    greenColorBtn51 = document.getElementById("green51");
    greenColorBtn51.addEventListener("click", function () { pickGreen(1); }, false);;
    greenColorBtn52 = document.getElementById("green52");
    greenColorBtn52.addEventListener("click", function () { pickGreen(2); }, false);;
    greenColorBtn53 = document.getElementById("green53");
    greenColorBtn53.addEventListener("click", function () { pickGreen(3); }, false);;
    greenColorBtn54 = document.getElementById("green54");
    greenColorBtn54.addEventListener("click", function () { pickGreen(4); }, false);;

    greenColorBtn61 = document.getElementById("green61");
    greenColorBtn61.addEventListener("click", function () { pickGreen(1); }, false);;
    greenColorBtn62 = document.getElementById("green62");
    greenColorBtn62.addEventListener("click", function () { pickGreen(2); }, false);;
    greenColorBtn63 = document.getElementById("green63");
    greenColorBtn63.addEventListener("click", function () { pickGreen(3); }, false);;
    greenColorBtn64 = document.getElementById("green64");
    greenColorBtn64.addEventListener("click", function () { pickGreen(4); }, false);;

    greenColorBtn71 = document.getElementById("green71");
    greenColorBtn71.addEventListener("click", function () { pickGreen(1); }, false);;
    greenColorBtn72 = document.getElementById("green72");
    greenColorBtn72.addEventListener("click", function () { pickGreen(2); }, false);;
    greenColorBtn73 = document.getElementById("green73");
    greenColorBtn73.addEventListener("click", function () { pickGreen(3); }, false);;
    greenColorBtn74 = document.getElementById("green74");
    greenColorBtn74.addEventListener("click", function () { pickGreen(4); }, false);;

    greenColorBtn81 = document.getElementById("green81");
    greenColorBtn81.addEventListener("click", function () { pickGreen(1); }, false);;
    greenColorBtn82 = document.getElementById("green82");
    greenColorBtn82.addEventListener("click", function () { pickGreen(2); }, false);;
    greenColorBtn83 = document.getElementById("green83");
    greenColorBtn83.addEventListener("click", function () { pickGreen(3); }, false);;
    greenColorBtn84 = document.getElementById("green84");
    greenColorBtn84.addEventListener("click", function () { pickGreen(4); }, false);;
    //zaczepy do fioletowych kulek
    violetColorBtn11 = document.getElementById("violet11");
    violetColorBtn11.addEventListener("click", function () { pickViolet(1); }, false);;
    violetColorBtn12 = document.getElementById("violet12");
    violetColorBtn12.addEventListener("click", function () { pickViolet(2); }, false);;
    violetColorBtn13 = document.getElementById("violet13");
    violetColorBtn13.addEventListener("click", function () { pickViolet(3); }, false);;
    violetColorBtn14 = document.getElementById("violet14");
    violetColorBtn14.addEventListener("click", function () { pickViolet(4); }, false);;

    violetColorBtn21 = document.getElementById("violet21");
    violetColorBtn21.addEventListener("click", function () { pickViolet(1); }, false);;
    violetColorBtn22 = document.getElementById("violet22");
    violetColorBtn22.addEventListener("click", function () { pickViolet(2); }, false);;
    violetColorBtn23 = document.getElementById("violet23");
    violetColorBtn23.addEventListener("click", function () { pickViolet(3); }, false);;
    violetColorBtn24 = document.getElementById("violet24");
    violetColorBtn24.addEventListener("click", function () { pickViolet(4); }, false);;

    violetColorBtn31 = document.getElementById("violet31");
    violetColorBtn31.addEventListener("click", function () { pickViolet(1); }, false);;
    violetColorBtn32 = document.getElementById("violet32");
    violetColorBtn32.addEventListener("click", function () { pickViolet(2); }, false);;
    violetColorBtn33 = document.getElementById("violet33");
    violetColorBtn33.addEventListener("click", function () { pickViolet(3); }, false);;
    violetColorBtn34 = document.getElementById("violet34");
    violetColorBtn34.addEventListener("click", function () { pickViolet(4); }, false);;

    violetColorBtn41 = document.getElementById("violet41");
    violetColorBtn41.addEventListener("click", function () { pickViolet(1); }, false);;
    violetColorBtn42 = document.getElementById("violet42");
    violetColorBtn42.addEventListener("click", function () { pickViolet(2); }, false);;
    violetColorBtn43 = document.getElementById("violet43");
    violetColorBtn43.addEventListener("click", function () { pickViolet(3); }, false);;
    violetColorBtn44 = document.getElementById("violet44");
    violetColorBtn44.addEventListener("click", function () { pickViolet(4); }, false);;

    violetColorBtn51 = document.getElementById("violet51");
    violetColorBtn51.addEventListener("click", function () { pickViolet(1); }, false);;
    violetColorBtn52 = document.getElementById("violet52");
    violetColorBtn52.addEventListener("click", function () { pickViolet(2); }, false);;
    violetColorBtn53 = document.getElementById("violet53");
    violetColorBtn53.addEventListener("click", function () { pickViolet(3); }, false);;
    violetColorBtn54 = document.getElementById("violet54");
    violetColorBtn54.addEventListener("click", function () { pickViolet(4); }, false);;

    violetColorBtn61 = document.getElementById("violet61");
    violetColorBtn61.addEventListener("click", function () { pickViolet(1); }, false);;
    violetColorBtn62 = document.getElementById("violet62");
    violetColorBtn62.addEventListener("click", function () { pickViolet(2); }, false);;
    violetColorBtn63 = document.getElementById("violet63");
    violetColorBtn63.addEventListener("click", function () { pickViolet(3); }, false);;
    violetColorBtn64 = document.getElementById("violet64");
    violetColorBtn64.addEventListener("click", function () { pickViolet(4); }, false);;

    violetColorBtn71 = document.getElementById("violet71");
    violetColorBtn71.addEventListener("click", function () { pickViolet(1); }, false);;
    violetColorBtn72 = document.getElementById("violet72");
    violetColorBtn72.addEventListener("click", function () { pickViolet(2); }, false);;
    violetColorBtn73 = document.getElementById("violet73");
    violetColorBtn73.addEventListener("click", function () { pickViolet(3); }, false);;
    violetColorBtn74 = document.getElementById("violet74");
    violetColorBtn74.addEventListener("click", function () { pickViolet(4); }, false);;

    violetColorBtn81 = document.getElementById("violet81");
    violetColorBtn81.addEventListener("click", function () { pickViolet(1); }, false);;
    violetColorBtn82 = document.getElementById("violet82");
    violetColorBtn82.addEventListener("click", function () { pickViolet(2); }, false);;
    violetColorBtn83 = document.getElementById("violet83");
    violetColorBtn83.addEventListener("click", function () { pickViolet(3); }, false);;
    violetColorBtn84 = document.getElementById("violet84");
    violetColorBtn84.addEventListener("click", function () { pickViolet(4); }, false);;
    //zaczepy do zoltych kulek
    yellowColorBtn11 = document.getElementById("yellow11");
    yellowColorBtn11.addEventListener("click", function () { pickYellow(1); }, false);;
    yellowColorBtn12 = document.getElementById("yellow12");
    yellowColorBtn12.addEventListener("click", function () { pickYellow(2); }, false);;
    yellowColorBtn13 = document.getElementById("yellow13");
    yellowColorBtn13.addEventListener("click", function () { pickYellow(3); }, false);;
    yellowColorBtn14 = document.getElementById("yellow14");
    yellowColorBtn14.addEventListener("click", function () { pickYellow(4); }, false);;

    yellowColorBtn21 = document.getElementById("yellow21");
    yellowColorBtn21.addEventListener("click", function () { pickYellow(1); }, false);;
    yellowColorBtn22 = document.getElementById("yellow22");
    yellowColorBtn22.addEventListener("click", function () { pickYellow(2); }, false);;
    yellowColorBtn23 = document.getElementById("yellow23");
    yellowColorBtn23.addEventListener("click", function () { pickYellow(3); }, false);;
    yellowColorBtn24 = document.getElementById("yellow24");
    yellowColorBtn24.addEventListener("click", function () { pickYellow(4); }, false);;

    yellowColorBtn31 = document.getElementById("yellow31");
    yellowColorBtn31.addEventListener("click", function () { pickYellow(1); }, false);;
    yellowColorBtn32 = document.getElementById("yellow32");
    yellowColorBtn32.addEventListener("click", function () { pickYellow(2); }, false);;
    yellowColorBtn33 = document.getElementById("yellow33");
    yellowColorBtn33.addEventListener("click", function () { pickYellow(3); }, false);;
    yellowColorBtn34 = document.getElementById("yellow34");
    yellowColorBtn34.addEventListener("click", function () { pickYellow(4); }, false);;

    yellowColorBtn41 = document.getElementById("yellow41");
    yellowColorBtn41.addEventListener("click", function () { pickYellow(1); }, false);;
    yellowColorBtn42 = document.getElementById("yellow42");
    yellowColorBtn42.addEventListener("click", function () { pickYellow(2); }, false);;
    yellowColorBtn43 = document.getElementById("yellow43");
    yellowColorBtn43.addEventListener("click", function () { pickYellow(3); }, false);;
    yellowColorBtn44 = document.getElementById("yellow44");
    yellowColorBtn44.addEventListener("click", function () { pickYellow(4); }, false);;

    yellowColorBtn51 = document.getElementById("yellow51");
    yellowColorBtn51.addEventListener("click", function () { pickYellow(1); }, false);;
    yellowColorBtn52 = document.getElementById("yellow52");
    yellowColorBtn52.addEventListener("click", function () { pickYellow(2); }, false);;
    yellowColorBtn53 = document.getElementById("yellow53");
    yellowColorBtn53.addEventListener("click", function () { pickYellow(3); }, false);;
    yellowColorBtn54 = document.getElementById("yellow54");
    yellowColorBtn54.addEventListener("click", function () { pickYellow(4); }, false);;

    yellowColorBtn61 = document.getElementById("yellow61");
    yellowColorBtn61.addEventListener("click", function () { pickYellow(1); }, false);;
    yellowColorBtn62 = document.getElementById("yellow62");
    yellowColorBtn62.addEventListener("click", function () { pickYellow(2); }, false);;
    yellowColorBtn63 = document.getElementById("yellow63");
    yellowColorBtn63.addEventListener("click", function () { pickYellow(3); }, false);;
    yellowColorBtn64 = document.getElementById("yellow64");
    yellowColorBtn64.addEventListener("click", function () { pickYellow(4); }, false);;

    yellowColorBtn71 = document.getElementById("yellow71");
    yellowColorBtn71.addEventListener("click", function () { pickYellow(1); }, false);;
    yellowColorBtn72 = document.getElementById("yellow72");
    yellowColorBtn72.addEventListener("click", function () { pickYellow(2); }, false);;
    yellowColorBtn73 = document.getElementById("yellow73");
    yellowColorBtn73.addEventListener("click", function () { pickYellow(3); }, false);;
    yellowColorBtn74 = document.getElementById("yellow74");
    yellowColorBtn74.addEventListener("click", function () { pickYellow(4); }, false);;

    yellowColorBtn81 = document.getElementById("yellow81");
    yellowColorBtn81.addEventListener("click", function () { pickYellow(1); }, false);;
    yellowColorBtn82 = document.getElementById("yellow82");
    yellowColorBtn82.addEventListener("click", function () { pickYellow(2); }, false);;
    yellowColorBtn83 = document.getElementById("yellow83");
    yellowColorBtn83.addEventListener("click", function () { pickYellow(3); }, false);;
    yellowColorBtn84 = document.getElementById("yellow84");
    yellowColorBtn84.addEventListener("click", function () { pickYellow(4); }, false);;
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
                    element.style.top = (window.innerHeight - 6 * 75) / 2 + 'px';
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
    round = round + 1;
    position1 = 0;
    position2 = 0;
    position3 = 0;
    position4 = 0;
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
    var temp1, temp4, temp2, temp3;
    var colorValue = 1;
    temp1 = 'imgrow' + round;
    temp4 = 'box' + slotNumber;
    temp2 = document.getElementsByClassName(temp1 + ' ' + temp4);
    for (i = 0; i < temp2.length; i++) {
        temp3 = temp2.item(i);
    }
    switch (slotNumber) {
        case 1:
            switch (position1) {
                case 0:
                    position1 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " orange";
                    break;
                case 1:
                    break;
                case 2:
                    position1 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " orange";
                    break;
                case 3:
                    position1 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " orange";
                    break;
                case 4:
                    position1 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " orange";
                    break;
                case 5:
                    position1 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " orange";
                    break;
                case 6:
                    position1 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " orange";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            break;
        case 2:
            switch (position2) {
                case 0:
                    position2 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " orange";
                    break;
                case 1:
                    break;
                case 2:
                    position2 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " orange";
                    break;
                case 3:
                    position2 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " orange";
                    break;
                case 4:
                    position2 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " orange";
                    break;
                case 5:
                    position2 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " orange";
                    break;
                case 6:
                    position2 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " orange";
                    break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            break;
        case 3:
            switch (position3) {
                case 0:
                    position3 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " orange";
                    break;
                case 1:
                    break;
                case 2:
                    position3 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " orange";
                    break;
                case 3:
                    position3 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " orange";
                    break;
                case 4:
                    position3 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " orange";
                    break;
                case 5:
                    position3 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " orange";
                    break;
                case 6:
                    position3 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " orange";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            break;
        case 4:
            switch (position4) {
                case 0:
                    position4 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " orange";
                    break;
                case 1:
                    break;
                case 2:
                    position4 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " orange";
                    break;
                case 3:
                    position4 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " orange";
                    break;
                case 4:
                    position4 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " orange";
                    break;
                case 5:
                    position4 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " orange";
                    break;
                case 6:
                    position4 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " orange";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("orange");
                temp3.className += " empty";
                break;
            }
            break;
    }

    //console.log('P poz1: ' + position1);
    //console.log('P poz2: ' + position2);
    //console.log('P poz3: ' + position3);
    //console.log('P poz4: ' + position4);
}

function pickBlue(slotNumber) {
    var temp1, temp4, temp2, temp3;
    var colorValue = 2;
    temp1 = 'imgrow' + round;
    temp4 = 'box' + slotNumber;
    temp2 = document.getElementsByClassName(temp1 + ' ' + temp4);
    for (i = 0; i < temp2.length; i++) {
        temp3 = temp2.item(i);
    }
    switch (slotNumber) {
        case 1:
            switch (position1) {
                case 0:
                    position1 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " blue";
                    break;
                case 1:
                    position1 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " blue";
                    break;
                case 2:
                    break;
                case 3:
                    position1 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " blue";
                    break;
                case 4:
                    position1 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " blue";
                    break;
                case 5:
                    position1 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " blue";
                    break;
                case 6:
                    position1 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " blue";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            break;
        case 2:
            switch (position2) {
                case 0:
                    position2 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " blue";
                    break;
                case 1:
                    position2 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " blue";
                    break;
                case 2:
                    break;
                case 3:
                    position2 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " blue";
                    break;
                case 4:
                    position2 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " blue";
                    break;
                case 5:
                    position2 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " blue";
                    break;
                case 6:
                    position2 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " blue";
                    break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            break;
        case 3:
            switch (position3) {
                case 0:
                    position3 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " blue";
                    break;
                case 1:
                    position3 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " blue";
                    break;
                case 2:
                    break;
                case 3:
                    position3 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " blue";
                    break;
                case 4:
                    position3 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " blue";
                    break;
                case 5:
                    position3 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " blue";
                    break;
                case 6:
                    position3 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " blue";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            break;
        case 4:
            switch (position4) {
                case 0:
                    position4 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " blue";
                    break;
                case 1:
                    position4 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " blue";
                    break;
                case 2:
                    break;
                case 3:
                    position4 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " blue";
                    break;
                case 4:
                    position4 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " blue";
                    break;
                case 5:
                    position4 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " blue";
                    break;
                case 6:
                    position4 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " blue";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("blue");
                temp3.className += " empty";
                break;
            }
            break;
    }

    //console.log('N poz1: ' + position1);
    //console.log('N poz2: '+ position2);
    //console.log('N poz3: ' + position3);
    //console.log('N poz4: ' + position4);

}

function pickRed(slotNumber) {
    var temp1, temp4, temp2, temp3;
    var colorValue = 3;
    temp1 = 'imgrow' + round;
    temp4 = 'box' + slotNumber;
    temp2 = document.getElementsByClassName(temp1 + ' ' + temp4);
    for (i = 0; i < temp2.length; i++) {
        temp3 = temp2.item(i);
    }
    switch (slotNumber) {
        case 1:
            switch (position1) {
                case 0:
                    position1 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " red";
                    break;
                case 1:
                    position1 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " red";
                    break;
                case 2:
                    position1 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " red";
                    break;
                case 3:
                    break;
                case 4:
                    position1 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " red";
                    break;
                case 5:
                    position1 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " red";
                    break;
                case 6:
                    position1 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " red";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            break;
        case 2:
            switch (position2) {
                case 0:
                    position2 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " red";
                    break;
                case 1:
                    position2 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " red";
                    break;
                case 2:
                    position2 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " red";
                    break;
                case 3:
                    break;
                case 4:
                    position2 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " red";
                    break;
                case 5:
                    position2 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " red";
                    break;
                case 6:
                    position2 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " red";
                    break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            break;
        case 3:
            switch (position3) {
                case 0:
                    position3 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " red";
                    break;
                case 1:
                    position3 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " red";
                    break;
                case 2:
                    position3 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " red";
                    break;
                case 3:
                    break;
                case 4:
                    position3 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " red";
                    break;
                case 5:
                    position3 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " red";
                    break;
                case 6:
                    position3 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " red";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            break;
        case 4:
            switch (position4) {
                case 0:
                    position4 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " red";
                    break;
                case 1:
                    position4 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " red";
                    break;
                case 2:
                    position4 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " red";
                    break;
                case 3:
                    break;
                case 4:
                    position4 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " red";
                    break;
                case 5:
                    position4 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " red";
                    break;
                case 6:
                    position4 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " red";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("red");
                temp3.className += " empty";
                break;
            }
            break;
    }

    //console.log('R poz1: ' + position1);
    //console.log('R poz2: ' + position2);
    //console.log('R poz3: ' + position3);
    //console.log('R poz4: ' + position4);

}

function pickGreen(slotNumber) {
    var temp1, temp4, temp2, temp3;
    var colorValue = 4;
    temp1 = 'imgrow' + round;
    temp4 = 'box' + slotNumber;
    temp2 = document.getElementsByClassName(temp1 + ' ' + temp4);
    for (i = 0; i < temp2.length; i++) {
        temp3 = temp2.item(i);
    }
    switch (slotNumber) {
        case 1:
            switch (position1) {
                case 0:
                    position1 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " green";
                    break;
                case 1:
                    position1 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " green";
                    break;
                case 2:
                    position1 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " green";
                    break;
                case 3:
                    position1 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " green";
                    break;
                case 4:
                    break;
                case 5:
                    position1 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " green";
                    break;
                case 6:
                    position1 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " green";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            break;
        case 2:
            switch (position2) {
                case 0:
                    position2 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " green";
                    break;
                case 1:
                    position2 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " green";
                    break;
                case 2:
                    position2 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " green";
                    break;
                case 3:
                    position2 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " green";
                    break;
                case 4:
                    break;
                case 5:
                    position2 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " green";
                    break;
                case 6:
                    position2 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " green";
                    break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            break;
        case 3:
            switch (position3) {
                case 0:
                    position3 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " green";
                    break;
                case 1:
                    position3 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " green";
                    break;
                case 2:
                    position3 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " green";
                    break;
                case 3:
                    position3 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " green";
                    break;
                case 4:
                    break;
                case 5:
                    position3 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " green";
                    break;
                case 6:
                    position3 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " green";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            break;
        case 4:
            switch (position4) {
                case 0:
                    position4 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " green";
                    break;
                case 1:
                    position4 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " green";
                    break;
                case 2:
                    position4 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " green";
                    break;
                case 3:
                    position4 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " green";
                    break;
                case 4:
                    break;
                case 5:
                    position4 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " green";
                    break;
                case 6:
                    position4 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " green";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("green");
                temp3.className += " empty";
                break;
            }
            break;
    }

    //console.log('G poz1: ' + position1);
    //console.log('G poz2: ' + position2);
    //console.log('G poz3: ' + position3);
    //console.log('G poz4: ' + position4);

}

function pickViolet(slotNumber) {
    var temp1, temp4, temp2, temp3;
    var colorValue = 5;
    temp1 = 'imgrow' + round;
    temp4 = 'box' + slotNumber;
    temp2 = document.getElementsByClassName(temp1 + ' ' + temp4);
    for (i = 0; i < temp2.length; i++) {
        temp3 = temp2.item(i);
    }
    switch (slotNumber) {
        case 1:
            switch (position1) {
                case 0:
                    position1 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " violet";
                    break;
                case 1:
                    position1 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " violet";
                    break;
                case 2:
                    position1 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " violet";
                    break;
                case 3:
                    position1 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " violet";
                    break;
                case 4:
                    position1 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " violet";
                    break;
                case 5:
                    break;
                case 6:
                    position1 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " violet";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            break;
        case 2:
            switch (position2) {
                case 0:
                    position2 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " violet";
                    break;
                case 1:
                    position2 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " violet";
                    break;
                case 2:
                    position2 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " violet";
                    break;
                case 3:
                    position2 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " violet";
                    break;
                case 4:
                    position2 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " violet";
                    break;
                case 5:
                    break;
                case 6:
                    position2 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " violet";
                    break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            break;
        case 3:
            switch (position3) {
                case 0:
                    position3 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " violet";
                    break;
                case 1:
                    position3 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " violet";
                    break;
                case 2:
                    position3 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " violet";
                    break;
                case 3:
                    position3 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " violet";
                    break;
                case 4:
                    position3 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " violet";
                    break;
                case 5:
                    break;
                case 6:
                    position3 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " violet";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            break;
        case 4:
            switch (position4) {
                case 0:
                    position4 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " violet";
                    break;
                case 1:
                    position4 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " violet";
                    break;
                case 2:
                    position4 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " violet";
                    break;
                case 3:
                    position4 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " violet";
                    break;
                case 4:
                    position4 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " violet";
                    break;
                case 5:
                    break;
                case 6:
                    position4 = colorValue;
                    temp3.classList.remove("yellow");
                    temp3.className += " violet";
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("violet");
                temp3.className += " empty";
                break;
            }
            break;
    }

    //console.log('V poz1: ' + position1);
    //console.log('V poz2: ' + position2);
    //console.log('V poz3: ' + position3);
    //console.log('V poz4: ' + position4);

}

function pickYellow(slotNumber) {
    var temp1, temp4, temp2, temp3;
    var colorValue = 6;
    temp1 = 'imgrow' + round;
    temp4 = 'box' + slotNumber;
    temp2 = document.getElementsByClassName(temp1 + ' ' + temp4);
    for (i = 0; i < temp2.length; i++) {
        temp3 = temp2.item(i);
    }
    switch (slotNumber) {
        case 1:
            switch (position1) {
                case 0:
                    position1 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " yellow";
                    break;
                case 1:
                    position1 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " yellow";
                    break;
                case 2:
                    position1 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " yellow";
                    break;
                case 3:
                    position1 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " yellow";
                    break;
                case 4:
                    position1 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " yellow";
                    break;
                case 5:
                    position1 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " yellow";
                    break;
                case 6:
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            break;
        case 2:
            switch (position2) {
                case 0:
                    position2 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " yellow";
                    break;
                case 1:
                    position2 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " yellow";
                    break;
                case 2:
                    position2 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " yellow";
                    break;
                case 3:
                    position2 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " yellow";
                    break;
                case 4:
                    position2 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " yellow";
                    break;
                case 5:
                    position2 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " yellow";
                    break;
                case 6:
                    break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            break;
        case 3:
            switch (position3) {
                case 0:
                    position3 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " yellow";
                    break;
                case 1:
                    position3 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " yellow";
                    break;
                case 2:
                    position3 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " yellow";
                    break;
                case 3:
                    position3 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " yellow";
                    break;
                case 4:
                    position3 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " yellow";
                    break;
                case 5:
                    position3 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " yellow";
                    break;
                case 6:
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            if (position4 === colorValue) {
                position4 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box4');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            break;
        case 4:
            switch (position4) {
                case 0:
                    position4 = colorValue;
                    temp3.classList.remove("empty");
                    temp3.className += " yellow";
                    break;
                case 1:
                    position4 = colorValue;
                    temp3.classList.remove("orange");
                    temp3.className += " yellow";
                    break;
                case 2:
                    position4 = colorValue;
                    temp3.classList.remove("blue");
                    temp3.className += " yellow";
                    break;
                case 3:
                    position4 = colorValue;
                    temp3.classList.remove("red");
                    temp3.className += " yellow";
                    break;
                case 4:
                    position4 = colorValue;
                    temp3.classList.remove("green");
                    temp3.className += " yellow";
                    break;
                case 5:
                    position4 = colorValue;
                    temp3.classList.remove("violet");
                    temp3.className += " yellow";
                    break;
                case 6:
                    
                    break;
            }
            if (position2 === colorValue) {
                position2 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box2');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            if (position3 === colorValue) {
                position3 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box3');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            if (position1 === colorValue) {
                position1 = 0;
                temp2 = document.getElementsByClassName(temp1 + ' box1');
                for (i = 0; i < temp2.length; i++) {
                    temp3 = temp2.item(i);
                }
                temp3.classList.remove("yellow");
                temp3.className += " empty";
                break;
            }
            break;
    }

    console.log('Y poz1: ' + position1);
    console.log('Y poz2: ' + position2);
    console.log('Y poz3: ' + position3);
    console.log('Y poz4: ' + position4);

}
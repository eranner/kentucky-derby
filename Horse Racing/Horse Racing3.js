
var margin = 5;
var margin2 = 5;
var margin3 = 5;
var margin4 = 5;
var margin5 = 5;
var margin6 = 5;
var i = 0;
var m = 0;
var n = 0;
var o = 0;
var p = 0;
var q = 0;
var r = 0;


const nextPage = document.getElementById('nextRace');
nextPage.addEventListener('click', goToNextRace, false);

function goToNextRace() {
    window.location = '../resume.html'
}
function dicey() {
    var i = 0;
var number = Math.floor((Math.random() * 6) + 1);
var roll = document.getElementById('dice1');
roll.textContent = number;

if (number === 1) {
    moveBox();
    
} 

if (number === 2) {
    moveBox2();
}

if (number === 3) {
    moveBox3();
}
if (number === 4) {
    moveBox4();
}
if (number === 5) {
    moveBox5();
}
if (number === 6){
    moveBox6();

}}


function dicey2() {
    var i = 0;
var number = Math.floor((Math.random() * 6) + 1);
var roll = document.getElementById('dice2');
roll.textContent = number;



if (number === 1) {
    moveBox();
    
} 

if (number === 2) {
    moveBox2();
}

if (number === 3) {
    moveBox3();
}
if (number === 4) {
    moveBox4();
}
if (number === 5) {
    moveBox5();
}
if (number === 6){
    moveBox6();
}}



function dicey3() {
    var i = 0;
var number = Math.floor((Math.random() * 6) + 1);
var roll = document.getElementById('dice3');
roll.textContent = number;

if (number === 1) {
    moveBox();
    
} 

if (number === 2) {
    moveBox2();
}

if (number === 3) {
    moveBox3();
}
if (number === 4) {
    moveBox4();
}
if (number === 5) {
    moveBox5();
}
if (number === 6){
    moveBox6();
}}



const spin1 = document.getElementById('roll');
spin1.addEventListener('click', dicey, false);

const spin2 = document.getElementById('roll');
spin2.addEventListener('click', dicey2, false);

const spin3 =document.getElementById('roll');
spin3.addEventListener('click', dicey3, false);

const spin4 = document.getElementById('roll');
spin4.addEventListener('click', dicey4, false);

const playMusic = document.getElementById('roll');
playMusic.addEventListener('click', jamOut, false);

function jamOut() {
 const musiq = document.getElementById('horseMusic');
 musiq.play();
}

const playAgain = document.getElementById('raceAgain');
playAgain.addEventListener('click', loadMe, false);

function loadMe() {
    location.reload();
}

function checkWin() {
    if (m > 16) {
        oneWins();
        hideRoll();
    }}
function oneWins() {
const unoWinner = document.getElementById('winner1');
unoWinner.style.display = 'block';
} 

function twoWins() {
    const dosWinner = document.getElementById('winner2');
    dosWinner.style.display = 'block';
    } 
    
    function threeWins() {
        const tresWinner = document.getElementById('winner3');
        tresWinner.style.display = 'block';
        } 
        
function fourWins() {
const quatroWinner = document.getElementById('winner4');
quatroWinner.style.display = 'block';
} 

function fiveWins() {
    const cincoWinner = document.getElementById('winner5');
    cincoWinner.style.display = 'block';
    } 
    
    function sixWins() {
        const seisWinner = document.getElementById('winner6');
        seisWinner.style.display = 'block';
        } 
        


function checkWin2() {
    if (n > 16) {
        twoWins();
        hideRoll();
    }
}
function checkWin3() {
    if (o > 16) {
        threeWins();
        hideRoll();
    }
}
function checkWin4() {
    if (p > 16) {
        fourWins();
        hideRoll();
    }
}
function checkWin5() {
    if (q > 16) {
        fiveWins();
        hideRoll();
    }
}
function checkWin6() {
    if (r > 16) {
        sixWins();
        hideRoll();
    }
}
function moveBox() {
    margin = margin + 5;
    document.getElementById('horse1').style.left = margin + "%";
    i = i + 1;
    console.log(i);
    m++;
    
checkWin();


}

function moveBox2() {
    margin2 = margin2 + 5;
    document.getElementById('horse2').style.left = margin2 + "%";
    i = i + 1;
    console.log(i);
    n++;
    
    checkWin2();



}
function moveBox3() {
    margin3 = margin3 + 5;
    document.getElementById('horse3').style.left = margin3 + "%";
    i = i + 1;
    console.log(i);
    o++;
    
    checkWin3();


}

function moveBox4() {
    margin4 = margin4 + 5;
    document.getElementById('horse4').style.left = margin4 + "%";
    i = i + 1;
    console.log(i);
    p++;
    
    checkWin4();


}

function moveBox5() {
    margin5 = margin5 + 5;
    document.getElementById('horse5').style.left = margin5 + "%";
    i = i + 1;
    console.log(i);
    q++;
    
    checkWin5();


}
function moveBox6() {
    margin6 = margin6 + 5;
    document.getElementById('horse6').style.left = margin6 + "%";
    i = i + 1;
    console.log(i);
    r++;
    
    checkWin6();


}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', hidePop, false);

function hidePop() {

const hidey = document.getElementById('rules');
hidey.style.display = 'none';
}

function hideRoll() {
    var rollyPolie = document.getElementById('roll');
    rollyPolie.style.display = 'none';
}



function moveBack() {
    
    margin = margin - 5;
    document.getElementById('horse1').style.left = margin + "%";
    i = i + 1;
    console.log(i);
    m--;
    
checkWin();


}

function moveBack2() {
    margin2 = margin2 - 5;
    document.getElementById('horse2').style.left = margin2 + "%";
    i = i + 1;
    console.log(i);
    n--;
    
    checkWin2();



}
function moveBack3() {
    margin3 = margin3 - 5;
    document.getElementById('horse3').style.left = margin3 + "%";
    i = i + 1;
    console.log(i);
    o--;
    
    checkWin3();


}

function moveBack4() {
    margin4 = margin4 - 5;
    document.getElementById('horse4').style.left = margin4 + "%";
    i = i + 1;
    console.log(i);
    p--;
    
    checkWin4();


}

function moveBack5() {
    margin5 = margin5 - 5;
    document.getElementById('horse5').style.left = margin5 + "%";
    i = i + 1;
    console.log(i);
    q--;
    
    checkWin5();


}
function moveBack6() {
    margin6 = margin6 - 5;
    document.getElementById('horse6').style.left = margin6 + "%";
    i = i + 1;
    console.log(i);
    r--;
    
    checkWin6();


}


function dicey4() {
    var i = 0;
var number = Math.floor((Math.random() * 6) + 1);
var roll = document.getElementById('dice4');
roll.textContent = number;

if (number === 1) {
moveBack();

} 

if (number === 2) {
moveBack2();
}

if (number === 3) {
moveBack3();
}
if (number === 4) {
moveBack4();
}
if (number === 5) {
moveBack5();
}
if (number === 6){
moveBack6();

}
}
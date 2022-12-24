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


const spin1 = document.getElementById('roll');
spin1.addEventListener('click', dicey, false);

const nextPlease = document.getElementById('nextRace');
nextPlease.addEventListener('click', offToThree, false);

function offToThree() {
    window.location = 'Horse Race 3.3.html';
}
function dicey() {
    var i = 0;
var number = Math.floor((Math.random() * 6) + 1);
var roll = document.getElementById('dice1');
roll.textContent = number;

var move = Math.floor((Math.random() * 6) + 1);
var roll2 = document.getElementById('dice2');
roll2.textContent = move;



if (number === 1 && move === 1) {
moveBox();

} 

if (number === 1 &&  move === 2) {
moveBox2();

}

if (number === 1 && move === 3) {
moveBox3();

}
if (number === 1 && move === 4) {
moveBox4();
 
}
if (number === 1 && move === 5) {
moveBox5();

}
if (number === 1 && move === 6){
moveBox6();


}

if (number === 2 && move === 1){
moveBoxA();

}
if (number === 2 && move === 2){
moveBox2A();

}
if (number === 2 && move === 3){
moveBox3A();

}
if (number === 2 && move === 4){
moveBox4A();

}
if (number === 2 && move === 5){
moveBox5A();

}
if (number === 2 && move === 6){
moveBox6A();

}

if (number === 3 && move === 1){
moveBoxB();

}
if (number === 3 && move === 2){
moveBox2B();

}
if (number === 3 && move === 3){
moveBox3B();

}
if (number === 3 && move === 4){
moveBox4B();

}
if (number === 3 && move === 5){
moveBox5B();

}
if (number === 3 && move === 6){
moveBox6B();

}
if (number === 4 && move === 1){
moveBoxC();

}
if (number === 4 && move === 2){
moveBox2C();

}
if (number === 4 && move === 3){
moveBox3C();

}
if (number === 4 && move === 4){
moveBox4C();

}
if (number === 4 && move === 5){
moveBox5C();

}
if (number === 4 && move === 6){
moveBox6C();

}

if (number === 5 && move === 1){
moveBoxD();

}
if (number === 5 && move === 2){
moveBox2D();

}
if (number === 5 && move === 3){
moveBox3D();

}
if (number === 5 && move === 4){
moveBox4D();

}
if (number === 5 && move === 5){
moveBox5D();

}
if (number === 5 && move === 6){
moveBox6D();

}

if (number === 6 && move === 1){
moveBoxE();

}
if (number === 6 && move === 2){
moveBox2E();

}
if (number === 6 && move === 3){
moveBox3E();

}
if (number === 6 && move === 4){
moveBox4E();

}
if (number === 6 && move === 5){
moveBox5E();

}
if (number === 6 && move === 6){
moveBox6E();

}}

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
    m = m + 1;
    
checkWin();


}

function moveBox2() {
    margin = margin + 10;
    document.getElementById('horse1').style.left = margin + "%";
    i = i + 1;
    console.log(i);
    m = m + 2;
    
    checkWin();



}
function moveBox3() {
    margin = margin + 15;
    document.getElementById('horse1').style.left = margin + "%";
    i = i + 1;
    console.log(i);
    m = m + 3;
    
    checkWin();


}

function moveBox4() {
    margin = margin + 20;
    document.getElementById('horse1').style.left = margin + "%";
    i = i + 1;
    console.log(i);
    m = m + 4;
    
    checkWin();


}

function moveBox5() {
    margin = margin + 25;
    document.getElementById('horse1').style.left = margin + "%";
    i = i + 1;
    console.log(i);
    m = m + 5;
    
    checkWin();


}
function moveBox6() {
    margin = margin + 30;
    document.getElementById('horse1').style.left = margin + "%";
    i = i + 1;
    console.log(i);
    m = m + 6;;
    
    checkWin();


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

function moveBoxA() {
    margin2 = margin2 + 5;
    document.getElementById('horse2').style.left = margin2 + "%";
    i = i + 1;
    console.log(i);
    n = n + 1;
    
    checkWin2();


}

function moveBox2A() {
    margin2 = margin2 + 10;
    document.getElementById('horse2').style.left = margin2 + "%";
    i = i + 1;
    console.log(i);
    n = n + 2;
    
    checkWin2();



}
function moveBox3A() {
    margin2 = margin2 + 15;
    document.getElementById('horse2').style.left = margin2 + "%";
    i = i + 1;
    console.log(i);
    n = n + 3;
    
    checkWin2();


}

function moveBox4A() {
    margin2 = margin2 + 20;
    document.getElementById('horse2').style.left = margin2 + "%";
    i = i + 1;
    console.log(i);
    n = n + 4;
   
    
    checkWin2();


}

function moveBox5A() {
    margin2 = margin2 + 25;
    document.getElementById('horse2').style.left = margin2 + "%";
    i = i + 1;
    console.log(i);
    n = n + 5;
   
    
    checkWin2();


}
function moveBox6A() {
    margin2 = margin2 + 30;
    document.getElementById('horse2').style.left = margin2 + "%";
    i = i + 1;
    console.log(i);
    n = n + 6;
    
    checkWin2();


}
function moveBoxB() {
    margin3 = margin3 + 5;
    document.getElementById('horse3').style.left = margin3 + "%";
    i = i + 1;
    console.log(i);
    o = o + 1;
    
    checkWin3();


}

function moveBox2B() {
    margin3 = margin3 + 10;
    document.getElementById('horse3').style.left = margin3 + "%";
    i = i + 1;
    console.log(i);
    o = o + 2;
    
    checkWin3();



}
function moveBox3B() {
    margin3 = margin3 + 15;
    document.getElementById('horse3').style.left = margin3 + "%";
    i = i + 1;
    console.log(i);
    o = o + 3;
    
    checkWin3();


}

function moveBox4B() {
    margin3 = margin3 + 20;
    document.getElementById('horse3').style.left = margin3 + "%";
    i = i + 1;
    console.log(i);
    o = o + 4;
    
    checkWin3();


}

function moveBox5B() {
    margin3 = margin3 + 25;
    document.getElementById('horse3').style.left = margin3 + "%";
    i = i + 1;
    console.log(i);
    o = o + 5;
    
    checkWin3();


}
function moveBox6B() {
    margin3 = margin3 + 30;
    document.getElementById('horse3').style.left = margin3 + "%";
    i = i + 1;
    console.log(i);
    o = o + 6;
    
    checkWin3();


}

function moveBoxC() {
    margin4 = margin4 + 5;
    document.getElementById('horse4').style.left = margin4 + "%";
    i = i + 1;
    console.log(i);
   p = p + 1;
    
   checkWin4();


}

function moveBox2C() {
    margin4 = margin4 + 10;
    document.getElementById('horse4').style.left = margin4 + "%";
    i = i + 1;
    console.log(i);
    p = p + 2;
    
    checkWin4();



}
function moveBox3C() {
    margin4 = margin4 + 15;
    document.getElementById('horse4').style.left = margin4 + "%";
    i = i + 1;
    console.log(i);
    p = p + 3;
    
    checkWin4();


}

function moveBox4C() {
    margin4 = margin4 + 20;
    document.getElementById('horse4').style.left = margin4 + "%";
    i = i + 1;
    console.log(i);
    p = p + 4;
    
    checkWin4();


}

function moveBox5C() {
    margin4 = margin4 + 25;
    document.getElementById('horse4').style.left = margin4 + "5";
    i = i + 1;
    console.log(i);
    p = p + 5;
    
    checkWin4();


}
function moveBox6C() {
    margin4 = margin4 + 30;
    document.getElementById('horse4').style.left = margin4 + "%";
    i = i + 1;
    console.log(i);
    p = p + 6;
    
    checkWin4();


}
function moveBoxD() {
    margin5 = margin5 + 5;
    document.getElementById('horse5').style.left = margin5 + "%";
    i = i + 1;
    console.log(i);
    q = q + 1;
    
    
    checkWin5();


}

function moveBox2D() {
    margin5 = margin5 + 10;
    document.getElementById('horse5').style.left = margin5 + "%";
    i = i + 1;
    console.log(i);
    q = q + 2;
    
    checkWin5();



}
function moveBox3D() {
    margin5 = margin5 + 15;
    document.getElementById('horse5').style.left = margin5 + "%";
    i = i + 1;
    console.log(i);
    q = q + 3;
    
    checkWin5();


}

function moveBox4D() {
    margin5 = margin5 + 20;
    document.getElementById('horse5').style.left = margin5 + "%";
    i = i + 1;
    console.log(i);
    q = q + 4;
    
    checkWin5();


}

function moveBox5D() {
    margin5 = margin5 + 25;
    document.getElementById('horse5').style.left = margin5 + "%";
    i = i + 1;
    console.log(i);
    q = q + 5;
    
    checkWin5();


}
function moveBox6D() {
    margin5 = margin5 + 30;
    document.getElementById('horse5').style.left = margin5 + "%";
    i = i + 1;
    console.log(i);
    q = q + 6;
    
    checkWin5();


}
function moveBoxE() {
    margin6 = margin6 + 5;
    document.getElementById('horse6').style.left = margin6 + "%";
    i = i + 1;
    console.log(i);
    r = r + 1;
    
    checkWin6();


}

function moveBox2E() {
    margin6 = margin6 + 10;
    document.getElementById('horse6').style.left = margin6 + "%";
    i = i + 1;
    console.log(i);
    r = r + 2;
    
    
    checkWin6();



}
function moveBox3E() {
    margin6 = margin6 + 15;
    document.getElementById('horse6').style.left = margin6 + "%";
    i = i + 1;
    console.log(i);
    r = r + 3;
    
    checkWin6();


}

function moveBox4E() {
    margin6 = margin6 + 20;
    document.getElementById('horse6').style.left = margin6 + "%";
    i = i + 1;
    console.log(i);
    r = r + 4;
    
    checkWin6();


}

function moveBox5E() {
    margin6 = margin6 + 25;
    document.getElementById('horse6').style.left = margin6 + "%";
    i = i + 1;
    console.log(i);
    r = r + 5;
    
    checkWin6();


}
function moveBox6E() {
    margin6 = margin6 + 30;
    document.getElementById('horse6').style.left = margin6 + "%";
    i = i + 1;
    console.log(i);
    r = r + 6;
    
    checkWin6();


}
const theTimer = document.querySelector(".timebox");
const testArea = document.querySelector(".textarea");
const originText = document.querySelector(".typethistext").innerHTML;
const testWrapper = document.querySelector(".text-part");
var timeRunning = false;
var timer = [0,0,0,0];
var interval;
const btn = document.querySelector(".startbtn");

function leadingZero(time){
    if(time <= 9){
        time="0"+time;
    }

    return time;
}


function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML=currentTime;

    timer[3]++;

    timer[0]=Math.floor(timer[3]/100/60);
    timer[1]=Math.floor(timer[3]/100) - (timer[0]*60);
    timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}


function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timeRunning = false;
    testArea.value = "";
    theTimer.innerHTML="00:00:00";
    testArea.style.borderColor="gray";
}

btn.addEventListener("click",reset)



testArea.addEventListener("keypress",start);

function start(){
    let textEnteredLength = testArea.value.length;
    if(textEnteredLength == 0 && !timeRunning){
        timeRunning = true;
        interval = setInterval(runTimer,10);
    }
}




function spellCheck(){
 let textEntered = testArea.value;
 let originTextMatch = originText.substring(0,textEntered.length);

 if (textEntered == originText) {
    testArea.style.borderColor = "green";
    clearInterval(interval);
 } else {
    if (textEntered = originTextMatch) {
        testArea.style.borderColor = "yellow";
    } else {
        testArea.style.borderColor = "red";
    }
 }
}

testArea.addEventListener("keyup",spellCheck)
let minuteLabel = document.querySelector("#minutes");
let secondLabel = document.querySelector("#seconds");

let m = 0;
let s = 0;

var passTime = window.setInterval(function(){
    s += 1;
    if (s === 60){
        s = 0;
        m += 1;
        minuteString = s;
        if (m < 10){
            minuteString = "0" + minuteString;
        }
        minuteLabel.textContent = minuteString;
    }
    secondString = s;
    if (s < 10){
        secondString = "0" + secondString;
    }
    secondLabel.textContent = secondString;

}, 1000);
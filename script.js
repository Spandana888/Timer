
window.onload =function(){
    var hour =0;
    var min = 0;
    var sec = 0;
    var displayHour = document.getElementById("hour");
    var displayMin = document.getElementById("min");
    var displaySec = document.getElementById("sec"); 
    var  start = document.getElementById("btn-start");
    var  reset = document.getElementById("btn-reset");
    var  stop = document.getElementById("btn-stop");
    var interval;

    start.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer ,1000);
    }
    stop.onclick = function(){
        clearInterval(interval);
    }

    reset.onclick = function(){
        clearInterval(interval);
        sec="0";
        min ="0";
        hour = "0";
        displaySec.innerHTML = "00";
        displayMin.innerHTML = "00";
        displayHour.innerHTML = "00";
    }

    function startTimer(){
        //alert("Hello world")
        sec++;
        displaySec.innerHTML = sec;
        if(sec == 60){
            displayMin.innerHTML  =  "0" + min++;
            sec= 0;
        }
       if(min == 60){
            displayHour.innerHTML  = hour++;
            min= 0;
        }
        
    }
}
   

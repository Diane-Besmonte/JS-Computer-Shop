// Get the modal
var modal = document.getElementsByClassName("modal");
// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    modal[i].style.display = "block";
  };
  // console.log(btn);
}

// ADD Btn
let formTime = document.getElementsByClassName("userTime");
    // console.log(formTime[5]);
    // console.log(formTime[5].readOnly = false);
    // console.log(formTime[5].value = "400");
let modalHour = document.getElementsByClassName("hours");
// console.log(modalHour);
let modalMin = document.getElementsByClassName("minutes");
// console.log(modalMin.value);
let myBtnAdd = document.getElementsByClassName("addBtns")
let formPrice = document.getElementsByClassName("userPrice");
let changeColor = document.getElementsByClassName("bg-color");
let timerInput = document.getElementsByClassName("timeLeft");


for (let i = 0; i < myBtnAdd.length; i++) {
  myBtnAdd[i].onclick = function () {

    //display Time @ Form

    changeColor[i].style.borderColor = "#009ffd"

    modal[i].style.display = "none";
    formTime[i].readOnly = false;

    if (modalHour[i].value.length < 2) {
    modalHour[i].value = "0" + modalHour[i].value;
    }

    if (modalMin[i].value.length < 2) {
    modalMin[i].value = "0" + modalMin[i].value;
    }

    formTime[i].value = modalHour[i].value + ":" + modalMin[i].value;
    let forPrice = formTime[i].value.split(":");
    let priceHr = forPrice[0]*20;
    let priceMin = Math.round((forPrice[1]/30)*10);
    console.log(formPrice[i].value = `Php ${priceHr + priceMin}.00`);
    
// for countdown timer
function startTimer(duration, display) {
        var timer = duration,hours, minutes, seconds;

        let interval = setInterval(function () {
            hours = parseInt(timer/60/60,10)
            minutes = parseInt(timer / 60 % 60, 10);



            // console.log(minutes);

            seconds = parseInt(timer % 60, 10);
             //console.log(seconds);
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display = hours +":"+ minutes + ":" + seconds;

            timerInput["left"].value = display;

            console.log(timer)
            if (--timer == 300) {
                alert("5 Mins ka nalang");
            }

            if (--timer < 0) {
                clearInterval(interval);
            }
        }, 1000);

        if (minutes < 1 && seconds <= 50) {
          changeColor[i].style.borderColor = "red";
         }

    };

        var inputMin = 60 * modalMin[i].value;
        var inputHour = 60*60*modalHour[i].value;
        var totalTime = inputMin + inputHour;
        display = document.getElementsByClassName("timeLeft");

        startTimer(totalTime, display);
};
};

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < span.length; i++) {
  span[i].onclick = function () {
    modal[i].style.display = "none";
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

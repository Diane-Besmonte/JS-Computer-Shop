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
let stopTimer = document.getElementsByClassName("stop");
let removeUser = document.getElementsByClassName("remove");


// for (let i = 0; i < myBtnAdd.length; i++) {
  myBtnAdd[0].onclick = function () {

    //display Time @ Form

    changeColor[0].style.borderColor = "#009ffd";

    modal[0].style.display = "none";
    formTime[0].readOnly = false;

    if (modalHour[0].value.length < 2) {
    modalHour[0].value = "0" + modalHour[0].value;
    }

    if (modalMin[0].value.length < 2) {
    modalMin[0].value = "0" + modalMin[0].value;
    }

    formTime[0].value = modalHour[0].value + ":" + modalMin[0].value;
    let forPrice = formTime[0].value.split(":");
    let priceHr = forPrice[0]*20;
    let priceMin = Math.round((forPrice[1]/30)*10);
    console.log(formPrice[0].value = `Php ${priceHr + priceMin}.00`);

    // second = 59;
    // timer[i].value = formTime[i].value  + ":" + second;


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
                  Swal.fire(
                    'Reminder',
                    'Only 5 minutes left',
                    'question'
                  )
              if (--timer <= 300) {
                changeColor[0].style.borderColor = "red";
                }
            } else if (timer < 0) {
              clearInterval(interval);
            }

        }, 1000);

        // pause timer/ stop button
        stopTimer[0].onclick = function stopCountdown() {

            clearInterval(interval);
            Swal.fire(
              'Checkout',
              'Your total bill:' + formPrice[0].value,
              'success'
            )
        };
    };

        var inputMin = 60 * modalMin[0].value;
        var inputHour = 60*60*modalHour[0].value;
        var totalTime = inputMin + inputHour;
        display = document.getElementsByClassName("timeLeft");

        startTimer(totalTime, display);

// bg change color
          if (timerInput["left"].value > 5 ) {
          changeColor[0].style.borderColor = "blue";
         } 
        //  console.log(timerInput["left"].value);
};
// };

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

// remove user
removeUser[0].onclick = function removed() {
    changeColor[0].style.borderColor = "green";
  };

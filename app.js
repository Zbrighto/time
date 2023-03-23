//SELECTING DOM ELEMENT

const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const user = document.querySelector('#use');
const focus = document.querySelector('#focus');


// FUNCTION TO SHOWING THE TIME

function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour %12 || 12

    time.innerHTML= `${hour}:${minutes}:${seconds}${amPm}`;

    setTimeout(showTime, 1000);

}
showTime()

// setting bacground image

function showBgandGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        document.body.style.backgroundImage = "url('afternoon.jpg')"
        greeting.textContent = 'Good Morning!'
        document.body.style.color = 'black'
    }else if (hour < 16 ){
        document.body.style.backgroundImage = "url('afternoon.jpg')"
        greeting.textContent = 'Good Afternoon!'
        time.style.color = 'white'
    }else{
        document.body.style.backgroundImage = "url('evening.jpg')"
        greeting.textContent = 'Good evening!'
    }
}
showBgandGreet()
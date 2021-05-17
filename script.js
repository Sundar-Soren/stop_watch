const SrunTime = document.querySelector('#SrunTime');
const MrunTime = document.querySelector('#MrunTime');
const HrunTime = document.querySelector('#HrunTime');
const miliRunTime = document.querySelector('#mrunTime');
const timeScreen = document.getElementsByClassName('screen');
const pause = document.getElementById('pause');
const start = document.querySelector('#start');
const flag = document.querySelector('#flag');
const clear = document.querySelector('#clear');
const noteTime = document.querySelector('#noteTime');
const forDisplay = document.querySelectorAll('.display')


start.addEventListener('click', function startTime() {
    var myTime = setInterval(increment, 10)

    start.style.display = "none";
    pause.style.display = "block";
    flag.style.display = "block"
    clear.style.display = "none"



    pause.addEventListener('click', function pauseTime() {
        clearInterval(myTime);
        pause.style.display = "none";
        start.style.display = "block";
        flag.style.display = "none"
        clear.style.display = "block"
    })
})

flag.addEventListener('click', function note() {
    showNoteTime();

})

clear.addEventListener('click', function allClear() {
    location.reload();

})


f = 0;
const showNoteTime = () => {
    f++;
    const show = document.createElement("p")
    noteTime.appendChild(show);
    show.setAttribute('class', "hi");
    const logo = document.getElementsByClassName('hi');
    const showflag = document.createElement('i');
    show.appendChild(showflag);
    // show.classList.add("<i class)
    let noteSeconds = SrunTime.innerHTML;
    let noteMinutes = MrunTime.innerHTML;
    let noteHours = HrunTime.innerHTML;
    let notemili = miliRunTime.innerHTML;
    show.innerHTML =  "🚩"+f+ ".    " + noteHours + "" + noteMinutes + "" + noteSeconds + "" + notemili;



}




let x = 0;
function increment() {
    x++;
    if (x < 10) {
        miliRunTime.innerHTML = ".0" + x;

    }
    else if (x === 100) {
        x = 0;
        miliRunTime.innerHTML = ".00";
        forSeconds();
    }

    else {
        miliRunTime.innerHTML = "." + x;
    }


}

let a = 0;
const forSeconds = () => {
    a++;
    if (a < 10) {
        SrunTime.innerHTML = "0" + a;

    }
    else if (a === 60) {
        a = 0;
        SrunTime.innerHTML = "00";
        forMinutes();
    }

    else {
        SrunTime.innerHTML = a;
    }
}


let b = 0;
const forMinutes = () => {
    b++;
    if (b < 10) {
        MrunTime.innerHTML = "0" + b + ":";
    }
    else if (b === 10) {
        b = 0;
        MrunTime.innerHTML = "00:";
        forHours();
    }
    else {
        HrunTime.innerHTML = b + ":";
    }
}
let c = 0;
const forHours = () => {
    c++;
    if (c < 10) {
        HrunTime.innerHTML = "0" + c + ":";
    }
    else if (c === 24) {
        c = 0
        HrunTime.innerHTML = "00";
    }
    else {
        HrunTime.innerHTML = c;
    }
}

const butns = document.querySelectorAll("button")
const counterEl = document.getElementById("counter");
const statusBarEl = document.getElementById("myBar");

function getCounterElState() {
    return parseInt(counterEl.textContent);
}

function setCounterElState(state) {
    return counterEl.textContent = state;
}

function setStatusBarWidth(width) {
    statusBarEl.style.width = width + "%";
}


var statusBarWidth = 0;
function step() {
    const theSmallestStep = (1 / 15) * 100;
    statusBarWidth = statusBarWidth + theSmallestStep;
    setStatusBarWidth(statusBarWidth);
    setCounterElState(getCounterElState() + 1);
}

butns.forEach(btn => {
    btn.addEventListener("click", () => {
        defineNumOfSteps(btn.id)
    })
})


function defineNumOfSteps(steps) {
    if (getCounterElState() < 15) {
        switch (steps) {
            case '1':
                step();
                break;
            case '5':
                timeSteps(steps)
                break;
            case '15':
                timeSteps(steps)
                break;
        }
    }
}

function timeSteps(steps) {
    let callCount = 1;
    var repeaterFunc = setInterval(function () {
        if (callCount <= steps && getCounterElState() < 15) {
            step();
            callCount += 1;
        } else {
            clearInterval(repeaterFunc);
        }
    }, 400)
}







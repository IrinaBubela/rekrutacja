let butns = document.querySelectorAll("button")
let counter = document.getElementById("counter");
const statusBarEl = document.getElementById("myBar");

function getCounterState() {
    return parseInt(counter.textContent);
}

console.log(counter.textContent);


function setCounterState(state) {
    return counter.textContent = state;
}

function setStatusBarWidth(width) {
    statusBarEl.style.width = width + "%";
}


var statusBarWidth = 0;
function step() {
    statusBarWidth = statusBarWidth + 6.66;
    setStatusBarWidth(statusBarWidth);
    setCounterState(getCounterState() + 1);
}

butns.forEach(btn => {
    btn.addEventListener("click", () => {
        frame(btn.id)
    })
})

let callCount = 1;

function frame(int) {
    if (getCounterState() < 15) {
        console.log(getCounterState());

        switch (int) {
            case '1':
                step();
                break;
            case '5':
                var repeaterFunc = setInterval(function () {
                    if (callCount <= int) {
                        step();
                        callCount += 1;
                    } else {
                        clearInterval(repeaterFunc);
                    }
                }, 800)
                break;
            case '15':
                repeaterFunc = setInterval(function () {
                    if (callCount <= int) {
                        step();
                        callCount += 1;
                    } else {
                        clearInterval(repeaterFunc);
                    }
                }, 800)
                break;
        }
    }
}



// var sum = 0;
// butns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         if (sum < 15) {
//             sum = (sum + parseInt(btn.id)) > 15 ? 15 : sum + parseInt(btn.id);
//             counter.textContent = sum;
//             var int = btn.id;
//             frame(int)
//             console.log(int);

//         } else {
//             counter.textContent = sum;
//         }
//     })
// })

// function step() {
//     console.log('step');
//     width = width + 6.66;
//     elem.style.width = width + "%";
//     setCounterState(getCounterState() + 1);
// }

// var barInterval = null;
// var width = 0;
// function frame(int) {
//     var elem = document.getElementById("myBar");
//     if (width >= 100) {
//         elem.style.width = width + "%";
//     } else {
//         switch (int) {
//             case '1':
//                 width = width + 6.66;
//                 elem.style.width = width + "%";
//                 break;
//             case '5':
//                 var counterState = getCounterState()
//                 if (counterState == 5 && int == "15") {
//                     barInterval = setInterval(() => {
//                         step();
//                         if (width >= 96) {
//                             clearInterval(barInterval);
//                         }
//                     }, 500);
//                 } else {
//                     width = (width + 33.33) >= 100 ? width = 100 : width + 33.33;
//                     elem.style.width = width + "%";
//                     break;
//                 }




//             case '15':
//                 if (width => 5) {

//                 }
//                 width = (width + 100) >= 100 ? width = 100 : width + 100;
//                 elem.style.width = width + "%";
//                 break;
//         }
//     }
// }






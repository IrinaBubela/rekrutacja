let butns = document.querySelectorAll("button")
let counter = document.getElementById("counter");



var sum = 0;
butns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (sum < 15) {
            sum = (sum + parseInt(btn.id)) > 15 ? 15 : sum + parseInt(btn.id);
            counter.textContent = sum;
            var int = btn.id;
            frame(int)
            console.log(int);
        } else {
            counter.textContent = sum;
        }
    })
})


var width = 0;
function frame(int) {
    var elem = document.getElementById("myBar");
    if (width >= 100) {
        elem.style.width = width + "%";
    } else {
        switch (int) {
            case '1':
                width = width + 6.66;
                elem.style.width = width + "%";
                break;
            case '5':
                if (width => 5) {

                }
                width = (width + 33.33) >= 100 ? width = 100 : width + 33.33;
                elem.style.animation = "anim .5s forward";
                elem.style.width = width + "%";
                break;
            case '15':
                if (width => 5) {

                }
                width = (width + 100) >= 100 ? width = 100 : width + 100;
                elem.style.width = width + "%";
                break;
        }
    }
}






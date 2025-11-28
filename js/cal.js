let shouldClearDisplay = false;
let output = document.getElementById("display");

function display(num) {
    if (shouldClearDisplay) {
        output.value = "";
        shouldClearDisplay = false;
    }
    output.value += num;
}

function calculate() {
    try {
        output.value = eval(output.value);
        shouldClearDisplay = true;
    } catch(err) {
        output.value = "";
        alert("ERROR");
        shouldClearDisplay = true;
    }
}

function del() {
    output.value = output.value.slice(0, -1);
    shouldClearDisplay = false;
}

function clr() {
    output.value = "";
    shouldClearDisplay = false;
}
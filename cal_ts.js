"use strict";
// const display:HTMLInputElement= document.getElementById("display") as HTMLInputElement;
Object.defineProperty(exports, "__esModule", { value: true });
let history = [];
function add(val) {
    const display1 = document.getElementById("display");
    display1.value += val;
}
;
function addOperator(opt) {
    const display1 = document.getElementById("display");
    display1.value += opt;
}
function showHistory() {
    let histList = document.getElementById("hist_list");
    histList.innerHTML = "";
    for (let i = history.length - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.innerText = `${history[i]?.expression} = ${history[i]?.result}`;
        histList.appendChild(li);
    }
}
function clearHistory() {
    let histList = document.getElementById("hist_list");
    history = [];
    histList.innerHTML = "";
}
const cle = () => {
    let display = document.getElementById("display");
    display.value = " ";
};
function del() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function convertToString(value) {
    return String(value);
}
function calculate() {
    let display = document.getElementById("display");
    try {
        const expression = display.value;
        const answer = eval(expression);
        history.push({
            expression,
            result: convertToString(answer)
        });
        showHistory();
        display.value = convertToString(answer);
    }
    catch {
        display.value = "Error";
    }
}
function sin() {
    let display = document.getElementById("display");
    display.value = convertToString(Math.sin(Number(eval(display.value)) * Math.PI / 180));
}
function cos() {
    let display = document.getElementById("display");
    display.value = convertToString(Math.cos(Number(eval(display.value)) * Math.PI / 180));
}
function tan() {
    let display = document.getElementById("display");
    display.value = convertToString(Math.tan(Number(eval(display.value)) * Math.PI / 180));
}
function sec() {
    let display = document.getElementById("display");
    display.value = convertToString(1 / Math.cos(Number(eval(display.value)) * Math.PI / 180));
}
function cosec() {
    let display = document.getElementById("display");
    display.value = convertToString(1 / Math.sin(Number(eval(display.value)) * Math.PI / 180));
}
function cot() {
    let display = document.getElementById("display");
    display.value = convertToString(1 / Math.tan(Number(eval(display.value)) * Math.PI / 180));
}
function log() {
    let display = document.getElementById("display");
    display.value = convertToString(Math.log10(Number(eval(display.value))));
}
function ln() {
    let display = document.getElementById("display");
    display.value = convertToString(Math.log(Number(eval(display.value))));
}
window.add = add;
window.ln = ln;
window.cot = cot;
window.log = log;
window.cosec = cosec;
window.sec = sec;
window.sin = sin;
window.cos = cos;
window.tan = tan;
window.calculate = calculate;
window.del = del;
window.cle = cle;
//# sourceMappingURL=cal_ts.js.map
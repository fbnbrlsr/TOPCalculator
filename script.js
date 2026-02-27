function onButtonClick(event) {

    let input = event.target.textContent;

    if(digits.includes(input)) {
        // Prevent trailing zeros
        if(input === "0" && (operators.includes(display.textContent.at(-1)) || display.textContent.length == 0 || display.textContent[0] === "0")) return;
        console.log("digit");
        if(display.textContent.length > 0 && display.textContent[0] === "0") display.textContent = input;
        else display.textContent += input;
    }
    else if(operators.includes(input)) {
        // Handle consecutive operator selection
        if(display.textContent.length > 0 && operators.includes(display.textContent.at(-1))) {
            display.textContent = display.textContent.slice(0, -1) + input;
            return;
        }
        console.log("operator");
        display.textContent = operate(display.textContent);
        display.textContent += input;
    }
    else if(input === "C") {
        console.log("C");
        display.textContent = "0";
    }
    else if(input === "=") {
        console.log("=");
        display.textContent = operate(display.textContent);
    }
}

function operate(expr) {
    let res = null;
    if(expr.includes("+")) {
        let nums = expr.split("+");
        res = +nums[0] + +nums[1];
    }
    else if(expr.includes("-")) {
        let nums = expr.split("-");
        res = +nums[0] - +nums[1];
    }
    else if(expr.includes("×")) {
        let nums = expr.split("×");
        res = +nums[0] * +nums[1];
    }
    else if(expr.includes("÷")) {
        let nums = expr.split("÷");
        res = +nums[0] / +nums[1];
    }
    else {
        res = expr;
    }
    res = Math.round(res * 1000) / 1000;
    return res;
}

function stripTrailingZeros(input) {
    return 
}



let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operators = ["+", "-", "×", "÷"];

let display = document.querySelector(".result-text");
display.textContent = "0";
let expr = null;

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", onButtonClick);
});

let displayValue = "";

function appendToDisplay(value) {
    if (displayValue === "0" && value !== "." || displayValue === "Error") {
        displayValue = "";
    }
    displayValue += value;
    document.getElementById("output").value = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    document.getElementById("output").value = displayValue;
}

function calculateResult() {
    try {
        const result = math.evaluate(displayValue);
        document.getElementById("output").value = result;
    } catch (error) {
        document.getElementById("output").value = "Error";
    }
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("output").value = displayValue;
    document.getElementById("equation").textContent = displayValue;
}


document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;
    
    const keyMappings = {
        "0": "appendToDisplay('0')",
        "1": "appendToDisplay('1')",
        "2": "appendToDisplay('2')",
        "3": "appendToDisplay('3')",
        "4": "appendToDisplay('4')",
        "5": "appendToDisplay('5')",
        "6": "appendToDisplay('6')",
        "7": "appendToDisplay('7')",
        "8": "appendToDisplay('8')",
        "9": "appendToDisplay('9')",
        "+": "appendToDisplay('+')",
        "-": "appendToDisplay('-')",
        "*": "appendToDisplay('*')",
        "/": "appendToDisplay('/')",
        ".": "appendToDisplay('.')" ,
        "Enter": "calculateResult()",
        "Escape": "clearDisplay()",
    };

    if (key in keyMappings) {
        eval(keyMappings[key]);
        event.preventDefault(); 
    }
}

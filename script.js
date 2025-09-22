const display = document.getElementById("display");
const expressionBox = document.getElementById("expression");

// Add input to the display
function appendToDisplay(input) {
  
  if (input === '&times') input = '*';
  if (input === '&divide') input = '/';

  display.value += input;
  expressionBox.textContent = display.value;
}

// Clear 
function ClearDisplay() {
  display.value = "";
}

function ClearAll() {
  display.value = "";
  expressionBox.textContent = "";
}

//togglesign
function toggleSign() {
  if (display.value) {
    // Check if the value is already negative
    if (display.value.startsWith("-")) {
      display.value = display.value.slice(1); // remove "-" to make positive
    } else {
      display.value = "-" + display.value; // add "-" to make negative
    }
    expressionBox.textContent = display.value;
  }
}

// Backspace (delete last character)
function backspace() {
  display.value = display.value.slice(0, -1);
  expressionBox.textContent = display.value;
}

// Calculate the result
function Calculate() {
  try {
     let exp = display.value;

    // Replace "%" with "/100"
    exp = exp.replace(/%/g, "/100");

    const result = eval(exp);

    
    display.value = result;
    
  } catch {
    display.value = "Error";
  }
}
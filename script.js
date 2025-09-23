const display = document.getElementById("display");
const expressionBox = document.getElementById("expression");

// Add input to the display
function appendToDisplay(input) {
  if (input === '&times') input = '*';
  if (input === '&divide') input = '/';

  // If display is "0", replace it instead of appending
  if (display.value === "0") {
    // Allow operators after 0, but replace 0 if a digit is typed
    if (!isNaN(input)) {
      display.value = input;
    } else {
      display.value += input;
    }
  } else {
    display.value += input;
  }

  expressionBox.textContent = display.value;
}
// Clear only display
function ClearDisplay() {
  display.value = "";
}

// Clear both display and expression
function ClearAll() {
  display.value = "";
  expressionBox.textContent = "";
}

// Toggle positive/negative sign
function toggleSign() {
  if (display.value) {
    if (display.value.startsWith("-")) {
      display.value = display.value.slice(1);
    } else {
      display.value = "-" + display.value;
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

    // Replace % with "/100"
    exp = exp.replace(/%/g, "/100");

    const result = eval(exp);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}


// ✅ Keyboard input support
document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Allow numbers and basic operators
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendToDisplay(key);
  } 
  // Enter or = key to calculate
  else if (key === "Enter" || key === "=") {
    event.preventDefault(); // Prevent form submission
    Calculate();
  } 
  // Backspace to delete
  else if (key === "Backspace") {
    backspace();
  }
  // Delete to clear all
  else if (key === "Delete") {
    ClearAll();
  }
  //Clear
  else if(key === "Escape"){
    ClearDisplay();
  }
  // % key
  else if (key === "%") {
    appendToDisplay("%");
  }
  // n key to toggle sign
  else if (key.toLowerCase() === "n") {
    toggleSign();
  }
});

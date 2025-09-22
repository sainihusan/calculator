const display = document.getElementById("display");

// Add input to the display
function appendToDisplay(input) {
  
  if (input === '&times') input = '*';
  if (input === '&divide') input = '/';

  display.value += input;
}

// Clear all
function ClearDisplay() {
  display.value = "";
}

// Backspace (delete last character)
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function Calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

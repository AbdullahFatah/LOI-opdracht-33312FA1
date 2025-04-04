// CALCULATOR PROGRAM FOR LOI

/* Just for fun :) */
function fun() {
  display.value = 'Bye bye Abdullah'
}

/* show the input in display */
function appendToDisplay(input) {
  display.value += input
}

/* calculate the inputs*/
function calculate() {
  display.value = eval(display.value)
}
/*clear the values*/
function clearDisplay() {
  display.value = ''
}

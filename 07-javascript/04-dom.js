// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let output = document.querySelector(".output");
let input1 = document.getElementById("userInput1");

// add an event listener on the target element
document.getElementById("copy").onclick = function (event) {
  output.textContent = input1.value;
};
// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let input2 = document.getElementById("userInput2");
let section2 = document.getElementById("inputEventExample");
let output2 = document.createElement("div");
section2.append(output2);

// add an event listener on the target element
input2.oninput = function (event) {
  output2.textContent = input2.value;
};
// callback function to handle event

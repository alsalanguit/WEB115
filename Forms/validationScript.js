// JavaScript code for form validation
// Andrea Salanguit (Student ID# 2359797)


// Add an event listener to the form submits an event
let form = document.getElementById('myForm');
form.addEventListener("submit", validateInput);


function validateInput(event)
{
  // Prevent form from submitting
  event.preventDefault();

  // Retrieve the input field value
  let inputValue = document.getElementById('inputField').value;

  // Regular expression pattern for alphanumeric input
  let regEx = /^[a-zA-Z0-9]*$/;

  // Implement a function that validates the input value using a regEx for alphanumeric input
  if (!regEx.test(inputValue))
  {
    // Prevent form from submitting if the input value is not alphanumeric
    alert('Invalid input!');
  } else
  {
    // Display a confirmation if the input is valid and 'submits' the form
    alert('Input is valid! Form submitted.');
    form.onsubmit()
  }
}



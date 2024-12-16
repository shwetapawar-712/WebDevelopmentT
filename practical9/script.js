
function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log (number+" is even.");
    } else {
      console.log(number + " is odd.");
    }
  }
  
  let inputNumber = prompt("Enter a number:");
  inputNumber = parseInt(inputNumber);
  
  if (Number.isInteger(inputNumber)) {
    checkEvenOdd(inputNumber);
  } else {
    console.log("Please enter a valid number.");
  }
  

function checkEvenOdd() {
  var num = document.getElementById("number").value;
  if (num === "") {
      document.getElementById("result").textContent = "Please enter a number.";
      return;
  }
  if (num % 2 === 0) {
      document.getElementById("result").textContent = num + " is even.";
  } else {
      document.getElementById("result").textContent = num + " is odd.";
  }
}

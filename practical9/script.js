
 function checkEvenOdd() {
            // Get the number entered by the user
            var num = document.getElementById("number").value;

            // Check if the number is valid
            if (num === "") {
                document.getElementById("result").textContent = "Please enter a number.";
                return;
            }

            // Check if the number is even or odd
            if (num % 2 === 0) {
                document.getElementById("result").textContent = num + " is even.";
            } else {
                document.getElementById("result").textContent = num + " is odd.";
            }
        }

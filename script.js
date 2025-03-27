function checkNumber() {
    let number = document.getElementById("numberInput").value;
    let resultText = document.getElementById("resultText");

    if (number === "") {
        resultText.textContent = "Please enter a number!";
        resultText.style.color = "red";
        return;
    }

    number = parseInt(number);

    if (isNaN(number)) {
        resultText.textContent = "Invalid input! Enter a number.";
        resultText.style.color = "red";
    } else if (number % 2 === 0) {
        resultText.textContent = number + " is an Even Number!";
        resultText.style.color = "green";
    } else {
        resultText.textContent = number + " is an Odd Number!";
        resultText.style.color = "blue";
    }
}


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    if (username === "admin" && password === "password") {
      window.location.href = "odd-even-checker.html"; // Redirect to odd/even checker page
    } else {
      errorMessage.textContent = "Invalid username or password";
      errorMessage.style.display = "block";
    }
  });
  
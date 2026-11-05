const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {

    // Get input value
    const value = userInput.value.trim();

    // Check empty input
    if (value === "") {
        result.textContent = "Please enter a valid number!";
    }

    else {
        // Convert string into number
        const number = Number(value);

        // Check invalid number
        if (!Number.isFinite(number)) {
            result.textContent = "Please enter a valid number!";
        }

        // Check number below 10
        else if (number < 10) {
            result.textContent = "The number is lower than 10";
        }

        // Check number above 10
        else if (number > 10) {
            result.textContent = "The number is higher than 10";
        }

        // Check number equal to 10
        else {
            result.textContent = "The number is equal to 10";
        }
    }
}

// Add click event
checkBtn.addEventListener("click", checkInput);
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// Function to change the paragraph
function changeMessage() {
    message.textContent = "Hello there!";
}

// Add click event listener
changeBtn.addEventListener("click", changeMessage);
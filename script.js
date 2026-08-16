const nameInput = document.getElementById("name");
const submitButton = document.getElementById("submit");
const popup = document.getElementById("popup");
const showText = document.getElementById("showText");
const closeButton = document.getElementById("closeButton");
const form = document.querySelector("form");
const container = document.getElementById("container");
const error = document.getElementById("error");
const closeButton2 = document.getElementById("closeButton2");

// Hide popup when the page loads
popup.style.display = "none";
error.style.display = "none";

// Show popup
function sayHello() {
    const name = nameInput.value.trim();

    if (name === "") {
        nameInput.focus();
        error.style.display = "flex";
        popup.style.display = "none";
        container.style.display = "none";
        return;

    }

    showText.textContent = name + ", wala kang jowa!";

    popup.style.display = "flex";
    container.style.display = "none";
}

// Submit button
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    sayHello();
});

// Press Enter
form.addEventListener("submit", function(event) {
    event.preventDefault();
    sayHello();
});

// Close popup
closeButton.addEventListener("click", function() {
    popup.style.display = "none";
    container.style.display = "flex";
    nameInput.value = "";
});

closeButton2.addEventListener("click", function() {
    error.style.display = "none";
    container.style.display = "flex";
    nameInput.value = "";
});

const nameInput = document.getElementById("name");
const submitButton = document.getElementById("submit");
const popup = document.getElementById("popup");
const showText = document.getElementById("showText");
const closeButton = document.getElementById("closeButton");
const form = document.querySelector("form");
const container = document.getElementById("container");
const error = document.getElementById("error");
const closeButton2 = document.getElementById("closeButton2");
const music = document.getElementById(`music`);
const showText2 = document.getElementById(`showText2`);

// Hide popup when the page loads
popup.style.display = "none";
error.style.display = "none";
music.pause();
music.currentTime = 0;

// Show popup
function sayHello() {
    const name = nameInput.value.trim();

    if (name === "") {
        nameInput.focus();
        error.style.display = "flex";
        popup.style.display = "none";
        container.style.display = "none";
        music.pause();
        music.currentTime = 0;
        return;

    }

    showText.textContent = `Hi ` + name + "! I hope you are now okay";
    showText2.textContent = `Please dont close this window for a while`;
    music.play();

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
    music.pause();
    music.currentTime = 0;
});

closeButton2.addEventListener("click", function() {
    error.style.display = "none";
    container.style.display = "flex";
    nameInput.value = "";
    music.pause();
    music.currentTime = 0;
});

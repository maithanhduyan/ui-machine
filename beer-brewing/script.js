const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const temperatureSlider = document.getElementById("temperatureSlider");
const temperatureLabel = document.getElementById("temperatureLabel");

let brewingInterval;
let isBrewing = false;

startButton.addEventListener("click", () => {
    if (!isBrewing) {
        startBrewing();
        isBrewing = true;
        startButton.disabled = true;
        startButton.style.backgroundColor = "#ccc"; // Màu mặc định khi khóa
        stopButton.disabled = false;
        stopButton.style.backgroundColor = "#e74c3c"; // Màu đỏ cho nút Stop
        brewingInterval = setInterval(updateTemperature, 1000);
    }
});

stopButton.addEventListener("click", () => {
    if (isBrewing) {
        stopBrewing();
        isBrewing = false;
        startButton.disabled = false;
        startButton.style.backgroundColor = "#2ecc71"; // Màu xanh lá cho nút Start
        stopButton.disabled = true;
        stopButton.style.backgroundColor = "#ccc"; // Màu mặc định khi khóa
        clearInterval(brewingInterval);
    }
});

function startBrewing() {
    console.log("Brewing started");
}

function stopBrewing() {
    console.log("Brewing stopped");
}

function updateTemperature() {
    const temperature = temperatureSlider.value;
    temperatureLabel.textContent = `Temperature: ${temperature}°C`;
}
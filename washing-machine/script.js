document.addEventListener("DOMContentLoaded", function () {
    const modeButtons = document.querySelectorAll(".mode-button");
    const powerButton = document.getElementById("power-button");
    const powerWrapper = document.querySelector(".power-wrapper");
    const startButton = document.getElementById("start-button");
    const statusDiv = document.getElementById("status");

    let selectedMode = "";
    let currentWaterLevel = 0;
    let isPowerOn = false;

    modeButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (isPowerOn) {
                selectedMode = button.getAttribute("data-mode");
                modeButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
            } else {
                statusDiv.textContent = "Turn on the power first!";
            }
        });
    });

    powerButton.addEventListener("click", function () {
        isPowerOn = !isPowerOn;
        if (isPowerOn) {
            powerButton.textContent = "Power Off";
            powerWrapper.classList.remove("power-off");
            statusDiv.textContent = "Power is on.";
        } else {
            powerButton.textContent = "Power";
            powerWrapper.classList.add("power-off");
            statusDiv.textContent = "Power is off.";
        }
        powerButton.classList.toggle("power-on", isPowerOn);
    });

    // Water Level 
    function updateWaterLevel(level) {
        const waterLevelText = document.getElementById("current-water-level");
        waterLevelText.textContent = level;
    }

    function simulateWaterLevelChange() {
        if (selectedMode === "gentle") {
            currentWaterLevel = 30;
        } else if (selectedMode === "normal") {
            currentWaterLevel = 50;
        } else if (selectedMode === "intense") {
            currentWaterLevel = 80;
        }

        updateWaterLevel(currentWaterLevel);
    }

    startButton.addEventListener("click", function () {
        if (selectedMode) {
            statusDiv.textContent = `Started ${selectedMode} wash...`;
            simulateWaterLevelChange();
        } else {
            statusDiv.textContent = "Select a wash mode first!";
        }
    });
});
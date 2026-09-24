// ========================================
// GET HTML ELEMENTS
// ========================================

const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const convertButton =
    document.getElementById("convert-btn");

const errorMessage =
    document.getElementById("error-message");

const celsiusResult =
    document.getElementById("celsius-result");

const fahrenheitResult =
    document.getElementById("fahrenheit-result");

const kelvinResult =
    document.getElementById("kelvin-result");


// ========================================
// CONVERT TEMPERATURE
// ========================================

convertButton.addEventListener("click", function () {

    // Get input value
    const temperature =
        parseFloat(temperatureInput.value);

    // Get selected unit
    const unit =
        unitSelect.value;


    // Clear previous error
    errorMessage.textContent = "";


    // ========================================
    // VALIDATE INPUT
    // ========================================

    if (temperatureInput.value.trim() === "") {

        errorMessage.textContent =
            "Please enter a temperature.";

        clearResults();

        return;
    }


    if (isNaN(temperature)) {

        errorMessage.textContent =
            "Please enter a valid numeric temperature.";

        clearResults();

        return;
    }


    // ========================================
    // ABSOLUTE ZERO VALIDATION
    // ========================================

    if (
        unit === "celsius" &&
        temperature < -273.15
    ) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        clearResults();

        return;
    }


    if (
        unit === "fahrenheit" &&
        temperature < -459.67
    ) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-459.67°F).";

        clearResults();

        return;
    }


    if (
        unit === "kelvin" &&
        temperature < 0
    ) {

        errorMessage.textContent =
            "Kelvin temperature cannot be below 0 K.";

        clearResults();

        return;
    }


    // ========================================
    // VARIABLES
    // ========================================

    let celsius;
    let fahrenheit;
    let kelvin;


    // ========================================
    // CONVERSION
    // ========================================

    if (unit === "celsius") {

        // Celsius → Fahrenheit
        celsius = temperature;

        fahrenheit =
            (temperature * 9 / 5) + 32;

        // Celsius → Kelvin
        kelvin =
            temperature + 273.15;

    }


    else if (unit === "fahrenheit") {

        // Fahrenheit → Celsius
        celsius =
            (temperature - 32) * 5 / 9;

        // Fahrenheit → Kelvin
        kelvin =
            celsius + 273.15;

        fahrenheit = temperature;

    }


    else if (unit === "kelvin") {

        // Kelvin → Celsius
        celsius =
            temperature - 273.15;

        // Kelvin → Fahrenheit
        fahrenheit =
            (celsius * 9 / 5) + 32;

        kelvin = temperature;

    }


    // ========================================
    // DISPLAY RESULTS
    // ========================================

    celsiusResult.textContent =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.textContent =
        kelvin.toFixed(2) + " K";

});


// ========================================
// CLEAR RESULTS
// ========================================

function clearResults() {

    celsiusResult.textContent = "--";

    fahrenheitResult.textContent = "--";

    kelvinResult.textContent = "--";
}
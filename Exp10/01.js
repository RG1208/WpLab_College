function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result = 0;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    const conversionRates = {
        meters: 1,
        kilometers: 1000,
        miles: 1609.34,
        yards: 0.9144,
    };

    const valueInMeters = inputValue * conversionRates[fromUnit];

    result = valueInMeters / conversionRates[toUnit];

    document.getElementById("result").innerText = result.toFixed(4);
}

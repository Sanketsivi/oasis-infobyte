document.getElementById('convertBtn').addEventListener('click', convert);
document.getElementById('clearBtn').addEventListener('click', clearFields);

function convert() {
    var temperature = parseFloat(document.getElementById('inputTemp').value);
    var fromUnit = document.getElementById('tempFrom').value;
    var toUnit = document.getElementById('tempTo').value;
    var result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid temperature!";
        return;
    }

    var convertedTemp;

    if (fromUnit === toUnit) {
        result.textContent = "Please select different units for conversion!";
        return;
    }

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedTemp = (temperature * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedTemp = temperature + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemp = (temperature - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            convertedTemp = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemp = temperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedTemp = (temperature - 273.15) * 9/5 + 32;
        }
    }

    result.textContent = temperature + " " + fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1) +
                         " is " + convertedTemp.toFixed(2) + " " + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
}

function clearFields() {
    document.getElementById('inputTemp').value = "";
    document.getElementById('result').textContent = "";
}

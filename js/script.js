/**
 * This script is used to convert currencies between Canadian Dollars (CAD) and United States Dollars (USD).
 * It contains hardcoded exchange rates and functions to perform the conversion based on user input.
 * 
 * exchangeRates: An object containing the hardcoded exchange rates for CAD to USD and USD to CAD.
 * convertCurrency(): A function that determines which conversion to perform based on user input.
 * convertCADtoUSD(): A function that converts CAD to USD using the hardcoded exchange rate.
 * convertUSDtoCAD(): A function that converts USD to CAD using the hardcoded exchange rate.
 * 
 * The script listens for user input in either the CAD or USD input field and performs the appropriate conversion.
 * If the CAD amount is entered, it converts to USD, and if the USD amount is entered, it converts to CAD.
 * The result is then displayed in the corresponding input field. Data validation is performed to ensure
 * that the user enters a valid numerical amount before conversion.
 */// Hardcoded exchange rates
const exchangeRates = {
    cadToUsd: 0.79, // 1 CAD = 0.79 USD
    usdToCad: 1.27  // 1 USD = 1.27 CAD
};


function convertCurrency() {
    var cadAmount = document.getElementById('cadAmount').value;
    var usdAmount = document.getElementById('usdAmount').value;
    
    if (cadAmount) {
        convertCADtoUSD(cadAmount);
    } else if (usdAmount) {
        convertUSDtoCAD(usdAmount);
    } else {
        document.getElementById('result').innerText = 'Please enter an amount to convert.';
    }
}


// Function to convert CAD to USD
function convertCADtoUSD() {
    const cadAmount = document.getElementById('cadAmount').value;
    // Data validation
    if (cadAmount === '' || isNaN(cadAmount)) {
        alert('Please enter a valid CAD amount.');
        return;
    }
    const usdAmount = (cadAmount * exchangeRates.cadToUsd).toFixed(3);
    document.getElementById('usdAmount').value = usdAmount; // Display in USD input field
}

// Function to convert USD to CAD
function convertUSDtoCAD() {
    const usdAmount = document.getElementById('usdAmount').value;
    // Data validation
    if (usdAmount === '' || isNaN(usdAmount)) {
        alert('Please enter a valid USD amount.');
        return;
    }
    const cadAmount = (usdAmount * exchangeRates.usdToCad).toFixed(3);
    document.getElementById('cadAmount').value = cadAmount; // Display in CAD input field
}

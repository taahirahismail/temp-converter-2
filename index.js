// Function to convert celsius to Fahrenheit
let tempC, tempF;
function celsiusToFahrenheit(celsius) {
    celsius = parseFloat(celsius);
    tempC = (celsius*(9/5) + 32).toFixed(2);
    return tempC;
  }
  
  // Function to convert Fahrenheit to celsius
  function fahrenheitToCelsius(fahrenheit) {
    fahrenheit = parseFloat(fahrenheit);
    tempF = ((fahrenheit - 32) * 5/9).toFixed(2);
    return tempF;
  }
  
  // Prompt the user for input
  let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  let temperature = parseFloat(prompt("Enter the temperature:"));
  
  if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    alert(celsiusToFahrenheit(temperature));
  } else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    alert(fahrenheitToCelsius(temperature));
  } else {
    alert("Invalid conversion type.");
  }
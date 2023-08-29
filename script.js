function convertTemperature() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  const unit = document.getElementById("unit").value;
  let result = "";

  if (unit === "fahrenheit") {
    const fahrenheit = (celsius * 9/5) + 32;
    result = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  } else if (unit === "kelvin") {
    const kelvin = celsius + 273.15;
    result = `${celsius}°C is ${kelvin.toFixed(2)} K`;
  }

  document.getElementById("result").textContent = result;
}

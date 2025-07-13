
// script.js
const apiKey = "YOUR_API_KEY"; // 🔑 Replace with your OpenWeatherMap API Key

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById("temperature").textContent = `🌡️ Temp: ${data.main.temp} °C`;
      document.getElementById("description").textContent = `☁️ Weather: ${data.weather[0].description}`;
    })
    .catch(error => {
      document.getElementById("cityName").textContent = "";
      document.getElementById("temperature").textContent = "";
      document.getElementById("description").textContent = "Error: " + error.message;
    });
}

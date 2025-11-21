async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const errorDiv = document.getElementById("error");
  const weatherCard = document.getElementById("weatherInfo");

  if (!city) {
    errorDiv.textContent = "Please enter a city name.";
    weatherCard.style.display = "none";
    return;
  }

  const apiKey = "db5423a48c6061813f1f9da3fb309b22";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = data.main.temp.toFixed(1);
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("description").textContent = data.weather[0].description;
    

    weatherCard.style.display = "block";
    errorDiv.textContent = "";
  } catch (error) {
    weatherCard.style.display = "none";
    errorDiv.textContent = "City not found. Please try again.";
  }
};

const apiKey = "your-api-key";
const cityId = "your-city-id";

fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const city = data.name;
    const temp = data.main.temp;
    document.getElementById("city").textContent = city;
    document.getElementById("temp").textContent = temp;
  })
  .catch(error => console.error(error));
function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);



  console.log(response.data);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = `${date.getDay()}`:`${date.getHours()}`:`${date.getMinutes()}`;
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
}

function searchCity(city) {
  let apiKey = "3ff6cbf7904o3b69bt917218508fcdac";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(refreshWeather);
}

function formatDate {

  
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon:");

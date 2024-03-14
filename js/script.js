//Variables and element selection
const apiKey = "d94554e9189efb11c87d36b743937bb3";
const apiCountryURL = "https://flagsapi.com//flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country-flag");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

//Functions

//get the API data
const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  console.log(data);
  return data;
};

//show the API data
const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = Math.round(data.main.temp);
  descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)
  humidityElement.innerHTML = `${data.main.humidity}%`
  windElement.innerHTML = `${data.wind.speed}km/h`
};

//Events
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  showWeatherData(city);
});

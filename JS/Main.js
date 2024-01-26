const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let searchCity = document.getElementsByClassName("input")[0];
let searchBtn = document.getElementsByClassName("search")[0];
let city = document.getElementsByClassName("city");
let Country = document.getElementsByClassName("Country");
let temp = document.getElementsByClassName("temp");
let Day = document.getElementsByClassName("Day");
let ourDate = document.getElementsByClassName("Date");
let Cloud = document.getElementsByClassName("Cloud");
let Icon = document.getElementsByClassName("Icon");

searchBtn.addEventListener("click", async function () {
  let res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=4ded15e9891d46979b5213129240901&q=${searchCity.value}&days=7`
  );
  let weatherRes = await res.json();
  console.log(weatherRes);
  for (let i = 0; i < 4; i++) {
    let newDate = (ourDate[
      i
    ].innerHTML = `${weatherRes.forecast.forecastday[i].date}`);
    Day[i].innerHTML = Days[new Date(newDate).getDay()];
    Country[i].innerHTML = weatherRes.location.country;
    city[i].innerHTML = weatherRes.location.name;
    temp[i].innerHTML = weatherRes.forecast.forecastday[i].day.mintemp_c + "°";
    Cloud[i].innerHTML = weatherRes.forecast.forecastday[i].day.condition.text;
    Icon[i].innerHTML = weatherRes.forecast.forecastday[i].astro.sunrise;
  }
});
(async function () {
  let res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=4ded15e9891d46979b5213129240901&q=cairo&days=7`
  );
  let weatherRes = await res.json();
  console.log(weatherRes, res);
  for (let i = 0; i < 4; i++) {
    let newDate = (ourDate[
      i
    ].innerHTML = `${weatherRes.forecast.forecastday[i].date}`);
    Day[i].innerHTML = Days[new Date(newDate).getDay()];
    Country[i].innerHTML = weatherRes.location.country;
    city[i].innerHTML = weatherRes.location.name;
    temp[i].innerHTML = weatherRes.forecast.forecastday[i].day.mintemp_c + "°";
    Cloud[i].innerHTML = weatherRes.forecast.forecastday[i].day.condition.text;
    Icon[i].innerHTML = weatherRes.forecast.forecastday[i].astro.sunrise;
  }
})();

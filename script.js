let days = ["sun","mon","tue","wed","thur","fri","sat"];
let months = ["Jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"];

function getWeather() {
	document.querySelector("#weather-info").style.display = "block";
	const cityName = document.querySelector("input").value;

  $.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d0a4d68a835b937430166246c26b61de&units=metric`,
    success: function (data) {
      console.log(data);
      document.querySelector(".city-name").innerHTML = data.name;
      document.querySelector(".icon").innerHTML = `<div>${data.weather[0].description}'</div>`;
      document.querySelector(".description").innerHTML = data.weather[0].main;
      document.querySelector(".temp > span").innerHTML = data.main.temp;
      document.querySelector(".min").innerHTML = data.main.temp_min;
      document.querySelector(".max").innerHTML = data.main.temp_max;

      let weatherIcon = data.weather[0].description;
      if (weatherIcon == "broken clouds") {
        document.querySelector(".description").innerHTML = `<i class="wi wi-cloud"></i>`;

      } else if(weatherIcon == "mist"){
        document.querySelector(".description").innerHTML = `<i class="wi wi-fog"></i>`;

      } else if(weatherIcon == "few clouds"){
        document.querySelector(".description").innerHTML = `<i class="wi wi-day-cloudy"></i>`;

      } else if(weatherIcon == "dust"){
        document.querySelector(".description").innerHTML = `<i class="wi wi-cloudy-gusts"></i>`;

      } else if(weatherIcon == "clear"){
        document.querySelector(".description").innerHTML = `<i class="wi wi-night-clear"></i>`;

      } else if(weatherIcon == "fog"){
        document.querySelector(".description").innerHTML = `<i class="wi wi-day-fog"></i>`;

      } else if(weatherIcon == "haze"){
        document.querySelector(".description").innerHTML = `<i class="wi wi-day-haze"></i>`;

      } else if(weatherIcon == "smoke"){
        document.querySelector(".description").innerHTML = `<i class="wi wi-smoke"></i>`;

      } else if(weatherIcon == "rain"){
        document.querySelector(".description").innerHTML = `<i class="wi wi-rain"></i>`;

      } else {
        document.querySelector(".description").innerHTML = `<i class="wi wi-cloudy"></i>`;

      }
    },
    error: function (err) {
    alert(data);
    }
  });

  $.ajax ({
    url:`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=63617831300026c7597da58cd6bf64e1&units=metric`,
    success:function (data) {
      console.log(data);
      let d1 = new Date(data.list[0].dt*1000);
      let d2 = new Date(data.list[8].dt*1000);
      let d3 = new Date(data.list[16].dt*1000);
      let d4 = new Date(data.list[24].dt*1000);
      let d5 = new Date(data.list[32].dt*1000);

      document.querySelector(".day-name1").innerHTML = days[d1.getDay()];
      document.querySelector(".day-name2").innerHTML = days[d2.getDay()];
      document.querySelector(".day-name3").innerHTML = days[d3.getDay()];
      document.querySelector(".day-name4").innerHTML = days[d4.getDay()];
      document.querySelector(".day-name5").innerHTML = days[d5.getDay()];

      document.querySelector(".date-name1").innerHTML = `${months[d1.getMonth()]} ${d1.getDate()}`;
      document.querySelector(".date-name2").innerHTML = `${months[d2.getMonth()]} ${d2.getDate()}`;
      document.querySelector(".date-name3").innerHTML = `${months[d3.getMonth()]} ${d3.getDate()}`;
      document.querySelector(".date-name4").innerHTML = `${months[d4.getMonth()]} ${d4.getDate()}`;
      document.querySelector(".date-name5").innerHTML = `${months[d5.getMonth()]} ${d5.getDate()}`;

      let forecasteIcon1 = data.list[0].weather[0].main;
      if (forecasteIcon1 == "broken clouds") {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-cloud"></i>`;

      } else if (forecasteIcon1 == "mist") {
        document.querySelector(".forecast-icon1").innerHTML =  `<i class="wi wi-fog"></i>`;

      } else if (forecasteIcon1 == "few clouds") {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-day-cloudy"></i>`;

      } else if (forecasteIcon1 == "dust") {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-cloudy-gusts"></i>`;

      } else if (forecasteIcon1 == "clear") {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-night-clear"></i>`;

      } else if (forecasteIcon1 == "fog") {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-day-fog"></i>`;

      } else if (forecasteIcon1 == "haze") {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-day-haze"></i>`;

      } else if (forecasteIcon1 == "smoke") {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-smoke"></i>`;

      } else if (forecasteIcon1 == "rain") {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-rain"></i>`;

      } else {
        document.querySelector(".forecast-icon1").innerHTML = `<i class="wi wi-cloudy"></i>`;

      }


      let forecasteIcon2 = data.list[8].weather[0].main;
      if (forecasteIcon2 == "Clear") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-day-sunny"></i>`

      } else if (forecasteIcon2 == "Partly Cloudy") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-day-cloudy"></i>`

      } else if (forecasteIcon2 == "Partly Cloudy") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`

      } else if (forecasteIcon2 == "Clouds") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-cloud"></i>`

      } else if (forecasteIcon2 == "Mostly Cloudy") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-cloudy"></i>`

      } else if (forecasteIcon2 == "Scattered Showers") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-showers"></i>`

      } else if (forecasteIcon2 == "Rain") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-rain"></i>`

      } else if (forecasteIcon2 == "Thunderstorm") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-thunderstorm"></i>`

      } else if (forecasteIcon2 == "Snow") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-snow"></i>`

      } else if (forecasteIcon2 == "Mist" || forecasteIcon2 == "Smoke") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-windy"></i>`

      } else if (forecasteIcon2 == "Haze") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-dust"></i>`

      } else if (forecasteIcon2 == "Storm") {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-sandstorm"></i>`

      } else {
        document.querySelector(".forecast-icon2").innerHTML = `<i class="wi wi-sandstorm"></i>`

      }


      let forecasteIcon3 = data.list[16].weather[0].main;
      if (forecasteIcon3 == "Clear") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-day-sunny"></i>`

      } else if (forecasteIcon3 == "Partly Cloudy") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-day-cloudy"></i>`

      } else if (forecasteIcon3 == "Partly Cloudy") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`

      } else if (forecasteIcon3 == "Clouds") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-cloud"></i>`

      } else if (forecasteIcon3 == "Mostly Cloudy") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-cloudy"></i>`

      } else if (forecasteIcon3 == "Scattered Showers") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-showers"></i>`

      } else if (forecasteIcon3 == "Rain") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-rain"></i>`

      } else if (forecasteIcon3 == "Thunderstorm") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-thunderstorm"></i>`

      } else if (forecasteIcon3 == "Snow") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-snow"></i>`

      } else if (forecasteIcon3 == "Smoke") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-windy"></i>`

      } else if (forecasteIcon3 == "Haze") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-dust"></i>`

      } else if (forecasteIcon3 == "Storm") {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-sandstorm"></i>`

      } else {
        document.querySelector(".forecast-icon3").innerHTML = `<i class="wi wi-sandstorm"></i>`

      }

      let forecasteIcon4 = data.list[24].weather[0].main;
      if (forecasteIcon4 == "Clear") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-day-sunny"></i>`

      } else if (forecasteIcon4 == "Partly Cloudy") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-day-cloudy"></i>`

      } else if (forecasteIcon4 == "Partly Cloudy") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`

      } else if (forecasteIcon4 == "Clouds") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-cloud"></i>`

      } else if (forecasteIcon4 == "Mostly Cloudy") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-cloudy"></i>`

      } else if (forecasteIcon4 == "Scattered Showers") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-showers"></i>`

      } else if (forecasteIcon4 == "Rain") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-rain"></i>`

      } else if (forecasteIcon4 == "Thunderstorm") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-thunderstorm"></i>`

      } else if (forecasteIcon4 == "Snow") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-snow"></i>`

      } else if (forecasteIcon4 == "Smoke") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-windy"></i>`

      } else if (forecasteIcon4 == "Haze") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-dust"></i>`

      } else if (forecasteIcon4 == "Storm") {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-sandstorm"></i>`

      } else {
        document.querySelector(".forecast-icon4").innerHTML = `<i class="wi wi-sandstorm"></i>`

      }

      let forecasteIcon5 = data.list[32].weather[0].main;
      if (forecasteIcon5 == "Clear") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-day-sunny"></i>`

      } else if (forecasteIcon5 == "Partly Cloudy") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-day-cloudy"></i>`

      } else if (forecasteIcon5 == "Partly Cloudy") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`

      } else if (forecasteIcon5 == "Clouds") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-cloud"></i>`

      } else if (forecasteIcon5 == "Mostly Cloudy") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-cloudy"></i>`

      } else if (forecasteIcon5 == "Scattered Showers") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-showers"></i>`

      } else if (forecasteIcon5 == "Rain") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-rain"></i>`

      } else if (forecasteIcon5 == "Thunderstorm") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-thunderstorm"></i>`

      } else if (forecasteIcon5 == "Snow") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-snow"></i>`

      } else if (forecasteIcon5 == "Smoke") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-windy"></i>`

      } else if (forecasteIcon5 == "Haze") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-dust"></i>`

      } else if (forecasteIcon5 == "Storm") {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-sandstorm"></i>`

      } else {
        document.querySelector(".forecast-icon5").innerHTML = `<i class="wi wi-sandstorm"></i>`

      }
    },
    error: function (err) {
      alert(data);
    }
  });
}
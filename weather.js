let updateWidget = function(data) {
    console.log("data", data);
    let currentTemp = data.main.temp.toFixed(0)
    document.getElementById("card-text").innerHTML = "It is " + currentTemp + " degrees outside";
    let currentCity = data.name
    document.getElementById("card-title").innerHTML = currentCity;
    let currentWeatherIcon = data.weather.icon
    document.getElementById("currentWeatherIcon").innerHTML = "http://openweathermap.org/img/w/" + currentWeatherIcon + ".png";

};
      let getWeather = function(info) {
      console.log(info)
      window.myInfo = info
      let latitude = info.coords.latitude.toFixed(4);
      let longitude = info.coords.longitude.toFixed(4);
      let apiKey = 'd146ab33e1eb5fdc41051c7728dc79e1'; // REPLACE THIS VALUE with your own key.

      let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
      weatherServiceURL += 'lat=' + latitude
      weatherServiceURL += '&lon=' + longitude
      weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

      fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
  };
      let currentLocation = function(event) {
      console.log ("Starting handlePostion")
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(getWeather);
      console.log ("Ending handlePostion")
    }
// HINT:
// Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
// The very last part ('01d.png') should be obtained from the weather information.

$("#get_forecast").on("click", currentLocation)

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }

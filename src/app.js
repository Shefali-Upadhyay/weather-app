const getWeather = () => {
  let cityName = $('#cityName').val();
  let apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&mode=json&units=metric&appid=d568dc579415266146ede4b4f9de029b';
  $.getJSON(apiCall, (weatherData) => {
    let cityName = weatherData.name;
    let countryName = weatherData.sys.country;
    let description = weatherData.weather[0].description;
    let tempMin = weatherData.main.temp_min;
    let tempMax = weatherData.main.temp_max;
    $("#city").text(cityName);
    $("#detail").text(description);
    $("#country").text(countryName);
    $("#mintemp").html(`Minimum: ${tempMin}<span>&#8451;</span>`);
    $("#maxtemp").html(`Maximum: ${tempMax}<span>&#8451;</span>`);
  });
  dateTime();
}

$('.search').click(getWeather);
document.querySelector('#cityName').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather();
  }
});

function dateTime()
{
  let d_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let d = new Date();
  let curr_day = d.getDay();
  let curr_date = d.getDate();
  let sup = "";
  switch(curr_date)
  {
    case 1||21||31: sup="st";
      break;
    case 2||22: sup="nd";
      break;
    case 3||23: sup="rd";
      break;
    default: sup="th"
      break;
  }
  let curr_month = d.getMonth();
  let curr_year = d.getFullYear();

  let curr_hour = d.getHours();
  let curr_min = d.getMinutes();
  let curr_sec = d.getSeconds();


  document.getElementById("time").innerHTML = `${d_names[curr_day]} ${curr_date}<SUP>${sup}</SUP> ${m_names[curr_month]} ${curr_year}<br><br>${curr_hour}:${curr_min}:${curr_sec}`
}
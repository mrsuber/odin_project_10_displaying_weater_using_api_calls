//function to hit api and return json data

async function requestWeatherData(){
  const place = "buea"
  const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q='+place)

  const responseData = await response.json()
  console.log(responseData)

}

requestWeatherData()

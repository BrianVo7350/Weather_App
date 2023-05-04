const container = document.querySelector('.container')

 async function getWeather(city_name) {
    
    const ApiKey = `313afe2acdc11ee8aa3dc2483da459dd`
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${ApiKey}`);
    try {
      const res = await axios.get(url)
      console.log(res.data)
      showWeather(res.data)
    } catch(error) {
      console.log(error)
    }
};

function showWeather(data) {
    console.log("HERE I AM")
          
    let forecast = data.weather[0].description
    let max = data.main.temp_max
    let min = data.main.temp_min
    let humidity = data.main.humidity

    console.log(forecast, max, min, humidity)

    document.getElementById('forcast').innerHtml=forecast
    document.getElementById('max').innerHtml=max
    document.getElementById('min').innerHtml=min 
    document.getElementById('humidity').innerHtml=humidity
   }



const form = document.querySelector('.searchBar');
form.addEventListener('submit', (e) => {
  console.log("HERE I AM ONCE AGAIN")
  e.preventDefault()
  let city_name = document.getElementById('city_name')
  console.log(city_name.value)
  getWeather(city_name.value)
});

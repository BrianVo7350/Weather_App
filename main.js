const weather = async (city) => {
    e.preventDefault();
    const weatherInfo = e.target.id.value;

    // Dont know if I need these yet
    // const max = e.target.main.temp_max;
    // const min = e.target.main.temp_min;
    // const humidity = e.target.main.humidity;
    // const forecast = e.target.weather.description;

    //url needs to be changed to find certain things if not working
    const url = (`https://openweathermap.org/current?/${id}`);

    const res = await fetch(url)
    const data = await res.json();

    render(data)
};

const render = (data) => {
    container.innerHTML = ' '
    let newHtml;
    if(data) {
        const weather = data
        newHtml = document.createElement('div')
        newHtml.innerHtml = `
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">LOCATION ${id}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">FORECAST ${weather.description}</li>
    <li class="list-group-item">MAX TEMP ${main.temp_max}</li>
    <li class="list-group-item">MIN TEMP ${main.temp_min}</li>
    <li class="list-group-item">HUMIDITY ${main.humidity}</li>
  </ul>
</div>
`
    } else {
        newHtml = document.createElement('h2')
        newHtml.innerText = 'That is not a city'
    }
    container.append(newHtml)
}

const form = document.querySelector('.searchBar');
form.addEventListener('submit', weather)

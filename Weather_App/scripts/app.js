const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const placeClass = document.querySelector('img.place');
const icon = document.querySelector('.icon img');

const updateUI = (data) =>{
    const cityDeets = data.cityDeets;
    const weather = data.weather
    console.log(data)
    //above is also a candidate for destructuring

    details.innerHTML = `
    <h5 class="my-3">${cityDeets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>temp</span>
      <span>${weather.Temperature.Metric.Value}&deg;C</span>
    </div>`

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)


    let placeSource = 'img/Continents/default.jpg';
    const ID = cityDeets.Region.ID

    if(ID === 'AFR' | ID === 'ASI' | ID === 'CAC' | ID === 'EUR' | ID === 'MEA' | ID === 'NAM' | ID === 'OCN' | ID === 'SAM'){

    placeSource = `img/Continents/${ID}.jpg`
    placeClass.setAttribute('src',placeSource)} 

    else {
    placeClass.setAttribute('src',placeSource)
    };

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {

    const cityDeets = await getCity(city);
    const weather = await getWeather(cityDeets.Key)

    return {
        cityDeets: cityDeets,
        weather: weather,
    };
    //returns object with both parts of data
    //you could use object shorthand notation here if you wanted if property and value names are the same
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();

    cityForm.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

});
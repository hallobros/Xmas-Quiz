//note that the order of script tags affects which functions you can call in other js scripts

const key = 'pDWnSqqnzlIaJmyrSewc2hBb0uVZSmwy'

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query);
    const CityData = await response.json();

    return CityData[0];
    //data is an array of string matches to search query as some cities are twinned elsewhere around worl,
    //accessing first value in array gets the top match 


};

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const add2base = `${id}?apikey=${key}`;
    
    const response = await fetch(base + add2base)
    const CurrentWeather = await response.json();

    return CurrentWeather[0]

};

//remember that async functions return promises
// getCity('london').then(CityData => {
//     return getWeather(CityData.Key);
// }).then(CurrentWeather => {
//     console.log(CurrentWeather);})
// .catch(err => console.log(err))


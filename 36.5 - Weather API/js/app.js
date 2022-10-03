const temperature = document.getElementById('temp');
const cityName = document.getElementById('cityName');
const cloudImg = document.getElementById('cloudImg');
const weatherFiled = document.getElementById('weatherFiled');
const lead = document.querySelector('.lead');

const API_KEY = '9677087039bfacc5487628c7169da204';

const loadTemperature = async city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const weatherUpdate = await res.json();
    uiInitial(weatherUpdate)

}

const uiInitial = cityWeather =>{
    console.log(cityWeather)
    
    temperature.innerText = cityWeather.main.temp;
    cityName.innerText = cityWeather.name;
    cloudImg.src = `https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@4x.png`;
    lead.innerText = cityWeather.weather[0].main
}

document.getElementById('updateBtn').addEventListener('click', ()=>{
    const weatherFiledValue = weatherFiled.value;
    loadTemperature(weatherFiledValue);
    weatherFiled.value = '';
})

loadTemperature('dhaka')



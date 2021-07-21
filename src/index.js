import './styles.css';
import searchIcon from './img/search.svg';
import tempMeassure from './constructor.js';

const apiToken = 'insert API key here';

let searchInp = {};

const container = document.getElementById('container');
container.classList.add('container');

const searchbox = document.createElement('div');
searchbox.classList.add('rounded', 'shadow', 'p-3', 'd-flex',
  'flex-column', 'align-items-center', 'mt-3', 'bg-opacy', 'position-relative');
container.appendChild(searchbox);

const checkcontainer = document.createElement('div');
checkcontainer.classList.add('form-check', 'form-switch', 'p-0',
  'd-flex', 'align-items-center', 'tempToggle');
searchbox.appendChild(checkcontainer);

const farenlabel = document.createElement('p');
farenlabel.classList.add('m-0', 'p-0', 'text-white');
farenlabel.textContent = 'F°';
checkcontainer.appendChild(farenlabel);

const checktempInp = document.createElement('input');
checktempInp.type = 'checkbox';
checktempInp.classList.add('m-0', 'form-check-input', 'mx-1');
checkcontainer.appendChild(checktempInp);

const degreeslabel = document.createElement('p');
degreeslabel.classList.add('m-0', 'p-0', 'text-white');
degreeslabel.textContent = 'C°';
checkcontainer.appendChild(degreeslabel);

const formlabel = document.createElement('label');
formlabel.classList.add('form-label', 'text-white');
formlabel.textContent = 'Enter city name';
searchbox.appendChild(formlabel);

const formContainer = document.createElement('div');
formContainer.classList.add('p-2', 'form-container');
searchbox.appendChild(formContainer);

const cityInp = document.createElement('input');
cityInp.classList.add('form-control', 'cityInp');
cityInp.placeholder = 'Enter city name';
formContainer.appendChild(cityInp);

const searchBtn = document.createElement('button');
searchBtn.classList.add('btn', 'btn-outline-dark');
searchBtn.innerHTML = `<img class="searchbuttonicon" src="${searchIcon}">`;
formContainer.appendChild(searchBtn);

const loadingbox = document.createElement('div');
loadingbox.classList.add('p-3', 'd-none');
searchbox.appendChild(loadingbox);

const loadinanim = () => {
  loadingbox.innerHTML = `<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`;
};

const resultBox = document.createElement('div');
resultBox.classList.add('rounded', 'bg-light-opacy', 'mt-2', 'p-0', 'shadow');
container.appendChild(resultBox);

const getSTemp = (Stemp) => {
  let ans = 'test';
  if (tempMeassure.temp === true) {
    ans = `${Math.floor(Stemp - 273)}°C`;
  } else {
    ans = `${Math.floor(((Stemp - 273) * (9 / 5)) + 32)}°F`;
  }
  return ans;
};

const showResults = (weatherBlock) => {
  resultBox.innerHTML = '';
  resultBox.innerHTML += `<div class=" bg-dark-opacy m-0 rounded-top d-flex justify-content-center align-items-center">
        <h1 class="text-white text-center title">${weatherBlock.sys.country} - ${weatherBlock.name}</h1>
        <p class="text-muted fs-1 m-0">(${weatherBlock.weather[0].main})</p>
    </div>
    <div class="row m-0 p-0">
        <div class="col-6 p-4 d-flex flex-row justify-content-center">
            <div class="${weatherBlock.weather[0].main} weatherImg"></div>
            <p class="temp m-0 p-0">${getSTemp(weatherBlock.main.temp)}</p>
        </div>
        <div class="col-6 p-3">
            <div class="border-start p-3">
            <p class="text-white fs-3">Feels like: ${getSTemp(weatherBlock.main.feels_like)}</p>
            <p class="text-white fs-3">Min-Max Temp: ${getSTemp(weatherBlock.main.temp_min)} - ${getSTemp(weatherBlock.main.temp_max)}</p>
            <p class="text-white fs-3">Humidity: ${weatherBlock.main.humidity}%</p>
            <p class="text-white fs-3">Pressure: ${weatherBlock.main.pressure} Pas</p>
            </div>
        </div>
    </div>`;
};

const errorFound = (error) => {
  loadingbox.classList.remove('d-none');
  loadingbox.innerHTML = `<div>
    <span class="text-white fs-">${error}</span>
    </div>`;
};

const getWeather = async (city, location) => {
  try {
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiToken}`;
    if (city === '') {
      apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiToken}`;
    }
    const response = await fetch(apiUrl);
    const catData = await response.json();
    showResults(catData);
    searchInp = catData;
  } catch (err) {
    errorFound(`Error city ${city} not found!!`);
  }
  loadingbox.classList.add('d-none');
};

searchBtn.onclick = () => {
  loadinanim();
  loadingbox.classList.remove('d-none');
  getWeather(cityInp.value, '');
  cityInp.value = '';
};

tempMeassure.load();

checktempInp.onclick = () => {
  tempMeassure.update(checktempInp.checked);
  showResults(searchInp);
};

const loadMeassure = () => {
  checktempInp.checked = tempMeassure.temp;
};

loadMeassure();

const glocation = (gloc) => {
  getWeather('', gloc);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(glocation);
} else {
  errorFound('Error user coordinates not found!!');
}

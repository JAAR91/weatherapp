import './styles.css';
import searchIcon from './img/search.svg';

const apiToken = '48cadb81651cd163e32a09db006ac294';

const container = document.getElementById('container');
container.classList.add('container');

const searchbox = document.createElement('div');
searchbox.classList.add('rounded', 'shadow', 'p-3', 'd-flex', 'flex-column', 'align-items-center', 'mt-3', 'bg-opacy');
container.appendChild(searchbox);

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

const showResults = (weatherBlock) => {
  resultBox.innerHTML = '';
  resultBox.innerHTML += `<div class=" bg-dark-opacy m-0 rounded-top d-flex justify-content-center align-items-center">
        <h1 class="text-white text-center title">${weatherBlock.sys.country} - ${weatherBlock.name}</h1>
        <p class="text-muted fs-1 m-0">(${weatherBlock.weather[0].main})</p>
    </div>
    <div class="row m-0 p-0">
        <div class="col-6 p-4 d-flex flex-row justify-content-center">
            <div class="${weatherBlock.weather[0].main} weatherImg"></div>
            <p class="temp m-0 p-0">${Math.floor(weatherBlock.main.temp - 273)}°</p>
        </div>
        <div class="col-6 p-3">
            <div class="border-start p-3">
            <p class="text-white fs-3">Feels like: ${Math.floor(weatherBlock.main.feels_like - 273)}°</p>
            <p class="text-white fs-3">Min/Max Temp: ${Math.floor(weatherBlock.main.temp_min - 273)}°/${Math.floor(weatherBlock.main.temp_max - 273)}°</p>
            <p class="text-white fs-3">Humidity: ${weatherBlock.main.humidity}%</p>
            <p class="text-white fs-3">Pressure: ${weatherBlock.main.pressure} Pas</p>
            </div>
        </div>
    </div>`;
};

const errorFound = () => {
  loadingbox.classList.remove('d-none');
  loadingbox.innerHTML = `<div>
    <span class="text-white fs-">Error country name not found!!!</span>
    </div>`;
};

const getWeather = async (city) => {
  try {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiToken}`;
    const response = await fetch(apiUrl);
    const catData = await response.json();
    showResults(catData);
  } catch (err) {
    errorFound();
  }
};

searchBtn.onclick = () => {
  loadinanim();
  loadingbox.classList.remove('d-none');
  getWeather(cityInp.value);
  cityInp.value = '';
  loadingbox.classList.add('d-none');
};

getWeather('new york');
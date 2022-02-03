const API_KEY = "53cc7feda691962d277e1c97ffb1feb8";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText= `${data.weather[0].main} / ${data.main.temp} `;
        }); //바로 일어나지 않고 잠시 뒤에 일어나는 것,

}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator
    .geolocation
    .getCurrentPosition(onGeoOk, onGeoError)

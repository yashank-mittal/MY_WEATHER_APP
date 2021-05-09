// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "2763ca42ad0f6ca4f62a6db68204ca63",
    baseurl:  "https://api.openweathermap.org/data/2.5/weather"
}

const input = document.getElementById('input');
input.addEventListener('keypress',(e) => {
    if(e.keyCode == 13){
        console.log(input.value);
        getweatherreport(input.value)
        document.querySelector('#wheatherbody').style.display = 'block';
        input.value = "";
    }
});

function getweatherreport(city){
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json()
    }).then(showweatherreport);
}

function showweatherreport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;
    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;
    let minmaxtemp = document.getElementById('min-max');
    minmaxtemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
    let weathertype = document.getElementById('wheather')
    weathertype.innerText = `${weather.weather[0].main}`;
    let date = document.getElementById('date');
    let todaydate = new Date();
    date.innerText = datemanage(todaydate)

    if(weathertype.textContent == "Clouds"){
        document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1606974914213-6b0ae1b37230?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
    }
    else if(weathertype.textContent == "Rain"){
        document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1485797460056-2310c82d1213?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdlYXRoZXIlMjByYWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
    }else if(weathertype.textContent == "Haze"){
        document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1553166273-94a88f4be8ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlciUyMGhhemV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
    }else if(weathertype.textContent == "Snow"){
        document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1558449033-fdc1c2839a66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYXRoZXIlMjBzbm93fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
    }else if(weathertype.textContent == "Thunderstorm"){
        document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1506432734318-4bf212257692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdlYXRoZXIlMjByYWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
    }else if(weathertype.textContent == "Clear"){
        document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1591276126423-681331afd114?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
    }

}


function datemanage(datearg){
    let days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    let months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
    let year = datearg.getFullYear();
    let date = datearg.getDate();
    let day = days[datearg.getDay()];
    let month = months[datearg.getMonth()];

    return `${date} ${month} (${day}), ${year}`;
}


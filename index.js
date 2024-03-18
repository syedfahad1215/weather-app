let getCity = document.querySelector('#searchInput');
        getCity.addEventListener('keypress', function(e){
            if (e.key === 'Enter') {
               checkWeather(e.currentTarget.value)
            }
        });
        
        const onClickBtn = document.querySelector('#searchIcon');
        onClickBtn.addEventListener('click',()=>{
            checkWeather(getCity.value)
        })

        const weatherCondition = (data) =>{
            
            if(data.weather[0].main == "Clouds"){
                document.querySelector('.weather-image').src ="clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                document.querySelector('.weather-image').src ="clear.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                document.querySelector('.weather-image').src ="drizzle.png"
            }
            else if(data.weather[0].main == "Mist"){
                document.querySelector('.weather-image').src ="mist.png"
            }
            else if(data.weather[0].main == "Rain"){
                document.querySelector('.weather-image').src ="rain.png"
            }
            else if(data.weather[0].main == "Snow"){
                document.querySelector('.weather-image').src ="snow.png"
            }

        }



        const key ='cebdb9877bbbd444169feccb9a67c9f8'
        const api = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='

        const checkWeather = async (city)=>{
            try{
            const resp = await fetch(api + `${city}&appid=${key}`);   
            const data = await resp.json();

            const sunriseD = data.sys.sunrise;

            const sunsetD = data.sys.sunset;

            document.querySelector('.temp').innerHTML = data.main.temp+`<sup>°c </sup>`;
            document.querySelector('.city').innerHTML = data.name +', '+ data.sys.country;
            document.querySelector('.humidity').innerHTML = data.main.humidity;
            document.querySelector('.wind').innerHTML = data.wind.speed+' km/h';
            console.log(data)
            weatherCondition(data);

        } catch (error) {
        console.log(error);
        alert(error+" not found!!!")
    }
        }
        checkWeather('hyderabad');

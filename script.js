
    // Define the URLs for fetching weather data for the 4 cities
    let urlLondon='https://api.openweathermap.org/data/2.5/weather?q=London&appid=d57a3245249fec2cb7fd95b23285eaa4&units=metric&lang=he';
    let urlNewYork='https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=d57a3245249fec2cb7fd95b23285eaa4&units=metric&lang=he';
    let urlAlaska='https://api.openweathermap.org/data/2.5/weather?q=Alaska&appid=d57a3245249fec2cb7fd95b23285eaa4&units=metric&lang=he';
    let urlEilat='https://api.openweathermap.org/data/2.5/weather?q=Eilat&appid=d57a3245249fec2cb7fd95b23285eaa4&units=metric&lang=he';

    // function to fetch and display weather data for the 4 cities
    function cityWeather(url, tempId, feelsLikeId, humidityId, descriptionId, imgId){
        fetch(url) // Fetch weather data from the API
        .then(res => {
           return res.json() // Convert the response to JSON format
        })
        .then(data => {
            // Extract the weather data from the Json data
            let temp=data.main.temp;
            let feelsLike=data.main.feels_like;
            let humidity= data.main.humidity;
            let description= data.weather[0].description;
            // Update the HTML elements with the weather data
            document.getElementById(tempId).textContent= temp+'°C';
            document.getElementById(feelsLikeId).textContent= feelsLike+'°C';
            document.getElementById(humidityId).textContent= humidity+'%'; 
            document.getElementById(descriptionId).textContent= description; 
            // Determine the appropriate weather image based on the feels- like temperature
            let imageWeather;
            if(feelsLike<=20){
                imageWeather='Snowflake Emoji.png';// Cold 
            }
            else if(feelsLike>=30){
                imageWeather='The Sun Emoji.png';// Hot
            }else{
                imageWeather='Cloud Emoji.png'; // Pleasant
            }
            // Update the image with the selected weather image
            document.getElementById(imgId).src=imageWeather;
    
        })
        .catch(err => {
            console.error('Error:', err);
        })  
    }
    // Fetch and display weather data for each city
    cityWeather(urlLondon,'temp-london','feels_like-london','humidity-london','description-London','img-london');
    cityWeather(urlNewYork, 'temp-new-york', 'feels_like-new-york', 'humidity-new-york', 'description-new-york', 'img-new-york');
    cityWeather(urlAlaska, 'temp-alaska', 'feels_like-alaska', 'humidity-alaska', 'description-alaska', 'img-alaska');
    cityWeather(urlEilat, 'temp-eilat', 'feels_like-eilat', 'humidity-eilat', 'description-eilat', 'img-eilat');
    




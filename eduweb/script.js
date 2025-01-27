const apiKey="e8c642b4f4a6677cc1113b78fbf70bd3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox =document.querySelector(".search input");  
const searchBtn =document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const res = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(res.status ==404){
        alert("please enter valid city name");
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data =await res.json()
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +" °C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
    
       if(data.weather[0].main =="Clouds"){
          weatherIcon.src ="/images/cloud.jpeg"
       }
        else if(data.weather[0].main =="Clear"){
        weatherIcon.src ="/images/clear.jpeg"
      }
       else if(data.weather[0].main =="Rain"){
        weatherIcon.src ="/images/water-drops.jpg"
      }
       else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src ="/images/drizzle.png"
      }
      else if(data.weather[0].main =="Mist"){
        weatherIcon.src ="/images/mist.jpeg"
      }
     
      document.querySelector(".weather").style.display="block";
      document.querySelector(".error").style.display="none";
    }
    
}

searchBtn.addEventListener("click" ,()=>{
    checkWeather(searchBox.value);
})

import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ShowWeather= ({weather}) => {
    let temp = weather.main ? weather.main.temp : ""
    let wind = weather.wind ? weather.wind.deg : ""
    const icon = weather.weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`  : ""
    console.log(icon)
    const directionTerms = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West']
    const index = Math.round(((wind %= 360) < 0 ? wind+ 360 : wind) / 45) % 8;
    const directions = directionTerms[index]



    
   

  return (

      <div>
<b>Temperature: {temp} </b>
<br></br>
    <img src={icon}
    />
    <br></br>
    <b>wind</b>: {wind} km direction {directions}
      </div>

  )

    

}


const Weather = ({country}) => {
    const [weather, setWeather] = useState([])
    
    console.log(weather.wind ? weather.wind.deg : "")
    const api_key = process.env.REACT_APP_API_KEY
    const capital = country.capital
   


   
    

 

    const hook = () =>  {
        console.log("weather effect")
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
        .then(response => {
           
            console.log('promise fufilled')
            setWeather(response.data)
        })
       

    }
            useEffect(hook, [])
            
      

    
    

            return (
                <div>
          <h3>Weather in {capital}</h3>
          <ShowWeather weather={weather} />
       
         
          
          

                </div>
               
            )
    

}

export default Weather
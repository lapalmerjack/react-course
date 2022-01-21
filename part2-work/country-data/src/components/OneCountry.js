import React from 'react'
import Weather from './Weather'


const OneCountry =({countries}) => {
  console.log(countries.length)
    const oneCountry = countries[0]
    console.log(oneCountry)
    const languages = oneCountry.languages

    
  
        return (
            <div>
            <h1>{oneCountry.name}</h1>
            <br></br>
            capital {oneCountry.capital}
            <br></br>
            population {oneCountry.population}
            <br></br>

            <h2>language</h2>
            <ul>
                {languages.map(language => 
                    <li key={languages.indexOf(language)}>
                        {language.name}
                    </li>
                )}
            </ul>
            <img src= {oneCountry.flags.png} width="150" height="100" />

            <Weather country={oneCountry} />

    
        
        </div> 

        )
    

    
}

export default OneCountry
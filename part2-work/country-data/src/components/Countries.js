import React, {useState} from 'react'
import OneCountry from './OneCountry'
import ShownCountry from './ShownCountry'


const Button = (props) => {
    <button onClick={props.handleClick}>
        {props.text}
    </button>
}


const ShowCountry = (props) => {
    console.log(props.country)

    if(props.country.length < 1) {
       
        return (
            <div></div>
        )
    } else {
       
        console.log('In here', props.country)
        
        
        return(
            
            <ShownCountry countries={props.country} />
           
        )

    }

   
    

}





const Countries = ({countries}) => {
 const [country, setCountry] = useState([])

 console.log(country)





    return (
        <div>
            <ul>
                {countries.map(country => 
                    <li key= {countries.indexOf(country)}>
                        {country.name}
                        <button onClick={() => setCountry(country)}>
                            show
                            </button>
                    </li>)}
            </ul>

            <ShowCountry country={country} />
        </div>
    )
    
}


export default Countries
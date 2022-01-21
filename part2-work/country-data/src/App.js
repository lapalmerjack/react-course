import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'
import OneCountry  from './components/OneCountry'


const CountrySearch = ({countries}) => {

  if(countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  
  } else if (countries.length < 11 && countries.length > 1) {
    return (
      <div>
      <Countries countries={countries} /> 
      </div>
       
    )
    
  } else  if (countries.length === 1) {
    return (

      <div>
        <OneCountry countries={countries} />
      </div>
     
    ) 
    
  }  else {
    return (
      <div>
      </div>
    )
  }


}


const App = () => {
const [initialState, setInitialState] = useState([])
const [countries, setCountries] = useState([])

const hook = () => {
  console.log('effect')
  axios
  .get('https://restcountries.com/v2/all')
  .then(response => {
    console.log(response)
    console.log('promise fufilled')
    setInitialState(response.data)

  })
}

useEffect(hook, [])






  return (
    <div>
      <Filter countries={initialState} setCountries={setCountries} />

      <CountrySearch countries={countries} />

    </div>
  )
}

export default App;

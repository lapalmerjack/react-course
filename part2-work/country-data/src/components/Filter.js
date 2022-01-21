import React, { useState } from 'react'


const Filter = ({countries, setCountries, initialState}) => {
   
const [search, setSearch] = useState('')

    const handleSearch = (event) => {
        const word = event.target.value
        if(word !== '') {
         const results = countries.filter((country) => {
             return country.name.toLowerCase().includes(event.target.value.toLowerCase())
         });

            console.log(results)
            setCountries(results)
        } else {
            setCountries([])
        }

        setSearch(event.target.value)


    }
    return (
        <div>
          find countries  <input type="search" 
            value = {search}
            onChange={handleSearch}
            className='input'
            placeholder="search"
            />
        </div>
    )
}



export default Filter
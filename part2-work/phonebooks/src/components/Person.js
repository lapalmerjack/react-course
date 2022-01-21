import React from 'react'

const Person = ({persons, handleDelete}) => {

    const label = 'delete'
return (
    <div>
        
     <li>{persons.name} {persons.number}
     <button onClick={handleDelete}>{label}</button>
      </li>
      
    </div>
)
}

export default Person

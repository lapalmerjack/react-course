import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import numberService from './services/numberService'

const Notification =({ message }) => {


  if(message === null) {
    return null;
  }

  return (
    <div className='info' >
      {message}
    </div>

  )

} 

const App = () => {
  const [initial, setInitial] = useState([])
  const [persons,setPersons] = useState([])
  const [newInfo, setNewInfo] = useState(null)

  const hook = () => {
    console.log('effect')

    numberService
      .getAll()
      .then(initialPersons => {
        setInitial(initialPersons)
        setPersons(initialPersons)
      })
 

}

useEffect(hook, [])

const handleDeleteOf = id => {
  const person = persons.find(n => n.id === id)
  console.log(person.id)
  
  if(window.confirm(`Delete ${person.name} ?`)) {
    numberService
    .deletion(id)
    .then(
      setInitial(persons.filter(person => id !== person.id)),
      setPersons(persons.filter(person => id !== person.id))
    ).catch(error => {
      setNewInfo(
        `${person.name} was already deleted from the system`
      )
      setTimeout(() => {
        setNewInfo(null)
      }, 3000)

    })
    

 
  

  
  } else {

  }
}

  return (
    <div>
      <Notification message={newInfo} />
      <h2>Phonebook</h2>
     <Filter persons={initial} setPersons={setPersons} />

      <h2>add a new</h2>
     <PersonForm persons={persons} setPersons={setPersons} setNewInfo={setNewInfo} />
      <h2>Numbers</h2>
      <ul>
       {persons.map((person, i) =>
       <Person 
       key={i}
       persons={person}
       handleDelete={() => handleDeleteOf(person.id)}
       />
       )}
      </ul>
    </div>
    
  )
}


export default App

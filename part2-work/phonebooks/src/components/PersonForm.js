import React, { useState } from 'react'
import numberService from '../services/numberService'





const PersonForm = (props) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson =(event) => {
        event.preventDefault()
        if(isValueThere) {
          if(window.confirm(`${newName} is already added to phonebook, replace the old number
          with a new one?`)) {

            const personObject = {
              name : newName,
              number: newNumber,
           
            }
          
              const newPerson = props.persons.find(p => p.name === personObject.name)
              const changedNumber = personObject.number
               
               console.log(newPerson.id, changedNumber, newPerson)
      
               numberService
               .update(newPerson.id, personObject)
               .then(returnedPerson => {
                 console.log(returnedPerson)
                 props.setPersons(props.persons.map(person => 
                  person.id != newPerson.id ? person : returnedPerson ))
      
               })

               props.setNewInfo(`${newPerson.name}'s phone number is now ${changedNumber}`)

               setTimeout(() => {
                props.setNewInfo(null)
              }, 5000)

          setNewName('')
          setNewNumber('')
        

              }  else {

              }

          
        } else {
    
          const personObject = {
            name : newName,
            number: newNumber,
         
          }
          

          console.log(personObject)

          numberService
          .create(personObject)
          .then(newPersonObject => {
            console.log(newPersonObject)
            props.setPersons(props.persons.concat(newPersonObject))
          })



          props.setPersons(props.persons.concat(personObject))
          props.setNewInfo(`Added ${personObject.name}`)

          setTimeout(() => {
           props.setNewInfo(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
    
        }
    
      }
      
       

      const isValueThere = props.persons.find(person => person.name ===
        newName)

    const handlePersonChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
       
      }
    
      const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
       
      }

      return (
          <div>
            <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handlePersonChange} />
          <br></br>
          number: <input value={newNumber}
          onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
          </div>
      )



}


export default PersonForm



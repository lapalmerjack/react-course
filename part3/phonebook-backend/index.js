const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :response-time ms - :res[content-length] - :req[content-length] :body'))



// morgan(':method :url :status :res[content-length] - :response-time ms')


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const generateID = () => {
    const maxID = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0

    return maxID 
  }

  const generateIDForPost = () => {
    const maxID = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0

    return maxID + 1
  }

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on ${PORT}`)
})

const information = {
    info: Number(generateID()),
    date: new Date()
}



app.get('/api/persons', (request, response) => {
    response.json(persons)
})



app.get('/api/info', (request, response) => {
    response.send(`<p> Phonebook has info for ${information.info} <p> <br> ${information.date}`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(id)
  const person = persons.find(n => n.id === id)

  if(person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(id)
   persons = persons.filter(p => p.id !== id)

   response.status(204).end()
})


app.post('/api/persons', (request, response) => {
const body = request.body
console.log(body)
 
  if(!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  
 const exist = persons.find(n => n.name === body.name) ? true : false

 if(exist)
 return response.status(400).json({
   error:"Name must be unique"
 })

  const person = {
    name : body.name,
    number : body.number,
    id : generateIDForPost(),
  }

  persons = persons.concat(person)
  response.json(person)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)


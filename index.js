const express = require('express')
const app = express()
const morgan = require('morgan');
const cors = require('cors')

app.use(cors())

app.use(express.json())

morgan.token('body', function(req, res) {
    return JSON.stringify(req.body)
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.use(express.static('build'))

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
    },
    {
      "id": 5,
      "name": "Maria Mercedez",
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const date = new Date()
  const content = `<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`
  response.send(content)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  return Math.floor(Math.random() * Math.floor(100000));
}

app.post('/api/persons', (request, response) => {  
  const body = request.body  
  console.log("body ", body)

  const samePerson = persons.find(p => p.name === body.name)

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name is missing'
    })
  } else if (!body.number) {
    return response.status(400).json({ 
      error: 'number is missing'
    })
  } else if (typeof samePerson !== 'undefined'){
    return response.status(400).json({ 
      error: `name must be unique, ${body.name} already exists`
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
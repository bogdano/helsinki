import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    if (event.target.value !== '') {
      setShowAll(false)
    } else {
      setShowAll(true)
    }    
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (!persons.map(person => person.name).includes(newName)) {
      setPersons(persons.concat(personObject)) 
    } else {
      alert(`${newName} is already added to the phonebook`)
    }
  }

  return (
    <>
      <h1>Phonebook</h1>
      <Filter searchTerm={searchTerm} handleSearch={handleSearch} />
      <h2>New entry</h2>  
      <PersonForm 
        onSubmit={addName}
        nameInput={newName}
        nameChange={handleNameChange}
        numberInput={newNumber}
        numberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </>
  )
}
export default App
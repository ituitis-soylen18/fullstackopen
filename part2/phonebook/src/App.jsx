import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  const shownPersons =
    filterText === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filterText.toLowerCase())
        );

  const handleInputChange = (setState) => {
    return (event) => setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
    }
    setNewName("");
    setNewNumber("");
  };

  console.log(newName);
  console.log(newNumber);
  return (
    <div onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <Filter
        onChange={handleInputChange(setFilterText)}
        filterText={filterText}
      />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        newNameChange={handleInputChange(setNewName)}
        newNumberChange={handleInputChange(setNewNumber)}
      />
      <h2>Numbers</h2>
      <PersonsList persons={shownPersons} />
    </div>
  );
};

export default App;

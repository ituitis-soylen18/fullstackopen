import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => setPersons(response));
  }, []);

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
      personService
        .create(newPerson)
        .then((response) => setPersons(persons.concat(response)));
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

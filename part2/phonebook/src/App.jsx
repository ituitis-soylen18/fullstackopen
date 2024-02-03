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
      if (
        confirm(
          `${newName} is already added to phonebook,replace the old number with a new one?`
        )
      ) {
        const personId = persons.find((p) => p.name === newPerson.name).id;
        personService
          .update({ ...newPerson, id: personId })
          .then((response) =>
            setPersons(
              persons.map((person) =>
                person.id === response.id ? response : person
              )
            )
          );
      }
    } else {
      personService
        .create(newPerson)
        .then((response) => setPersons(persons.concat(response)));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (person) => {
    if (confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(person)
        .then(setPersons(persons.filter((p) => p !== person)));
    }
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
      <PersonsList persons={shownPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

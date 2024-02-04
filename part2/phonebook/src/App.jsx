import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");
  const [message, setMessage] = useState(["", false]);

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
        setMessage([`Updated ${newName}`, false]);
        setTimeout(() => setMessage(["", false]), 4000);
      }
    } else {
      personService
        .create(newPerson)
        .then((response) => setPersons(persons.concat(response)));
      setMessage([`Added ${newName}`, false]);
      setTimeout(() => setMessage(["", false]), 4000);
    }
    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (person) => {
    if (confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(person)
        .then(setPersons(persons.filter((p) => p !== person)))
        .catch((error) => {
          setMessage(
            [`Information of ${person.name} has aleady been removed from server`, true]
          );
          setTimeout(() => setMessage(["", false]), 4000);
        });
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      {message === "" ? null : <Notification message={message} />}
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

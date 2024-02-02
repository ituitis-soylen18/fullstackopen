const PersonForm = ({ newName, newNumber, newNameChange, newNumberChange }) => {
  return (
    <form>
      <h2>add a new</h2>
      <div>
        name: <input onChange={newNameChange} value={newName} />
      </div>
      <div>
        number: <input onChange={newNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;

const express = require("express");
const app = express();
let data = require("./data.json");

app.use(express.json());

app.get("/api/persons", (request, response) => {
  response.json(data);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = data.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  data = data.filter((data) => data.id != id);
  response.status(204).end();
});

app.get("/info", (request, response) => {
  const date = Date();
  const content = `<div><p>Phonebook has info for ${data.length} people</p> <p>${date}</p></div>`;
  response.send(content);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`);
});

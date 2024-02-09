const express = require("express");
const app = express();
let data = require("./data.json");

app.use(express.json());

app.get("/api/persons", (request, response) => {
  response.json(data);
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  }

  const duplicateName = data.find((person) => person.name === body.name);
  if (duplicateName) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const id = Math.floor(Math.random() * 10000);
  const person = {
    id: id,
    name: body.name,
    number: body.number || "",
  };

  data = data.concat(person);
  response.json(person);
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

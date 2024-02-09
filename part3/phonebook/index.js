const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/api/persons", (request, response) => {
  response.json(data);
});

app.get("/info", (request, response) => {
  const date = Date()
  const content =  `<div><p>Phonebook has info for ${data.length} people</p> <p>${date}</p></div>`
  response.send(content)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`);
});

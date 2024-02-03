import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data);
};

const update = (object) => {
    console.log(object)
  return axios.put(`${baseUrl}/${object.id}`, object).then((response) => response.data);
};

const remove = (object) => {
  return axios
    .delete(`${baseUrl}/${object.id}`, object)
    .then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  remove,
};

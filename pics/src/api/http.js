import axios from "axios";

const getData = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.data);
};

exports.getData = getData;

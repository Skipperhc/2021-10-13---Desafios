const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
const request = require('request');

const args = process.argv.slice(2);

let where = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;


request(`${where}`, (error, response, body) => {

  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);

  if (!data[0]) {

    console.log("Try again: that breed doesn't exist");
    return;
  }


  console.log(data[0].description);
});
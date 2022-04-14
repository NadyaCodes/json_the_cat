const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  let where = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(`${where}`, (error, response, body) => {

    const data = JSON.parse(body);

    const printDesc = (siteDesc) => {
      if (!siteDesc[0]) {
        return "Try again: that breed doesn't exist";
      }
      return siteDesc[0].description;
    };

    callback(error, printDesc(data));

  });

};

module.exports = { fetchBreedDescription };
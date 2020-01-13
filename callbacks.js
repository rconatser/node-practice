const axios = require('axios');

const fetchData = callback => { // goes to setTimeout and grabs the console.log (text) function to print the callback after 1.5 seconds
    setTimeout(() => {
        callback('FetchData is Done');
    }, 1500);
}

setTimeout(() => {
    console.log('Timer is done!'); // prints text after 2 seconds, then proceeds to function fetchData (below)
    fetchData(text => { // Passing the text function into "callback" within fetchData which prints the callback text
        console.log(text);
    })
}, 2000);

console.log('Hello');
console.log('Hi!');

function getSnorlaxData() {
   return axios.get('https://pokeapi.co/api/v2/pokemon/snorlax')
  .then(function ({ data }) {
    // handle success
    console.log(data.stats);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

async function getPikaData() {
    return axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function ({ data }) {
        // handle success
        console.log(data.stats);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

var i = 0;

setInterval( () => {
  console.log(`iteration ${i}`);
  i++;
}, 1000);

async function main() {
    const snorlax = await getSnorlaxData();
    fs.writeFile('snorlax.json', JSON.stringify(snorlax), (err) => {
        if (err) throw err;
        console.log('The file has been saved');
    })
    const pika = await getPikaData();
    console.log(pika);
}

main();
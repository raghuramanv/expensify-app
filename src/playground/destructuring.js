//
// Object Destructuring
//
const person = {
  name: 'Raghuraman',
  age: 32,
  location: {
    city: 'New York',
    temp: 70
  }
};

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;
if(city && temperature){
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holliday',
  publisher: {
    name: 'McGraw Hill'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

//Array Destructuring

const address = ['1259 Mayflower Street', 'Denver', 'Colorado', '84127'];
const [,city,state] = address;
console.log(`I live in ${city}, ${state}`);

const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];
const [name,,mediumPrice] = item;
console.log(`A medium ${name} costs ${mediumPrice}`)


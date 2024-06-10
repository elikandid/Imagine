const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter Your Full Name.');
    document.getElementById('name').innerText = name;
}

//variables 
const pi = 3.142;
let name = 'Elikem Dogbey';
let age = 219;
let present = false;
console.log(name);

// objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bentley',
    color: 'pink',
    weigh: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Elikem',
        driver: {
            name: 'Dennis'
        }
    }
}

console.log(car.numberplate);
console.log(car.owner.driver.name);
console.log(car);


car.owner.driver.name = 'Dan';
console.log(car.owner.driver.name);

//Arrays
const tweet1 = {
    text: 'I am learning js today.',
    likes:5,
    shares:2,
    retweet:1
  }
  
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes:8,
    shares:3,
    retweet:0
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets;
  
  //Dates
  const today = new Date(); 
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  
  // If/Else
  if(today.getHours() == 16){
   console.log('class has ended!');
  } else{
    console.log('class is in session!');
  }
  
  // for loop
  for(let i = 0; i<= 9; i++) {
    console.log('Notify friends!',i);
  }
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
            name: 'Elikem'
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

  // Functions
//Defining functions
function login(username, password) {
  if (username == 'Elikem' && password == '1234') {
    return 'User is logged in!';
  } else if (username != 'Elikem') {
    return 'Invalid username';
  } else if (password != '1234') {
    return 'Invalid password';
  } else {
    return 'Invalid username or password!';
  }
}
//Invoking functions
login('Elikem', '124');

//Basic arithmethic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;

//Comparison operators
2 == '2';
2 === '2';
3 !== 2;

//Built in math functions
Math.round(37 / 24);
Math.floor(37 /24);
Math.ceil(37 / 24);
Math.random();
Math.max(12, 14, 202, 89);

// Order of operations
1 * 2 + 3 - 4 / 2 % 2

//Handling user inputs
1200 + number('250');



//String concatenation
const firstname = 'Elikem';
const lastname = ' Dogbey';
firstname.trim() + ' ' + lastname.trim();

//Template Literal
`${firstname.trim()} ${lastname.trim()}`;

//String method
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(0);

//string conversion
String(2014);


//Write a function that will add another participant to our Google Classroom

const participants = [];
function AddParticipant(email) {
  // Check if email was provided
  if (!email) {
    return 'Email not provided!';
  } 
    
  // Check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided!';
  }
  // Add email to the participant;
  participants.push(email);
  //Notify them via mail
  //return response
  return 'Participant added!';
  
}

AddParticipant('edogbey64@gmail.com');


const alphabets = ['A', 'B', 'C', 'D'] ;
alphabets;
alphabets.join(' ');
alphabets.join(' ').split(' ');




// Write a function that will take first name, last name and return full name;

const user = {
  firstname: 'Eli',
  lastname: 'Dogbey'
}

function fullname(user) {
  return  {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
}
 




//Array map
const users = [
  {firstname: 'Linda',lastname:'Parker'},
  {firstname: 'Mark',lastname:'Twaine'},
  {firstname: 'Oliver',lastname:'Queen'},
  {firstname: 'Stephen',lastname:'Grider'} ,
  {firstname: 'Elton',lastname:'Musk'},

]

users.map(fullname);

 fullname(user);




//Map and return squares of numbers

function square(number) {
  return number ** 2;
} 
const numbers = [0,1,2,3,4,5]
numbers.map(square);
 
// Filter and return even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even);


let userName = 'Manasseh';

//Using ternary expression to check userName
userName ? console.log(`Hello '${userName}'`) : console.log('Hello!');

//Variable storing question the user would ask 
let userQuestion = '';

//Displaying user's question 
console.log(`${userName} asked: ${userQuestion}`);

//Storing random number between 0 and 7
let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

//Switch statement displaying response based on the random number
switch(randomNumber){
  case 0:
    eightBall = 'My sources say no';
    break;
  case 1:
    eightBall = 'Outlook not so good';
    break;
  case 2:
    eightBall = 'Do not count on it';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Reply hazy try again';
    break;
  case 5:
    eightBall = 'It is decidedly so';
    break;
  case 6:
    eightBall = 'It is certain';
    break;
  default:
    eightBall = 'Signs point to yes';
    break;
}

//Displaying the Magic Eight Ball's answer
console.log(eightBall);

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function myFunction(num) {
  let counter = 0;

  do {
    counter = 0;
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) counter++;
    }
    num++;
  } while (counter > 1);

  return num - 1;
}

/* 
function myFunction( a ) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
 let n = a;
 while (!isPrime(n)) n++;
return n
}
*/

console.log(myFunction(38)); // 41
console.log(myFunction(7)); // 7
console.log(myFunction(115)); // 127
console.log(myFunction(2000)); // 2003

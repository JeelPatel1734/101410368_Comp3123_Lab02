// Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
// and for..of

const greeter = (myArray, counter) => {
    const greetText = 'Hello';
    
    for (const name of myArray) {
      console.log(`${greetText} ${name}`);
    }
  };
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  
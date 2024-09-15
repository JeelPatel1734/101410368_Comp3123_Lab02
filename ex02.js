// Using destructuring assignment syntax and the spread operator, write a function will capitalize the
// first letter of a string.



const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('');
  };
  
  console.log(capitalize('fooBar')); // FooBar
  console.log(capitalize('nodeJs')); // NodeJs
  
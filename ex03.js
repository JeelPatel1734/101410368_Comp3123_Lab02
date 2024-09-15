// Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
// the first character of each Color in the following array.

const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('');
  };
  
  const colors = ['red', 'green', 'blue'];
  
  const capitalizedColors = colors.map(color => capitalize(color));
  
  console.log(capitalizedColors); 
  
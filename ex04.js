// Using array.proto.filter create a function that will filter out all the values of the array that are less
// than twenty

const filterLessThan20 = values => values.filter(value => value < 20);

const values = [1, 60, 34, 30, 20, 5];

console.log(filterLessThan20(values)); 

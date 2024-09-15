// Using array.proto.reduce create calculate the sum and product of a given array

const calculateSum = array => array.reduce((acc, val) => acc + val, 0);

const calculateProduct = array => array.reduce((acc, val) => acc * val, 1);

const array = [1, 2, 3, 4];

console.log(calculateSum(array));    
console.log(calculateProduct(array)); 

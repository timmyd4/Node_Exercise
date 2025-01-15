// 1. Calculate the sum of all numbers in an array (using a loop)

function sumArray(array)
{
    total = 0
    for(let i = 0; i < array.length; i++)
    {
        total += array[i];
    }
    console.log(total); 
}

// Test for sum array
let testArray = [1, 2, 3, 4, 5]; // 15

// TODO: display the sum of the array in the console

sumArray(testArray);
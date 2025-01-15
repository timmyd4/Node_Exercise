// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++)
    {
        if(total < array[i])
        {
            total = array[i];
        }
    }
    console.log(total);

}

// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5

// TODO: display the largest number in the array in the console
findLargest(testArray2);
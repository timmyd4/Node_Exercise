/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput)
{
    let word = "";
    for(let i = textInput.length - 1; i >= 0; i--)
    {
        word = word + textInput[i];
    }

    if(word === textInput)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false
let testString3 = "dammitimmad" // true

// TODO: display the result of the test strings in the console

console.log(checkPalindrome(testString));
console.log(checkPalindrome(testString2));
console.log(checkPalindrome(testString3));

/*
Tim Williams
Nicolaus Butenko

Tuesday 01-14-2025
In Class Assignment

*/
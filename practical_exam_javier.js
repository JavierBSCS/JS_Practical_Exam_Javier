//task1
//a.create variables for your name,age,and your city of recidence
//b.calculate and store the year you were born using your age and the current year.
//c.define a boolean variable that checks if your age is greater than or equal to 18
//d.use arithmetic operators to find the remainder when dividing your age by 5

// a. Create variables for your name, age, and city of residence
let name = "Jessie Jay Javier";
let age = 23;
let city = "Baguio City";

// b. Calculate and store the year you were born
let currentYear = new Date().getFullYear();
let yearBorn = currentYear - age;

// c. Define a boolean variable that checks if your age is greater than or equal to 18
let isAdult = age >= 18;

// d. Use arithmetic operators to find the remainder when dividing your age by 5
let remainder = age % 5;

console.log(name, yearBorn, isAdult, remainder);



//task 2
//a.concatenate your name and city into a sentence using string operators. example "John From New York"
//b.Create a function that accepts a string and returns the string in uppercase
//c.create a function that finds and returns the first occurence of the letter 'a' in any given string
//d.replace all instances of the word "JavaScript" in the following string with "JS": "I am learning JavaScript at School"

// a. Concatenate your name and city into a sentence
let sentence = name + " from " + city;

// b. Create a function that accepts a string and returns it in uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// c. Create a function that finds and returns the first occurrence of 'a'
function findFirstA(str) {
    return str.indexOf('a');
}

// d. Replace all instances of "JavaScript" with "JS"
let originalString = "I am learning JavaScript at School";
let updatedString = originalString.replace(/JavaScript/g, "JS");

console.log(sentence, toUpperCase(sentence), findFirstA(sentence), updatedString);



//task 3
//a.Create an array wityh at least 5 of your favorite foods.
//b.add a new food to the end of the array
//c.remove the second food from the array.
//d.sort the array in alphabetical order
//e.create a function that loops through the array and prints each food on a new line

// a. Create an array with at least 5 of your favorite foods
let favoriteFoods = ['Pizza', 'Adobo', 'Chocolate', 'Burger', 'Sinigang'];

// b. Add a new food to the end of the array
favoriteFoods.push('Siomai');

// c. Remove the second food from the array
favoriteFoods.splice(1, 1); 

// d. Sort the array in alphabetical order
favoriteFoods.sort();

// e. Create a function that loops through the array and prints each food on a new line
function printFavoriteFoods(foods) {
    for (let food of foods) {
        console.log(food);
    }
}

// Call the function to print the foods
printFavoriteFoods(favoriteFoods);





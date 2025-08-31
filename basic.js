// Create an object with ten different element
const myObject = {
    name: "Maxwell",
    age: "40",
    favouriteColor: "white",
    pet: "dog",
    school: "unn",
    level: "300",
    hobby: "football",
    food: "rice",
    sport:"volleyball",
    city: "enugu"
};

// Delete two element
delete myObject.pet;
delete myObject.city;

// Add three element
myObject.favouriteMovie ="head of state";
myObject.favouriteGame ="pool";
myObject.bestfriend ="Godwin";

// Print thr element and length
console.log("My object:", myObject);
console.log("Total Elements:", Object.keys(myObject).length)
// total element =11

// Create an array of 10 different numbers
const numbers = [3, 7, 12, 9, 21, 14, 8, 5, 30, 18];
console.log("Oringinal numbers:", numbers);


// Delete the last two
numbers.pop(18);
numbers.pop(30);
console.log("After removing the last two numbers:", numbers);


// Change into an array of animals
const animals = ["dog", "cat", "fox", "lion", "bear", "zebra", "monkey", "tiger", "elephant", "giraffe"];
console.log("Array:",animals);

// Array of different 10 numbers
const myNumbers = [4, 6, 8, 10, 20, 30, 40, 60, 80, 90];
console.log("Numbers", myNumbers);

// If, else if, else with a creative condition
const score = 70;
 
if (score >=70) {
    console.log("A");
} else if (score >= 50){
    console.log("C");
} else {
    console.log("E");
}
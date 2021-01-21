





//let validDates = d, d2 => d - d2; 



//console.log(validDates)




// accept two valid dates and returns the difference between them



let d = new Date(2021, 10)
let d2 = new Date(2021, 4)


function newDate() {

return d - d2; 

}


console.log(newDate())


//Write a function to reverse a string

let string = ["Sugar", "Flour", "Baking Soda", "Milk"]; 

function reverseString() {

return string.reverse(); 

}

console.log(reverseString())


//Write a function to replace all spaces of the string with underscores




let space = "Hello World!"; 

function spacetoUnderscore() {

return space.replace(" ", "_"); 

}
console.log(spacetoUnderscore())


//write a function which helps to achieve multiply(a)(b) and returns product of a and b 



let a = Math.random() * 100
let b = Math.random() * 1000


function multiplyRandom() {

    return a * b

}
console.log(a, `*`, b, `=`, multiplyRandom())
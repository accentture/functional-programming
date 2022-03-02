/* 
    --in functional programming functions are values like strings or numbers
    --with functional programming we write less code
    --the reason because we use less code is because, it allows us reuse functions all over the place
*/

//creating an annonymus function and assign to an variable
var triple = function(x){
    return x * 3
}

//Just like other value. We can pass it around like this
var waffle = triple
waffle(30)

//-------------------------------------higher order functions 
//--------------------------composition: 
/* 
    --we can put an function between another function as argument , that is higher order function
    --we an put a function between another function, ti allow us to compose a lot of small functions into bigger function
    --probably the most and basic and useful higher-order function is filter
    --function is a function on the array that accepts another function as its argument that return a new filtered version of the array
    --with higher order functions, we broke the problem into two separated problems
    --in JavaScript functions are values and can exploit it dividing your code into small simple functions and composing them together 
 */
var animals = [
    { name:'John', species:'rabbit'},
    { name:'Caro', species:'dog'},
    { name:'Hamilton', species:'dog'},
    { name:'Harold', species:'fish'},
    { name:'Ursula', species:'cat'},
    { name:'Yimmy', species:'fish'},
]
//classic solution
var dogs1 = []
for(let x = 0; x < animals.length; x++){
    if(animals[x].species === 'dog'){
        dogs1.push(animals[x])
    }
}

//solution using filter function
var isDog = function(animal){
    return animal.species === 'dogs'
}

//filter is an higher order function
var dogs2 = animals.filter(isDog)
dogs2

//reject is another higher function //doesn't exist reject
//var otherAnimals = animals.reject(isDog)

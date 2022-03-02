
/* 
    --diferente to filter, map not throw objects, instead it transform them
*/

var animals = [
    { name:'John', species:'rabbit'},
    { name:'Caro', species:'dog'},
    { name:'Hamilton', species:'dog'},
    { name:'Harold', species:'fish'},
    { name:'Ursula', species:'cat'},
    { name:'Yimmy', species:'fish'},
]

//the filter expects that it's callback function to return a true or false that determine whether or not the item should be included in the array
//it return an array

//we can use it to return complete new objects
//we are writtin less code and less code almost always means less bugs
var names1 = animals.map(function(animal){ return animal.name })
var names2 = animals.map((animal) => animal.name) //even less code using arrow funtions
var names3 = animals.map((x) => x.name) //even more shorter
names2

var names4 = []; for(let x = 0; x < animals.length; x++){ names4.push(animals[x].name )}
console.log(names3)


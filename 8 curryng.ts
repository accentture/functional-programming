import *as  _ from 'lodash'

/* 
    --currying is when a function doesn't take all of its arguments upfront, 
    --instead it wants you give it the first argument and then the function return another function which you supossed to call with the second argument which in turn will return a new function which are you supossed to call with the third argument and so on until all arguments have been provided --and then the function at the end of the chain will be the one that returns the value that you actually want
*/

//function not curryied
let dragon1 = (name,size, element) => 
    name + ' is a ' + 
    size + ' dragon that breathes ' + 
    element + '!'
console.log(dragon1('fluffykins', 'tiny','lighting'))



//function curryied
let dragon2 = 
    (name:string) => //internally return another function
        (size:string) => //internally return another function
            (element:string) => //return the final string
                name + ' is a ' + 
                size + ' dragon that breathes ' + 
                element + '!'

console.log(dragon2('fluffykins')( 'tiny')) //it return a function
console.log(dragon2('fluffykins')( 'tiny')('lighting'))

//we can split the calls in parts
const fluffykinsDragon = dragon2('fluffykins')
const tinyDragon = fluffykinsDragon('tiny')             
console.log(tinyDragon('lighting')) //it return a function


//-----------------------------------------------------------------------using lodash
//curry: create a function that accepts arguments
let dragon3 = _.curry(dragon2)
const fluffykinsDragon2 = dragon3('feo')
fluffykinsDragon2
const tinyDragon2 = fluffykinsDragon2('feo')
console.log(tinyDragon2('feo'))





let dragon5 = 
    (name:string) => //internally return another function
        (size:string) => //internally return another function
            (element:string) => //return the final string
                (face:string) => 
                    (wings:string) => 
                        name + ' is a ' + 
                        size + ' dragon that breathes ' + 
                        element + ' and his face is ' +
                        face + ' and his wings is ' + 
                        wings

console.log(dragon5('fluffykins')( 'tiny')('lighting')('ugly')('big'))
//3:40


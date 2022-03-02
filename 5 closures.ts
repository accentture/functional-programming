/* 
    --a closure is a function that can access to a variable defined outside-
    --in JavaScript the functions are closures
    --closure is the mechanism to enable privacy 
*/

var movie = 'Batman'

function showMovie(){
    console.log('The movie is ' + movie)
}
showMovie()
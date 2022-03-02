/* 
    --reduce:
    --it is used to express any list transformation

*/

var orders = [
    {amount:250},
    {amount:400},
    {amount:100},
    {amount:325},
]

//different to map and filter we want an object
var amount1 = orders.reduce(function(sum, order){ return sum + order.amount}, 0) //0:  starting point
var amount2 = orders.reduce((sum, order) =>  sum + order.amount, 0) //0:  starting point
amount2

var amount5 = 0
for(let x = 0; x < orders.length; x++){
    amount5 += orders[x].amount 
}

amount5
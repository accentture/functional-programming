//import fs from 'fs'

var fs = require('fs')
                                         //using common encoding character       
var output  = fs.readFileSync('4 example.txt', 'utf8') //in programming and in the computer, strings are used to long set of lines, it doesn't know to interpret that in text unless it has some kind of mapping to an encoding table a character encoding

        .trim()
        .split('\n')
        .map(line => line.split('  '))
        .reduce((customers, line) => {
            //console.log(customers, line) 
            //line
            customers[line[0]] =  customers[line[0]] || []
            customers[line[0]].push({name:line[1], price:line[2], quantitty:line[3]})
            return customers
        }, {}) //instead of use a number we use an literal object

console.log(output)
        






/* 
    {
        'Mark-Jonhannson':[
            {name: 'waffle iron', price:80, quantitty:2},
            {name: 'blender', price:200, quantitty:1},
            {name: 'knife', price:10, quantitty:4},
        ],
        'Nikita-Smith':[
            { name: 'waffle iron', price:80, quantity:1},
            { name: 'knife', price:10, quantity:2},
            { name: 'pot', price:20, quantity:3},
        ]
    }

*/
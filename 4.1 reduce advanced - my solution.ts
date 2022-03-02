//import fs from 'fs'

var fs = require('fs')
var setData  = fs.readFileSync('4 example.txt', 'utf8') 
    .trim()
    .split('\n')
    .map((row1) => row1.trim('\r'))   
    .map(row2 => {
        const rowSplited = row2.split(' ')
        // console.log(element1.split(' '))
        return rowSplited
    }) 
    .map(row3 => {
        const name = `${row3[0]}-${row3[1]}`
        name
        return {
            // '' + row3[0]-${row3[1]}: []
        }
    })
// var result1 = output.map((line) => )

console.log(setData)

const variable1  = 'adsf\r qewrwer'
const variable2  = 'fasd\r ewrqwer'
variable1
const length1 = variable1.length
const length2 = variable2.length
length1
length2



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
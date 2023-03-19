/* 
    * STREAMS : promise and array having a baby
        - stream is just a way to modelling flow of values that is arriving whenever they feel like
        - another place where streams was gaining atraction is in frontend programming where things such keyboard input or mouse movements or mouse clicks can be modeled as streams of events

        - you touch functions as handlers on the of these streams
        - when we model events (in the frontend side) streams, we get acess to all stream tooling, you can actually have a stream be this adapter that allow use and reuse all those simple functions on both kinds of events

*/

//basic stream implementaion
const stupidNumberStream = {
  each: (callback) => {
    setTimeout(() => callback(10), 1000);
    setTimeout(() => callback(20), 2000);
    setTimeout(() => callback(30), 3000);
    setTimeout(() => callback(40), 4000);
  },
};

// stupidNumberStream.each(console.log);


//the most important with the streams is that we can pass functions in every map function
const fs = require("fs");
const highland = require("highland");

highland(fs.createReadStream("13_theCustomers.csv", "utf-8"))
  .split("")
  .map((line) => line.split(","))
  .map((parts) => ({
    name: parts[0],
    numPurchases: parts[1],
  }))
  .filter((customer) => customer.numPurchases > 2)
  .map((customer) => customer.name)
  .each(console.log);

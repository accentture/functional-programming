/* 
    * Monad
        - it is more powerfull functor
        - it implements flatmap besides fo map
*/

import { Bus } from "baconjs";

const stream = new Bus(); //bus is the most basic type of streaming from bacon.js
    stream.map((word: string) => {
    const uppercasedWord = word.toUpperCase();
    console.log("-----word in map");

    return uppercasedWord;
    })
    .onValue((word) => console.log(word));
stream.push("cat");
stream.push("meal");
stream.push("trumpet");

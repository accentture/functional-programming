/* 
    - functors are method that have a map method
    - for example array is a functor because it has an implementation of map

    - other functors has promises, streams or trees
    - filter is not a functor
    - the reason becuase the community was confused is because in math the functor is a function 

    - the wrong of the past video is that string is not a functor because it can mantain its structure
    - another characteristic to be considered functor, it must to return another functor, that is the reason because we can chain map funtions
*/
import Promise from "bluebird";

type description = { name: string; health: number };
const dragons: description[] = [
  { name: "Fluffykins", health: 70 },
  { name: "Deathlord", health: 65000 },
  { name: "Little pizza", health: 2 },
];

/*
 * Three crucial things that .map method does in order to qualify array as functor
 */
//1. transformation of contents
const names = dragons.map((dragon) => dragon.name);
console.log(names);

let number = 0;
const whenDragonLoaded: any = new Promise((resolve, reject) => {
  // fake loading
  setTimeout(() => {
    resolve(dragons);
    // resolve({ name: "Fluffykins", health: 70 }); //it don't work
  }, 2000);
});

//conclusion: funtional programming is all about breaking problems into tiny super simple functions and then composing those functions together
const res = whenDragonLoaded

  //map() method keep the struecture of original array, if we have 3 elements after use map we will have 3 items already
  //map() method can transform the data type but it doesn't transform the original structure
  .map((dragon: description) => {
    console.log("----------x", dragon.name);
    return dragon.name;
  })
  .then((name: any) => console.log("-----name", name))
  .catch((error: any) => console.log("--error", error));
//min 6:13

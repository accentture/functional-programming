/* 
  * Monads: 
    - monads are things that implement flatMap and promises
    - flatmap has many names as bind,chain, that inside has the same implementation that flatmap


    - promises don't has flatmapt method, therefore it is not flatmap
*/

const fetch = require("node-fetch");
const Bacon = require("baconjs");


//don't use API's google
/* function getInPortuguese(word) {
  // Google Translate API is a paid (but dirt cheap) service. This is my key
  // and will be disabled by the time the video is out. To generate your own,
  // go here: https://cloud.google.com/translate/v2/getting_started
  const apiKey = "AIzaSyB4DyRHIsNhogQXmH16YKbZfR-lTXrQpq0";
  const url =
    "https://www.googleapis.com" +
    "/language/translate/v2" +
    "?key=" +
    apiKey +
    "&source=en" +
    "&target=pt" +
    "&q=" +
    encodeURIComponent(word);
  const promise = fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(
      (parsedResponse) => parsedResponse.data.translations[0].translatedText
    );
  const stream = Bacon.fromPromise(promise);
  return stream;
}
 */
const returnBetweenCurlyBraces = (word) => {
  const promise = new Promise((resolve, reject) => {
    resolve(word + " " + "transformed")
  })
  const stream = Bacon.fromPromise(promise); //it is an event stream
  console.log('-------stream',stream)
  return stream;
  // return { theWord: "theWord" };
};
const stream = new Bacon.Bus();

stream
  .flatMap((word) => returnBetweenCurlyBraces(word)) 
    //flatMap works as map, but it also flatten the streams object to return the values contained within the stream
    //flatMap has the same principle that map with the exception that the callback passed to flatMap returns a Monad of the same type


  .map((word) => word.toUpperCase())
  .onValue((word) => console.log(word));

stream.push("cat");
stream.push("meal");
stream.push("trumpet");

// Output of running this file will be:
// TROMBETA
// REFEIÇÃO
// GATO

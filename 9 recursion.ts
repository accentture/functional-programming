let countDown = (num: number) => {
  if (num === 0) return;
  // console.log(num);
  countDown(num - 1);
};

countDown(10);

//using functional programming
let categories = [
  { id: "animals", parent: null },
  { id: "mammals", parent: "animals" },
  { id: "cats", parent: "mammals" },
  { id: "dogs", parent: "mammals" },
  { id: "chihuahua", parent: "dogs" },
  { id: "labrador", parent: "dogs" },
  { id: "persian", parent: "cats" },
  { id: "siamese", parent: "cats" },
];

/*
convert to this tree
{
    animals: {
        mammals: {
            dogs: {
                chihuahua : null,
                labrador: null
            },
            cats: {
                persian: null
                siamese: null
            }
        }
    }
}
*/


const makeTree = (
  _categories: { id: string; parent: string | null }[],
  parent: string | null
) => {
  let node:any = {};

  _categories
    .filter((c) => c.parent === parent)
    .forEach((c) => {
      node[c.id] = makeTree(_categories, c.id)

      // console.log(node[c.id], c)
    });

  if(Object.keys(node).length === 0) return null

  return node;
};
const res = makeTree(categories, null);

console.log("--res", JSON.stringify(res, null, 2));
//min 12: 20

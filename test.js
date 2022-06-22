// setTimeout(() => {
//   console.log("Hey");
// }, 1000);

// let add = (a, b) => {
//   return String(a + b);
// };
// console.log(typeof add(5, 4));

// function spliceElements(givenArray, element1, element2) {
//   givenArray.splice(givenArray.length - 1, 1, element1, element2);
//   return givenArray;
// }
// var arr = [1, 2, "MIT Certificate", 4, 5];
// console.log(spliceElements(arr, "JavaScript", 101));
function countWords() {
  let text =
    "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";

  let result = text.toLocaleLowerCase();
  let newString = "";
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== "." && result[i] !== ",") {
      newString += result[i];
    }
  }
  let wordArray = newString.split(" ");
}

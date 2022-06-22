let colors = ["red", "blue", "yellow", "green", "purple", "black", "white"];

function showColors(color) {
  console.log(color);
}

colors.forEach((color) => showColors(color));

console.log("--------------------");

colors.forEach((elem) => {
  console.log(elem);
});

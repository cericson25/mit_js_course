let counter = 10;
function countDown() {
  if (counter > 0) {
    console.log(counter);
    counter *= 2;
  }
}
let multiplier = setInterval(countDown, 500);
clearInterval(multiplier, 5000);

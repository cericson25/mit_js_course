let years = [1996, 2000, 1998, 2006, 1989, 2013];

function isGenZ(testicle) {
  if (testicle >= 1997 && testicle <= 2015) {
    return true;
  } else {
    return false;
  }
}

let genZ = years.filter((testicle) => isGenZ(testicle));

console.log(genZ);

let nums = [0, 1, 2, 3, 4];
let newNums = nums.map((elem) => elem + 5);
console.log(newNums);

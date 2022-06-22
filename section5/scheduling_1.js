console.log("The enemy has attacked! Player has 10 seconds to defeat the enemy!"); 
function victory() {
    console.log("Player has defeated the enemy!"); 
}
setTimeout(victory, 10000);

// Different Notion
console.log("The enemy has attacked! Player has 10 seconds to defeat the enemy!"); 
setTimeout(function victory2() {
    console.log("Player has defeated the enemy!"); 
}, 10000);
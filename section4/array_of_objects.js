const car1 = {
    name: "Ford Mustang",
    color: "blue",
    price: 27205
}; 

const car2 = {
    name: "BMW",
    color: "grey",
    price: 53400
}; 

const car3 = {
    name: "Toyota Camry",
    color: "red",
    price: 25505
}; 

let carCollection = [
    car1,
    car2,
    car3
]; 

console.log(carCollection); 

carCollection.push(
    {
        name: "Honda Civic",
        color: "black",
        price: 21700
    }
); 

console.log(carCollection); 

console.log(carCollection[1].price); 
// Usage
const dog = new Dog("Rex");
console.log(dog.speak());
dog.learn("sit");
dog.learn("fetch");
console.log(dog.showTricks());

const cat = new Cat("Whiskers");
console.log(cat.speak());
console.log(cat.purr());

// instanceof
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(cat instanceof Dog);    // fals
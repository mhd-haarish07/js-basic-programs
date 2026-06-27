// 14. Random item from array
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
console.log("Random fruit:", randomItem(["Apple","Banana","Mango","Grape"]));
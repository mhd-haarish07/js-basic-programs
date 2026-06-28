// For...in Loop (Objects)
console.log("--- For...in Loop ---");
const person = { name: "Bob", age: 30, city: "Chennai" };
for (let key in person) {
  console.log(key + ":", person[key]);
}
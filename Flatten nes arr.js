// 9. Flatten nested array
function flattenDeep(arr) {
  return arr.flat(Infinity);
}
console.log("Flattened:", flattenDeep([1, [2, [3, [4, [5]]]]]));
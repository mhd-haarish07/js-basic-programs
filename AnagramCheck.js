
function isAnagram(s1, s2) {
  const sort = s => s.toLowerCase().split("").sort().join("");
  return sort(s1) === sort(s2);
}
console.log("listen/silent anagram:", isAnagram("listen", "silent")); 
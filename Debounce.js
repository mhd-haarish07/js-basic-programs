// 11. Debounce
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(msg => console.log("Debounced:", msg), 300);
log("first");
log("second");
log("third");
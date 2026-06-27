const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function demo() {
  console.log("Start");
  await sleep(100);
  console.log("After 100ms");
}
demo();
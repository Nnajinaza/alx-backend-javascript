export default function groceriesList() {
  const arr = [
    ["Apples", 10],
    ["Tomatoes", 10],
    ["Pasta", 1],
    ["Rice", 1],
    ["Banana", 5],
  ]

  const mp = new Map();
  // eslint-disable-next-line no-unused-vars
  for (const arg of arr) {
    mp.set(arg[0], arg[1]);
  }
  return mp;
}

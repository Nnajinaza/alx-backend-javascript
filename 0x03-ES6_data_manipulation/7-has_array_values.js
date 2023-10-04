export default function hasValuesFromArray(set, array) {
  for (const arg of array) {
    if (!set.has(arg)) return false;
  }
  return true;
}
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const i = array.indexOf(value);
    array[i] = appendString + value;
  }

  return array;
}

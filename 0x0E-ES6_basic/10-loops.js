export default function appendToEachArrayValue(array, appendString) {
    for (let value of array) {
        let i = array.indexOf(value);
        array[i] = appendString + value;

    }

    return array;
};

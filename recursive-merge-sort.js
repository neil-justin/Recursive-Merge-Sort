function mergeSort(array) {
    if (array.length === 1) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
        if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
            sortedArray.push(sortedLeft[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(sortedRight[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < sortedLeft.length) {
        sortedArray.push(sortedLeft[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < sortedRight.length) {
        sortedArray.push(sortedRight[rightIndex]);
        rightIndex++;
    }

    return sortedArray;
}

console.log(mergeSort([5, 10, 3, 10]));
var map = function (arr, fn) {
    let newArray = [];
    for (let index = 0; index < arr.length; index++){
        newArray[index] = fn(arr[index], index);
    }
    return newArray;
}

// const result1 = map([1, 2, 3], function (n) { return n + 1; });
// console.log(result1);

// const result2 = map([1, 2, 3], function (n, i) { return n + i; });
// console.log(result2);

// const result3 = map([10, 20, 30], function () { return 42; });
// console.log(result3);

console.log(map([1,2,3], (n) => n + 1 ));
console.log(map([1, 2, 3], (n, i) => n + i));
console.log(map([19, 244, 23], () => 43));
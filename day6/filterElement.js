var filter = function (arr, fn) {
    let result = [];
    for (let start = 0; start < arr.length; start++){
        if (fn(arr[start], start)) {
            result.push(arr[start]);
        }
    }
    return result;
}

const arr1 = [0, 10, 20, 30];
const arr2 = [1,2,3];
const arr3 = [-2, -1, 0, 1, 2];

const ans1 = filter(arr1, (n) => n > 10);
console.log(ans1);

const ans2 = filter(arr2, (n, index) => index === 0);
console.log(ans2);

const ans3 = filter(arr3, (n) => n + 1);
console.log(ans3);





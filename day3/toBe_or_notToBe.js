
var expect = function (val) {
  // returning a function as an object 
  return {
    toBe: function (num) {
      if (num === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (num) {
      if (num !== val) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

// try {
//     console.log("1st test: ", expect(5).toBe(5));
// } catch (error) {
//     console.log(error.message);
// }
// try {
//     console.log("2st test: ", expect(5).toBe(null));
// } catch (error) {
//     console.log(error.message);
// }
// try {
//     console.log("3rd test: ", expect(5).notToBe(5));
// } catch (error) {
//     console.log(error.message);
// }
// try {
//     console.log("4th test: ", expect(5).notToBe(null));
// } catch (error) {
//     console.log(error.message);
// }

// or

function runTest(label, fn) {
    try {
        fn()
        console.log(label,"✅ Passed");
    } catch (error) {
        console.log(label, "❌ Failed:", error.message);
    }
}

runTest("1st Test: ", () => expect(5).toBe(5));
runTest("2nd Test: ", () => expect(5).toBe(null));
runTest("3rd Test: ", () => expect(5).notToBe(5));
runTest("4th Test: ", () => expect(5).notToBe(null));

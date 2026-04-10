var createCounter = function (init) {
    let original = init;

    return {
        increament: () => ++init,
        reset: () => (init = original),
        decrement: () => --init
    }
};

const ans = createCounter(5);
console.log(ans.increament());
console.log(ans.reset());
console.log(ans.decrement());

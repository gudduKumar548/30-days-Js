var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

let result = createHelloWorld();
// console.log(result());
result();
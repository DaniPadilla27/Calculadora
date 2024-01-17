// operaciones.js
const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => {
    if (y === 0) {
        return "error de division";
    } else {
        return x / y;
    }
};

export { suma, resta, mult, div };

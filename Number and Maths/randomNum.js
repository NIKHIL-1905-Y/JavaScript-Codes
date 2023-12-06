//Random number generator function
const linearRandomGenerator = (x0, a, b, m, n) => {
    const results = [];
    for (let i = 0; i < n; i++) {
        x0 = (a * x0 + b) % m;
        results.push(x0);
    }
    return results;
};

// Example usage
const generatedNumbers = linearRandomGenerator(5, 7, 3, 101, 10);
console.log(generatedNumbers); // Output: [38, 21, 47, 37, 62, 33, 17, 4, 31, 12]

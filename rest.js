const sum = (...args) => args.reduce((prev, curr) => prev + curr, 0);

// console.log(sum(2,5, 78, 65, 12 ,54 ,356, 987, 351))

const lengthOfArg = (...args) => args.length;

console.log(lengthOfArg(null, undefined, [], true, 'string', 32));
function fibonacci(sequence, limit) {
    var newNode = sequence[sequence.length - 1] + sequence[sequence.length - 2];

    if (newNode <= limit) {
        sequence.push(newNode);
        fibonacci(sequence, limit);
    }

    return sequence;
}

module.exports = function(limit) {
    var sequence = fibonacci([1, 2], 4000000);

    return sequence
        .filter(function(value) {
            return (value % 2 === 0);
        })
        .reduce(function(previous, current) {
            return previous + current;
        });
};

module.exports = function(limit) {
    return Array
        .apply(null, Array(limit))
        .map(Function.prototype.call.bind(Number))
        .filter(function(x) {
            return (x % 3 === 0 || x % 5 === 0);
        })
        .reduce(function(previous, current) {
            return previous + current;
        });
};

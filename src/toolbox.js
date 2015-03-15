function times(max) {
    return Array
        .apply(null, Array(max))
        .map(Function.prototype.call.bind(Number));
}

module.exports = {
    times: times
};

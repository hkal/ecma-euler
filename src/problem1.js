var toolbox = require('./toolbox');

module.exports = function(limit) {
    return toolbox.times(limit)
        .filter(function(x) {
            return (x % 3 === 0 || x % 5 === 0);
        })
        .reduce(function(previous, current) {
            return previous + current;
        });
};

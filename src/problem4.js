function isPalindrome(num) {
    return (num.toString() === num.toString()
                .split('')
                .reverse()
                .join(''));
}

module.exports = function() {
    var largestPalindrome = 0;

    for(var i = 999; i >= 100; i--) {
        for(var j = i; j >= 100; j--) {
            var product = i * j;

            if(isPalindrome(product)) {
                if(product > max) {
                    largestPalindrome = product;
                }
            }
        }
    }

    return largestPalindrome;
};

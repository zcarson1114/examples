// A Fibonacci function.
module.exports = function(n) {
    var a = 0;
    var b = 1;

    var i = 0;
    while (i < n) {
	var tmp = b;
	b = a + b;
	a = tmp;
	i += 1;
    }
    return a;
}

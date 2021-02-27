const factorial = (n) => {
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

exports.factorial = factorial

const factorial_tr = (n) => {

    function fact(n, acc) {
        if (n < 2) return acc;
        return fact(n - 1, n * acc);
    }

    return fact(n, 1)
}

exports.factorial_tr = factorial_tr

const factorial_it = (n) => {

    let acc = 1

    for (i = n; i > 1; i--) {
        acc = acc * i
    }

    return acc
}

exports.factorial_it = factorial_it

// nearly too much
// console.log(factorial_tr(10470))
// too much
// console.log(factorial_tr(10471))

const factorial = (n) => {
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

exports.factorial=factorial

const factorial_tr = (n) => {

    function fact(n, acc) {
        if (n < 2) return acc;
        return fact(n - 1, n * acc);
    }

    return fact(n, 1)
}

exports.factorial_tr=factorial_tr
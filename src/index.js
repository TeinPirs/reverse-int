module.exports = function reverse(n) {
    let nu = `${Math.abs(n)}`;
    let result = Number(nu.split('').reverse().join(''));
    return result;
}

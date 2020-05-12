/**
 * Объединить функции.
 * @param {*} fns Функции.
 * @return {*} Объединённые функции.
 */
const compose = (...fns) => (argv) => fns.reduceRight((acc, fn) => fn(acc), argv);

module.exports = compose;

/**
 * Вывести компонент по условию.
 * @param {*} children Дети.
 * @param {boolean} condition Условие.
 * @return {*} Компонент по условию.
 */
const If = ({children, condition}) => condition && children;

export default If;

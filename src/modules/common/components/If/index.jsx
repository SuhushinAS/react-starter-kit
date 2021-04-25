// @flow
type TIfProps = {
    children: React$Node,
    condition: boolean,
};

/**
 * Вывести компонент по условию.
 * @param {*} children Дети.
 * @param {boolean} condition Условие.
 * @return {*} Компонент по условию.
 */
export const If = ({children, condition}: TIfProps) => condition && children;

export default If;

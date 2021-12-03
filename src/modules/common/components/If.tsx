import React from 'react';

type TIfProps = {
  children: React.ReactNode;
  condition: boolean;
};

/**
 * Вывести компонент по условию.
 * @param children Дети.
 * @param condition Условие.
 * @return {*} Компонент по условию.
 */
export const If = ({children, condition}: TIfProps) => condition && children;

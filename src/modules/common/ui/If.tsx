import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  condition: boolean;
};

export const If = ({children, condition}: Props) => condition && children;

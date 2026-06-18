import React from 'react';

type TIfProps = {
  children: React.ReactNode;
  condition: boolean;
};

export const If = ({children, condition}: TIfProps) => condition && children;

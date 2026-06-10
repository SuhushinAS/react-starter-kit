import React from 'react';
import {iconMap} from 'modules/common/lib/icon-map';
import './SvgIcon.less';

type TIconProps = {
  name?: string;
};

const spritePath = '/sprite.svg';
const warnedNames = new Set<string>();


const warn = (name: string, message: string): void => {
  const key = `${name}:${message}`;

  if (!warnedNames.has(key)) {
    warnedNames.add(key);
    console.warn(message);
  }
};

export const SvgIcon = ({name = ''}: TIconProps) => {
  if (!name) {
    warn(name, `${name} is not correct`);

    return null;
  }

  const viewBox = iconMap[name];

  if (!viewBox) {
    warn(name, `${name} is not found`);

    return null;
  }

  return (
    <svg className="svg-icon" viewBox={viewBox}>
      <use href={`${spritePath}#${name}`} xlinkHref={`${spritePath}#${name}`} />
    </svg>
  );
};

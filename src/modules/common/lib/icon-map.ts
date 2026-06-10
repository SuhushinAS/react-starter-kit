import {getSvgViewBox} from 'modules/common/lib/get-svg-view-box';

type TIconMap = Record<string, string>;

const isDev = 'production' !== process.env.NODE_ENV;

const getName = (path: string): string => {
  return path.replace(/^\.\//u, '').replace(/\.svg$/u, '');
};

const context = require.context('icons', false, /\.svg$/u);
const invalidIcons: string[] = [];

export const iconMap = context.keys().reduce<TIconMap>((result, path) => {
  const name = getName(path);
  const viewBox = getSvgViewBox(context(path) as string);

  if (viewBox) {
    result[name] = viewBox;
  } else if (isDev) {
    invalidIcons.push(name);
  }

  return result;
}, {});

if (isDev && invalidIcons.length) {
  console.warn(`[SvgIcon] Missing viewBox in SVG icons: ${invalidIcons.join(', ')}`);
}


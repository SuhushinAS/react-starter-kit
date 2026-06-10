import React from 'react';
import './SvgIcon.less';

type TIconProps = {
  name?: string;
};

type TImport = {
  default: string;
};

const spritePath = '/sprite.svg';
const viewBoxCache = new Map<string, string>();
const pendingViewBoxes = new Map<string, Promise<string>>();

const getAttribute = (tag: string, name: string): string => {
  const result = tag.match(new RegExp(`${name}\\s*=\\s*(['"])(.*?)\\1`, 'iu'));

  return result?.[2] ?? '';
};

const getViewBox = (content: string): string => {
  const [svgTag = ''] = content.match(/<svg\b[^>]*>/iu) ?? [];

  if (!svgTag) {
    return '';
  }

  const viewBox = getAttribute(svgTag, 'viewBox');

  if (viewBox) {
    return viewBox;
  }

  const width = Number.parseFloat(getAttribute(svgTag, 'width'));
  const height = Number.parseFloat(getAttribute(svgTag, 'height'));

  if (Number.isFinite(width) && Number.isFinite(height)) {
    return `0 0 ${width} ${height}`;
  }

  return '';
};

const importSvg = async (name: string): Promise<string> => {
  const cachedViewBox = viewBoxCache.get(name);

  if (cachedViewBox) {
    return cachedViewBox;
  }

  const pendingViewBox = pendingViewBoxes.get(name);

  if (pendingViewBox) {
    return pendingViewBox;
  }

  const request = import(
    /* webpackChunkName: "icon-source" */
    /* webpackMode: "lazy-once" */
    `icons/${name}.svg?source`
  )
    .then((icon: TImport) => {
      const viewBox = getViewBox(icon.default);

      if (!viewBox) {
        throw new Error(`${name} viewBox is not found`);
      }

      viewBoxCache.set(name, viewBox);
      pendingViewBoxes.delete(name);

      return viewBox;
    })
    .catch((error: unknown) => {
      pendingViewBoxes.delete(name);

      throw error;
    });

  pendingViewBoxes.set(name, request);

  return request;
};

export const SvgIcon = ({name = ''}: TIconProps) => {
  const [viewBox, setViewBox] = React.useState<string>(() => {
    if (!name) {
      return '';
    }

    return viewBoxCache.get(name) ?? '';
  });

  React.useEffect(() => {
    let isMounted = true;

    if (!name) {
      console.warn(`${name} is not correct`);
      setViewBox('');

      return () => {
        isMounted = false;
      };
    }

    setViewBox(viewBoxCache.get(name) ?? '');

    importSvg(name)
      .then((nextViewBox) => {
        if (isMounted) {
          setViewBox(nextViewBox);
        }
      })
      .catch(() => {
        if (isMounted) {
          setViewBox('');
        }

        console.warn(`${name} is not found`);
      });

    return () => {
      isMounted = false;
    };
  }, [name]);

  if (!viewBox) {
    return null;
  }

  return (
    <svg className="svg-icon" viewBox={viewBox}>
      <use href={`${spritePath}#${name}`} xlinkHref={`${spritePath}#${name}`} />
    </svg>
  );
};

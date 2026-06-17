const getAttribute = (tag: string, name: string): string => {
  const result = tag.match(new RegExp(`${name}\\s*=\\s*(['"])(.*?)\\1`, 'iu'));

  return result?.[2] ?? '';
};

export const getSvgViewBox = (content: string): string => {
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


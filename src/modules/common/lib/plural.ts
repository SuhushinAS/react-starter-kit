export const plural = (n, [one, few, many]) => {
  const mod100 = n % 100;
  const mod10 = n % 10;

  if (1 === mod10 && 11 !== mod100) {
    return one;
  }

  if (2 > mod10 || 4 < mod10 || (10 <= mod100 && 20 > mod100)) {
    return many;
  }

  return few;
};

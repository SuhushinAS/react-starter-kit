type Args = unknown[];
type Func = (...arg: Args) => void;

export const debounce = (func: Func, wait: number): Func => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Args) => {
    const later = () => {
      timeout = null;

      func(...args);
    };

    if (null !== timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
};

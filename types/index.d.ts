declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.less' {
  const classes: {readonly [key: string]: string};
  export default classes;
}

declare module 'baron' {
  import type {HTMLElement} from 'react';

  export type BaronDirection = 'h' | 'v';

  export type BaronOptions = {
    bar?: HTMLElement | null;
    barOnCls?: string;
    direction?: BaronDirection;
    impact?: string;
    root?: HTMLElement | null;
    scroller?: HTMLElement | null;
    track?: HTMLElement | null;
    [key: string]: unknown;
  };

  export interface BaronInstance {
    update: () => void;
    dispose: () => void;
    [key: string]: unknown;
  }

  export default function baron(opts?: BaronOptions): BaronInstance;
}

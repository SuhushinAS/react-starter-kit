export type TStatusStore = {
  [key: string]: Status | undefined;
};

export enum Status {
  idle,
  loading,
  success,
  error,
}

export type TStatusMap = {
  [key: string]: Status;
};

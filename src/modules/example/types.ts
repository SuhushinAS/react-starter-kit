export type TExampleStore = {
  data: TExampleData;
  list: string[];
};

export type TExampleData = {
  [key: string]: TExample;
};

export type TExample = {
  [key: string]: string;
};

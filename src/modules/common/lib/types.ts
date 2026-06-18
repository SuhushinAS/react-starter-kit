export type TItem = {
  id: string;
};

export type TMap<T = TItem> = Record<string, T>;

export type TGetId<T = TItem> = (item: T) => string;

export type TGetEntry<T = TItem> = (item: T) => [string, T];

export type TNormalize<T = TItem> = (list: T[]) => {
  data: TMap<T>;
  list: string[];
};

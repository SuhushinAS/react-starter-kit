export type TExampleStore = {
  data: TExampleMap;
  list: string[];
};

export type TExampleMap = Record<string, TExample>;

export type TExample = {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  tags: string[];
  friends: TExampleFriend[];
  greeting: string;
  favoriteFruit: string;
};

export type TExampleFriend = {
  id: number;
  name: string;
};

export type Character = {
  name: string;
  age: number;
  race: string;
  gender: string;
  class: string;
  subclass?: string;
  description?: string;
  inventory?: InventoryItem[];
  stats: Stat[];
  image?: string;
  abilities: Ability[];
};

export type InventoryItem = {
  title: string;
  description?: string;
  image?: string;
};

export type Stat = {
  title: string;
  amount: number;
  description?: string;
};

export type Ability = {
  title: string;
  description?: string;
};

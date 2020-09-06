export namespace Models {
  export interface Pagination {
    limit: number;
    offset: number;
  }

  export interface Auth {
    token: string;
  }

  export type UserType = 'user' | 'guest';

  export interface User {
    info: {
      name: string;
      avatarUrl: string;
    };
    doneTutorial: boolean;
  }

  export interface QuestShortOverview {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    limitation: {
      time: number;
      info?: string;
    };
    level: number;
  }

  export interface Quests {
    items: Array<Models.QuestShortOverview>;
  }

  export type InventoryItemType =
  | 'file'
  | 'file-locked';

  export interface InventoryItem {
    id: string;
    type: InventoryItemType;
    title: string;
    description: string;
    disabled: boolean;
  }

  export interface Inventory {
    items: Array<InventoryItem>;
  }
}
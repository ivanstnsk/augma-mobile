import { Models } from "./models";

export namespace Quests {
  export namespace Request {
    export interface Quests {
      pagination: Models.Pagination;
    }

    export interface QuestPoints {
      pagination: Models.Pagination;
    }
  }

  export namespace Response {
    export interface Quests extends Models.Quests {}

    export interface QuestPoints extends Models.QuestPoints {}
  }
}
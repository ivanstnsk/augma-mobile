import { Models } from "./models";

export namespace User {
  export namespace Request {
    export interface User {}
  }

  export namespace Response {
    export interface User extends Models.User {}
  }
}
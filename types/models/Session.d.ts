import { Models } from "./models";

export namespace Session {
  export namespace Request {
    export interface Login {
      username: string;
      password: string;
    }

    export interface Registration {
      username: string;
      password: string;
      name: string;
    }
  }

  export namespace Response {
    export interface Login extends Models.Auth {}

    export interface Registration extends Models.Auth {}
  }
}
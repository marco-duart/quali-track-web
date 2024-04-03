export namespace RegisterDTO {
  export interface IParams {
    email: string;
    password: string;
  }
  export interface IResponse {
    id: number,
    email: string;
    password: string; //password digest
    createdAt: Date;
    updatedAt: Date;
  }
}

export namespace LoginAPIDTO {
  export interface IParams {
    email: string;
    password: string;
  }
  export interface IResponse {
    access_token: string;
  }
}

export namespace LoggedUserDTO {
  export interface IParams {
    token: string;
  }
  export interface IResponse {
    id: number;
    email: string;
  }
}
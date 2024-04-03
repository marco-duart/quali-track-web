type Candy = {
  id: number;
  name: string;
  category: string;
  description: string;
  value: number;
  created_at: Date;
  updated_at: Date;
};

export namespace GetCandiesDTO {
  export interface IParams {
    prefix: string;
    token: string;
  }
  export interface IResponse {
    candies: Candy[];
  }
}

export namespace CreateCandyDTO {
  export interface IParams {
    title: string;
    token: string;
  }
  export interface IResponse {
    candy: Candy;
  }
}

export namespace DeleteCandyDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    skill: Candy;
  }
}

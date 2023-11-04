export interface ContinentResponse {
  id: number;
  continentName: string;
}

export interface PostContinent {
  continentName: string;
}

export class PostContinent2 {
  constructor(public continentName: string){}
}

export class Continent implements ContinentResponse {
  constructor(
    public id: number,
    public continentName: string,
  ) {}
}

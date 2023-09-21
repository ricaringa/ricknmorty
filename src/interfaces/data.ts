export interface location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface character {
  id: 1,
      name: string,
      status: string,
      species: string,
      type: string,
      gender: string,
      origin: {
        name: string,
        url: string
      },
      location: {
        name: string,
        url: string
      },
      image: string,
      episode: string[],
      url: string,
      created:string
}
export interface episode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string
}
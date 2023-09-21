import { character, episode, location } from "../interfaces/data";

export const getLocationById = (id: number) => {
  return new Promise<location>((resolve, reject) => {
    try {
      fetch(`https://rickandmortyapi.com/api/location/${id}`).then((data) =>
        resolve(data.json())
      );
    } catch (e) {
      reject(e);
    } finally {
      console.log("Fetch ends here");
    }
  });
};

export const getResidents = async (data: location) => {
  return new Promise<Array<character>>((resolve, reject) => {
    try {
  Promise.all(data.residents.map(url => 
    fetch(url).then(resp => resp.json()))).then((residents) => {
    if(residents.length>5){
      resolve(residents.slice(0,5))
    }else {
      resolve(residents)
    }
  });
} catch (e) {
  reject(e);
} finally {
  console.log("Fetch residents ends here");
}
});
};

export const getEpisodes = async( urls : string[]) => {
  return new Promise<Array<episode>>((resolve, reject) => {
    try {
  Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json()))).then((episodes) => {
    if(episodes.length>3){
      resolve(episodes.slice(0,2))
    }else {
      resolve(episodes)
    }
  });
} catch (e) {
  reject(e);
} finally {
  console.log("Fetch episodes ends here");
}
});
}

export const getCharactersOnEpisode = async( urls : string[]) => {
  return new Promise<Array<character>>((resolve, reject) => {
    try {
  Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json()))).then((characters) => {
    resolve(characters)
  });
} catch (e) {
  reject(e);
} finally {
  console.log("Fetch character on episode ends here");
}
});
}
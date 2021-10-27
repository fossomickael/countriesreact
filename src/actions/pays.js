
import { FETCH_ALL_COUNTRIES, SEARCH_COUNTRIES } from './types';
const BASE_URL = 'https://restcountries.com';

export const setPays = () => {
    return {
      type: FETCH_ALL_COUNTRIES,
      async payload () {
        const url = `${BASE_URL}/v2/all`;
        const response = await fetch(url);
        const pays = await response.json();
        return pays;
      }
  };
};

export const cherchePays = (search) => {
  return {
    type: SEARCH_COUNTRIES,
    async payload () {
      const url = `${BASE_URL}/v2/name/${search}`;
      try {
        const response = await fetch(url);
        const pays = await response.json();
        if (pays["status"] === 404)
        {
          return "error";
        }
        return pays;
      }
      catch(err) {
        return err;
      }

      
    }
};
};
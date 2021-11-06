
import { FETCH_ALL_COUNTRIES, SEARCH_COUNTRIES,  FETCH_ONE_COUNTRY, FILTRER_ONE_REGION, ADD_BORDER_COUNTRIES} from './types';
import countriesAPI from '../apis/countries';

export const setPays = () => async dispatch => {
    const response = await countriesAPI.get('/v2/all');
    dispatch({ type: FETCH_ALL_COUNTRIES, payload: response.data });
};

export const cherchePays = (search) => async dispatch =>  {
  const response = await countriesAPI.get(`/v2/name/${search}`);
  dispatch({ type: SEARCH_COUNTRIES, payload: response.data });
};


export const chercheUnPays = (alpha3Code) => async dispatch => {
  const response = await countriesAPI.get(`/v2/alpha/${alpha3Code}`);
  dispatch({ type: FETCH_ONE_COUNTRY, payload: response.data});
};

export const filtrerRegion = (name)  => async dispatch => {
  const response = await countriesAPI.get(`/v2/region/${name}`);
  dispatch({ type: FILTRER_ONE_REGION, payload: response.data });
 
};

export const ajoutPaysFrontiere = (codes)  => async dispatch => {
  const response = await countriesAPI.get(`/v2/alpha?codes=${codes}`);
  dispatch({ type: ADD_BORDER_COUNTRIES, payload: response.data });
};

export const fetchCountriesAndBorders = (alpha3Code) => async (dispatch, getState) => {
  await  dispatch(chercheUnPays(alpha3Code));
  const country = getState().pays;
  dispatch(ajoutPaysFrontiere(country[0].borders.toString()));
 
};
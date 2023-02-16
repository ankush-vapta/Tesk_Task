import axios from 'axios'
export const GET_MOVIES = 'FETCH_MOVIES';
export const REMOVE_ITEM = 'REMOVE_FAVORITE_ITEM';
export const ADD_CART = 'ADD_CART';
export const GET_MOVIESPARAM = "GET_MOVIESPARAM"

const API_URL = "https://api.themoviedb.org/3/movie/popular"
const API_KEY = "4fa0858b3979642723766e0a1cc6c726";
const PARAMS = ""
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`

export const getMovie = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error.message)
  }
};


// const PARAMS1 = "airport"

const API_URL1 = `https://api.themoviedb.org/3/search/movie`
const BASE_URL1 = `${API_URL1}?api_key=${API_KEY}`


export const getMovieWithParam = ({cate}) => {
  try {
    return async dispatch => {
      // console.log(cate ,"catecatecatecatecate")
      const res = await axios.get(`${BASE_URL1}&query=${cate}`);

      debugger

      if (res.data) {
        // console.log(res.data ,"res.datares.datares.datares.data")
        dispatch({
          type: GET_MOVIESPARAM,
          payload: res.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error.message)
  }
};

export const addCart = (movie) => {
  return {
    type: ADD_CART,
    payload: movie
  }
};

export const removeCart = (movie) => {
  console.log(movie, "movie")
  return {
    type: REMOVE_ITEM,
    payload: movie
  }
}


import axios from 'axios';
//   axios.defaults.headers.common['x-api-key'] =
// 'live_oco9x8YMDUogCKhdS7HWndmzEKKtYDTxBCgIu1bWIuyFPmWOKJqUYmA2eIrffrNG';

const BREED_URL = ' https://api.thecatapi.com/v1';
const API_KEY =
  'live_oco9x8YMDUogCKhdS7HWndmzEKKtYDTxBCgIu1bWIuyFPmWOKJqUYmA2eIrffrNG';
const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};
export const funFetchBreeds = function fetchBreeds() {
  return fetch(`${BREED_URL}/breeds`, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
};

export const funFetchCatByBreed = function fetchCatByBreed(breedId) {
  return fetch(`${BREED_URL}/images/search?breed_ids=${breedId}`, options).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
};

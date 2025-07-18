// src/utils/Api.js
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const INITIAL_FETCH_COUNT_FOR_IDS = 100; // Alterado para 100

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Erro: ${res.status}`);
}

export function getTopStoryIds() {
  return fetch(`${BASE_URL}/topstories.json?orderBy="$key"&limitToFirst=${INITIAL_FETCH_COUNT_FOR_IDS}`)
    .then(checkResponse);
}

export function getItemDetails(itemId) {
  return fetch(`${BASE_URL}/item/${itemId}.json`)
    .then(checkResponse);
}
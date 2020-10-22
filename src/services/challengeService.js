import axios from './httpService';
import { environment } from './../Environment/environment';

const baseUrl = environment.apiUrl;

export function getChallenges() {
  return axios.get(baseUrl + 'fields');
}

// Axios changes the returned data of ours type when it contains spaces and reversed numbers
export function postAString(endpoint, string) {
  return fetch(baseUrl + endpoint, getOptions('POST', string));
}

function getOptions(method, body) {
  return { method: method, headers: { 'Content-Type': 'application/json' }, body: body };
}

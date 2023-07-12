import axios from 'axios';

const headers = {
  'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
};

export const http = axios.create({
  baseURL: 'https://bayut.p.rapidapi.com',
  headers: headers,
});

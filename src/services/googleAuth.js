import axios from 'axios';
const API_KEY = 'd57670f3119ef47981c09cbf1cb3d2d1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTc2NzBmMzExOWVmNDc5ODFjMDljYmYxY2IzZDJkMSIsInN1YiI6IjY1ODJhNGVjNTViYzM1NTcxNTE3YjQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FGASUnS6pTqDNKCG13-tA5RbW9nYFMwY9-2qdwNpLWo'
  }
};
export default axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  include_adult: false,
  language: 'uk',
};
import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?',
    // baseURL: 'https://jobs.github.com/'
})
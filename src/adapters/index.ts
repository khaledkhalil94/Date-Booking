import axios from 'axios';
import {baseURL} from './config';

const instance = axios.create({
  baseURL,
  withCredentials: false,
});

export default instance;

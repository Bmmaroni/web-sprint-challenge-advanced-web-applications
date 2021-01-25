import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const getColors = () => {
  return axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log('Error fetching from api', err.message)
      return err;
    });
}
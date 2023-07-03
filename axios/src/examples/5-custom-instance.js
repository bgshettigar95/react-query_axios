import { useEffect } from 'react';
import { AuthFetch } from './axios/custom';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {

    console.log('custom axios instance');
    try {
      const resp1 = await AuthFetch('react-store-products');
      const resp2 = await axios(randomUserUrl);
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;

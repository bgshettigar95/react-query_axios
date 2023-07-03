import axios from 'axios';
import { useEffect } from 'react';
import { AuthFetch } from './axios/interceptor';

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    console.log('axios interceptors');
    try {
      const response = await AuthFetch('/react-store-productss');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;

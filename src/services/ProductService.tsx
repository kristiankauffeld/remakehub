import create from './HttpService';

//const baseURL = import.meta.env.VITE_API_URL;
const baseURL = 'https://jsonplaceholder.typicode.com/users';

export default create(`${baseURL}/products`);

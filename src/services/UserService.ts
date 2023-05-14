import createHttpService from "./HttpService";

const baseURL = 'https://jsonplaceholder.typicode.com/users';

interface User {
  id: number;
  name: string;
}

createHttpService(`${baseURL}/users`)

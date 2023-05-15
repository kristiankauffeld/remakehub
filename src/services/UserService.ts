import createHttpService from "./HttpService";

export interface User {
  id: number;
  name: string;
}

export default createHttpService('/users')

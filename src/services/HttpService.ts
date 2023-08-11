class HttpService {
  baseURL: string;
  endpoint: string;

  constructor(endpoint: string) {
    this.baseURL = import.meta.env.VITE_API_URL; //'https://jsonplaceholder.typicode.com'
    this.endpoint = this.baseURL + endpoint;
  }

  getAll = async <T>(): Promise<T[]> => {
    const response = await fetch(this.endpoint);
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return await (response.json() as Promise<T[]>);
  };

  getById = async <T>(id: number): Promise<T> => {
    const response = await fetch(`${this.endpoint}/${id}`);
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    return await (response.json() as Promise<T>);
  };
}

function createHttpService(endpoint: string): HttpService {
  return new HttpService(endpoint);
}

export default createHttpService;

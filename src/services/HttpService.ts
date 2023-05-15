class HttpService {
  baseURL: string;
  endpoint: string;

  constructor(endpoint: string) {
    this.baseURL = 'https://jsonplaceholder.typicode.com'; //import.meta.env.VITE_API_URL
    this.endpoint = this.baseURL + endpoint;
  }
  
  getAll<T>(): { request: Promise<T[]>, cancel: () => void } {
    const controller = new AbortController();

    const request = fetch(this.endpoint, { signal: controller.signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      }
      return response.json() as Promise<T[]>;
    });

    const cancel = () => {
      controller.abort();
    };

    return { request, cancel };
  }
}


function createHttpService(endpoint: string): HttpService {
  return new HttpService(endpoint);
}

export default createHttpService;

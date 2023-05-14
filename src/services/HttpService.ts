class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll<T>(): Promise<{ data: T[]; cancel: () => void }> {
    const controller = new AbortController();
    const response = await fetch(this.endpoint, { signal: controller.signal });
    const data = await response.json();

    const cancel = () => {
      controller.abort();
    };
    
    return { data, cancel };
  }
}

//const create = (endpoint: string) => new HttpService(endpoint);

//export default create;

function createHttpService(endpoint: string): HttpService {
  // Perform additional logic or customization if needed
  return new HttpService(endpoint);
}

export default createHttpService;

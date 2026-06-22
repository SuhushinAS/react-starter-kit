export class Api {
  host = '';

  static options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };

  constructor(host = '') {
    this.host = host;
  }

  getJSON<T>(response: Response): Promise<T> {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  getOptions(options: RequestInit = {}): RequestInit {
    const { headers = {} } = options;

    return {
      ...Api.options,
      headers: { ...Api.options.headers, ...headers },
      ...options,
    };
  }

  request<T>(url = '', options?: RequestInit): Promise<T> {
    return this.fetch<T>(url, this.host, options);
  }

  fetch<T>(url = '', host = '', options = {}): Promise<T> {
    return fetch(`${host}${url}`, this.getOptions(options)).then((resp) => {
      return this.getJSON<T>(resp);
    });
  }

  requestLocal<T>(url = ''): Promise<T> {
    return this.fetch(url, '/local');
  }
}

export const api = new Api();

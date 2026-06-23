import { useCallback, useEffect, useRef } from 'react';

export class Api {
  static options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };

  host = '';

  constructor(host = '') {
    this.host = host;
  }

  getJSON = <T>(response: Response) => {
    return response.json().then<T>((body) => {
      if (response.ok) {
        return body;
      }

      const message = body?.message ?? body?.error ?? response.statusText;

      throw new Error(`HTTP error ${response.status}: ${message}`);
    });
  };

  getOptions(options: RequestInit = {}): RequestInit {
    const { headers = {} } = options;

    return {
      ...Api.options,
      headers: { ...Api.options.headers, ...headers },
      ...options,
    };
  }

  fetch<T>(url = '', host = '', options = {}) {
    return fetch(`${host}${url}`, this.getOptions(options)).then<T>(this.getJSON);
  }

  request<T>(url = '', signal: AbortSignal, options?: RequestInit) {
    return this.fetch<T>(url, this.host, { ...options, signal });
  }

  requestLocal<T>(url = '', signal: AbortSignal) {
    return this.fetch<T>(url, '/local', { signal });
  }
}

export const api = new Api();

export const useRequestLocal = () => {
  const abortControllerRef = useRef<AbortController>(new AbortController());

  useEffect(() => {
    return () => {
      abortControllerRef.current.abort();
    };
  }, []);

  return useCallback(<T>(url = '') => {
    abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    return api.requestLocal<T>(url, abortControllerRef.current.signal);
  }, []);
};

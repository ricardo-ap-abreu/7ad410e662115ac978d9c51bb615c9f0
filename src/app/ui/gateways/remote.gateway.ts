import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Url } from '../models/urls/url';

export class RemoteGateway {
  private defaultHeaders: HttpHeaders;

  constructor(private backendUrl: string, private httpClient: HttpClient) {
    this.defaultHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  get(url: Url): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(url.getUrl(), { headers: this.defaultHeaders })
        .toPromise()
        .then((r) => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  post(url: string, payload: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(this.buildUrl(url), payload, { headers: this.defaultHeaders })
        .toPromise()
        .then((r) => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  put(url: string, payload: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .put(this.buildUrl(url), payload, { headers: this.defaultHeaders })
        .toPromise()
        .then((r) => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  delete(url: Url) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .delete(url.getUrl(), { headers: this.defaultHeaders })
        .toPromise()
        .then((r) => {
          resolve(r);
        })
        .catch((response) => {
          reject(response);
        });
    });
  }

  postWithHeaders(url: Url, payload: any, headers: any) {
    headers = { ...headers };
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(url.getUrl(), payload, { headers })
        .toPromise()
        .then((r) => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  putWithHeaders(url: Url, payload: any, headers: any) {
    headers = { ...headers };
    return new Promise((resolve, reject) => {
      this.httpClient
        .put(url.getUrl(), payload, { headers })
        .toPromise()
        .then((r) => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  deleteWithHeaders(url: Url, headers: any) {
    headers = { ...headers };
    return new Promise((resolve, reject) => {
      this.httpClient
        .delete(url.getUrl(), { headers })
        .toPromise()
        .then((r) => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  getWithHeaders(url: Url, headers: any): Promise<any> {
    headers = { ...headers };
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(url.getUrl(), { headers })
        .toPromise()
        .then((r) => {
          resolve(r);
        })
        .catch((response: HttpErrorResponse) => {
          reject(response);
        });
    });
  }

  private buildUrl(action: string) {
    if (!!action && action.charAt(0) !== '/') {
      action = `/${action}`;
    }
    return `${this.backendUrl}${action}`;
  }
}

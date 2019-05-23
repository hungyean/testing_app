import { Injectable } from '@angular/core';
import { Request, XHRBackend, XHRConnection } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class HttpurlService extends XHRBackend {
  createConnection(request: Request): XHRConnection {
    if (request.url.startsWith('/')) {
      request.url = 'http://localhost/testing/public/api' + request.url;
    }
    return super.createConnection(request);
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DatasourceService } from './datasource.service';
import { map } from 'rxjs/operators';
import { Options } from 'selenium-webdriver/safari';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(public http: Http, public datasource: DatasourceService) { }

  create(item): any {
    // tslint:disable-next-line:prefer-const
    let result: any;
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    // tslint:disable-next-line:object-literal-shorthand
    const option = new RequestOptions({ headers: headers });

    this.http.post('/data/create/' + item, option)
      .pipe(map(res => res))
      .subscribe(data => {
        this.datasource.source.push(data.json());
      });
  }

  update(item): any {
    let result: any;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // tslint:disable-next-line:object-literal-shorthand
    const option = new RequestOptions({ headers: headers});
    this.http.post('/data/update' , JSON.stringify(item), option)
      .pipe(map(res => res))
      .subscribe(data => {
        console.log('second' + JSON.stringify(item));
        result = data;
        return JSON.stringify(item);
      });
    return result;
  }


  delete(item): any {
    let result: any;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // tslint:disable-next-line:object-literal-shorthand
    this.http.delete('/data/delete/' + item, { headers: headers })
      .pipe(map(res => res))
      .subscribe(data => {
        result = data;
      });

    return result;
  }
}

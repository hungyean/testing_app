import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import { DatasourceService } from '../datasource.service';
import { ServerService } from '../server.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [ServerService],
})
export class Tab1Page {
  public item: any;
  public test: any[] = [];
  public serverUrl = environment.baseUrl;
  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: {
      zip: 48149,
      city: 'Muenster',
      country: 'DE'
    },
    interests: [
      'Ionic', 'Angular', 'YouTube', 'Sports'
    ]
  };
  constructor(
    public http: Http,
    public db: ServerService,
    public datasource: DatasourceService,
    public router: Router,
    ) {
      this.init();
  }

  init() {
    this.http.get('/data').pipe(map(res => res))
    .subscribe(data => {
      this.datasource.source = data.json();
    });
  }

  deleteItem(item, idx) {
    this.db.delete(item);
    this.datasource.source.splice(idx, 1);
  }

  navParams(id) {
    this.router.navigate(['details', {ids: id}]);
  }
}

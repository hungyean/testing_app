import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { ServerService } from './../server.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data: any;
  test: any;
  name: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private db: ServerService,
    ) {
    this.init();
  }

  init() {
    const id = this.route.snapshot.paramMap.get('ids');
    // show the test id that passed from another page
    console.log(id);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // tslint:disable-next-line:object-literal-shorthand
    const option = new RequestOptions({ headers: headers });
    this.http.post('/data/' + id, option).pipe(map(res => res))
      .subscribe(data => {
        this.test = data.json();
        // show the test data based on the test id
        console.log(this.test);
      });
  }

  updateItem(test) {
    let result: any;
    // tslint:disable-next-line:object-literal-key-quotes
    this.http.post('/data/update/' + test.id, {'name': this.name})
      .pipe(map(res => res))
      .subscribe(data => {
        console.log(this.name);
        result = data;
        // return JSON.stringify(item);
      });
    return result;
  }

  ngOnInit() {
  }

}

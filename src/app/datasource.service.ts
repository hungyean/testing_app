import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  constructor() { }
  public source: any[] = [];
  public tempdata: any = '';
}

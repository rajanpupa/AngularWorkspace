import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: Http ) { 
    console.log('data servcie connected.');
  }

  // returns an observable
  getPosts(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getPost(id: number) {
     return this.http.get(this.url + "/" + id)
        .map(res => res.json());      
  }

}

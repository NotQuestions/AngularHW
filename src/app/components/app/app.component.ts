import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any[];
  coments: any[];

  constructor ( private httpClient: HttpClient){

    httpClient
      .get<any[]>('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response=>{
        this.posts = response;
      });

    httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(response=>{
        this.coments = response;
        console.log(this.coments[0].name)
      })

  }


}

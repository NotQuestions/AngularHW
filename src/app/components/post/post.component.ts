import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

  @Input()
  post: any;
  // constructor ( private httpClient: HttpClient){
  //   httpClient
  //     .get<any[]>('http://jsonplaceholder.typicode.com/posts')
  //     .subscribe(response=>{
  //       this.posts = response;
  //     })
  //
  // }


}

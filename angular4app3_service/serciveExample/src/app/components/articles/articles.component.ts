import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  posts: Post[];

  constructor(
    private router: Router,
    private dataService: DataService ) { }

  ngOnInit() {
      this.dataService.getPosts().subscribe((posts) =>{
      this.posts = posts;
    });
  }

  showDetail(post:Post){
    this.router.navigate(['/detail', post.id]);
  }

}

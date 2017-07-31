import { Component,Input, OnInit } from '@angular/core';
import { Location }   from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../../services/data.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  

  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private dataservice: DataService
  ) { }

  @Input() post: Post;
  
  ngOnInit() {
      this.route.paramMap
      .switchMap((params: ParamMap) => this.dataservice.getPost(+params.get('id')))
      .subscribe( post => this.post = post);
  }

   goBack(): void {
    this.location.back();
  }

}

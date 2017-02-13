import { Component ,OnInit } from "@angular/core";
import { ActivatedRoute,Params } from "@angular/router";
import { NewsService } from "../../services/news.service";
import { News } from "app/classes/news";
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl:'app/news/components/detail/news-detail.component.html',
  styleUrls:["app/news/components/detail/news-detail.component.css"]
})

export class NewsDetailComponent implements OnInit{
  news:News;
  canEdit:boolean = false;
  constructor(
    private route:ActivatedRoute,
    private newsService:NewsService
  ){}

  ngOnInit(){

    this.route.params.switchMap((params: Params) => this.newsService.getNewsById(+params['id']))
      .subscribe(news => this.news = news;);

  }

  changeEdit(){
    this.canEdit = !this.canEdit;
  }

  save(){
    this.newsService.update(this.news)
                    .then((news)=>{console.log(news)})
  }
}

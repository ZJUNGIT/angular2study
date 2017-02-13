import { Component,OnInit } from "@angular/core";
import { NewsService } from "./services/news.service";
import { News } from "./classes/News";

@Component({
  templateUrl:"app/news/news.component.html",
  styleUrls:["app/news/news.component.css"]
})

export class NewsComponent implements OnInit {
  newslist:News[] = [];

  constructor(private newsService:NewsService){}

  ngOnInit(){
    this.newsService.getNewsList().then(newslist =>{
      this.newslist = newslist;
    });

  }
}

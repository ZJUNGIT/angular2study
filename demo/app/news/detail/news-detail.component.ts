import { Component ,OnInit } from "@angular/core";
import { ActivatedRoute,Params } from "@angular/router";
import { NewsService } from "../../services/news.service";
import { News } from "app/classes/news";
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl:'app/news/detail/news-detail.component.html',
  styleUrls:["app/news/detail/news-detail.component.css"]
})
 //如何获取路由中的id？
 //NewsDetailComponent应该从ActivatedRoute服务的可观察对象params中取得id参数，
 //并通过NewsService服务获取具有这个指定id的新闻详情。
export class NewsDetailComponent implements OnInit{
  news:News;
  constructor(
    private route:ActivatedRoute,
    private newsService:NewsService
  ){}

  ngOnInit(){
    // this.route.params.subscribe(params =>{
    //   this.newsService.getNewsById(+params.id).then(news =>{ this.news = news;})
    // });
    this.route.params.switchMap((params: Params) => this.newsService.getNewsById(+params['id']))
      .subscribe(news => this.news = news;);

    //注意switchMap运算符如何将可观察的路由参数中的 id 映射到一个新的Observable， 即newsService.getHero方法的结果。
    //如果用户在 getNewsById 请求执行的过程中再次导航这个组件，
    //switchMap 再次调用newsService.getNewsById之前， 会取消之前的请求。
    // News的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
  }
}

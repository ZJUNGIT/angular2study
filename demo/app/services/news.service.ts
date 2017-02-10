import { Injectable } from "@angular/core";
import { NewsList } from "../mock/newslist.mock";
import { News } from "../classes/News";

@Injectable()

export class NewsService {

  getNewsList(): Promise<News[]> {
    return Promise.resolve(NewsList);
  }

  getNewsById(id:number):Promise<News> {
    console.log(id,"====");
    return this.getNewsList()
                .then(newslist => newslist.find(news => news.id === id));
  }

}

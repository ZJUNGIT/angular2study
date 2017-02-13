import { Injectable } from "@angular/core";
import { NewsList } from "../mock/newslist.mock";
import { News } from "../classes/News";
import { Http,Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class NewsService {

  private newsUrl = "app/newslist";

  constructor(private http: Http){}

  getNewsList(): Promise<News[]> {
    // return Promise.resolve(NewsList);
    return this.http.get(this.newsUrl)
             .toPromise()
             .then(response => response.json().data)
             .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  update(news: News): Promise<News> {
    const url = `${this.newsUrl}/${news.id}`;
    return this.http
      .put(url, JSON.stringify(news), {headers: this.headers})
      .toPromise()
      .then(() => news)
      .catch(this.handleError);
  }

  getNewsById(id:number):Promise<News> {
    return this.getNewsList()
                .then(newslist => newslist.find(news => news.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}

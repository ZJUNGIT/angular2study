import { Injectable } from "@angular/core";
import { NewsList } from "../mock/newslist.mock";
import { News } from "../classes/News";
import { Http,Headers } from "@angular/http";
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class NewsService {

  private newsUrl = "app/newslist";

  constructor(private http: Http){}

  getNewsList(): Observable<News[]> {
    // return Promise.resolve(NewsList);
    // return this.http.get(this.newsUrl)
    //          .toPromise()
    //          .then(response => response.json().data)
    //          .catch(this.handleError);
    //
    return this.http.get(this.newsUrl)
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  private extractData(res:Response){
    let body = res.json(); //可以把Response解析成Javascript对象 --- 只要调用一下response.json()就可以，
    return body.data ||{};
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

  private handleError (error: Response | any) {
      // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



}

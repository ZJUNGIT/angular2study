import { Component } from "@angular/core";
import { WikipediaService } from "./services/wikipedia.service";
import { Subject }          from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl:'app/wikipedia/wikipedia.component.html',
  providers:[WikipediaService]
})

export class WikipediaComponent{
  title = "Wikipedia Demo ";
  fetches = "Fetches after each keystroke";
  items:Obeservale<string[]>;
  //创建一个搜索关键字流,
  //组件创建searchTermStream为string类型的Subject。
  //search方法通过subject的next方法，将每个新搜索框的值添加到数据流中。
  private searchTermStream:Subject = new Subject<string>();

  constructor(private wikipediaService:WikipediaService){
    this.items = this.searchTermStream  //监听搜索关键字
                      .debounceTime(300)//先等待用户停止输入至少300毫秒 (debounceTime)。
                      .distinctUntilChanged()// 只有当搜索关键字变化的时候，才把它传给服务 (distinctUntilChanged)。
                      .switchMap((term: string) => this.wikipediaService.search(term));
  }//switchMap（以前叫flatMapLatest） 返回一个新的可观察对象，
  //它组合了所有这些“可观察的字符串数组”，重新按照它们的原始请求顺序进行排列，然后把最近的一个搜索结果交付给订阅者。

  search(term:string){
    this.searchTermStream.next(term);
  }


}

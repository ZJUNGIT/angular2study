import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule ,Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { AboutComponent } from "./about/about.component";


//appRoutes:Routes是一个路由定义的数组
//路由定义包括以下部分：
//path: 路由器会用它来匹配浏览器地址栏中的地址，如heroes。
//component: 导航到此路由时，路由器需要创建的组件（HeroesComponent）。
const appRoutes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: NewsComponent }
];


@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes) //forRoot方法提供了路由需要的路由服务提供商和指令，并基于当前浏览器 URL 初始化导航。
   ],
  declarations: [ AppComponent,NewsComponent,AboutComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

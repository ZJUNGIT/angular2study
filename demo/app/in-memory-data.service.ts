// 模拟web API
// 导入InMemoryWebApiModule并将其加入到模块的imports数组。
// InMemoryWebApiModule将作为Http客户端默认的后端服务 —
// 这是一个辅助服务，负责与远程服务器对话 — 替换成了内存 Web API服务：

import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let newslist = [
      {id:1, title:"关于 Vue webpack 模板的一些改造", time:'2017-01-02'},
      {id:2, title:"代码整洁之道", time:'2017-01-02'},
      {id:3, title:"Effective前端6：避免页面卡顿", time:'2017-01-12'},
      {id:4, title:"失帧和帧率FPS", time:'2017-01-02'},
      {id:5, title:"为什么我从 Angular 转向 React ", time:'2017-01-23'},
      {id:6, title:"弹性盒模型", time:'2017-01-02'},
      {id:7, title:"微信小程序中用户登录和登录态维护", time:'2017-02-02'},
      {id:8, title:"单页面应用下的JS内存管理(1)", time:'2017-02-14'},
      {id:9, title:"征服 JavaScript 面试：什么是闭包", time:'2017-03-05'},
      {id:10,title: "理解关键的渲染路径", time:'2017-01-02'},
      {id:11,title: "Yarn 可以为你做的五件事", time:'2017-04-26'},
      {id:12,title: "从多个资料库安装", time:'2017-04-28'},
      {id:13,title: "管理器：npm、bower、component ", time:'2017-05-08'},
      {id:14,title: "如何提升页面渲染效率", time:'2017-06-19'}
    ];
    return {newslist};
  }
}

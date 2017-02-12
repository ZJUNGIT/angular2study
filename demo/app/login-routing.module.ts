import {NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { AuthGuard } from "./auth-guard.service";
import { AuthService } from "./auth.service";

import { LoginComponent } from "./login.component";

const loginRoutes:Routes = [
  {path:"login",component:LoginComponent},
  {path:'admin',loadChildren:'app/admin/admin.module#AdminModule'}
  //仔细看loadChildren字符串，就会发现它直接映射到了我们以前在管理特性区构建的admin.module.ts文件。
  //在文件路径后面，我们使用#来标记出文件路径的末尾，并告诉路由器AdminModule的名字。
  //打开admin.module.ts文件，我们就会看到它正是我们所导出的模块类的名字。
]

@NgModule({
  imports:[
    RouterModule.forChild(loginRoutes)
  ],
  exports:[
    RouterModule
  ],
  providers:[
    AuthGuard,AuthService
  ]
})

export class LoginRoutingModule{}

import {Component,OnInit} from "@angular/core";
import {FormGroup, FormControl ,FormBuilder,Validators} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
    selector:"root-app",
    templateUrl:"app/app.component.html",
    styleUrls:["app/app.component.css"]
})

export class AppComponent implements OnInit {

/**
  myForm = new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
    email:new FormControl(),
    region:new FormGroup({
      city:new FormControl(),
      street:new FormControl()
    })
  });
**/

  myForm:FormGroup;
  changeMsg:any;
  msg:string;

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.myForm = this.fb.group({
      username:["Jeason",[Validators.required]],
      password:["This is password",[Validators.required,Validators.minLength(4),Validators.maxLength(24)]],
      email:["sunjja@jiedaibao.com",[Validators.required]],
      region:this.fb.group({
        city:["北京",[Validators.required]],
        street:["望京",[Validators.required]]
      })
    });

    // 从表单控件中获得地址、城市、街道控件的引用
     // 地址控件也是一个FormGroup，需要将它转型成FormGroup类型。
     const region$ = <FormGroup>this.myForm.controls['region'];
     const city$ = region$.controls['city'];
     const street$ = region$.controls['street'];
     city$.valueChanges.debounceTime(1000).distinctUntilChanged().subscribe(cityValue => {
         this.msg = cityValue + ' 欢迎你!';
     });
     this.myForm.valueChanges.subscribe(x => this.changeMsg = { event: 'Form DATA CHANGED', object: x });
  }
  //debounceTime(1000)是指当用户修改输入的值以后，过1000毫秒才会触发后面的处理方法。
  //distinctUntilChanged()是指如果用户如果在1000毫秒内，输入了一个字符，又删掉了，那么输入的值应该没有改变，这种情况下，后面的处理方法就不会被触发。
  //subscribe()就是注册一个处理方法，就是当有数据发生改变的时候，需要出发的方法。在这个方法里，当用户输入了一个新的城市名以后，就会更新街道的值也为这个城市名，同时下面的显示信息也相应改变。

  onSubmit(myForm){
    console.log(myForm);
    console.log(myForm.value);
  }

  reset(myForm){
    myForm.reset();
    return false;
  }

  get changeMsgInfo(){
    return JSON.stringify(this.changeMsg);
  }

}

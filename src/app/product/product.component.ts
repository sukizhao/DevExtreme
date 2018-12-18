import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 声明一个流，负责接收服务器上传过来的流
  dataSource: Observable<any>;

  // 用来和模版做数据绑定的数组
  myproducts: Array<any> = [];

  // 将angular的服务依赖注入进来
  constructor(private http: Http) {
    this.dataSource = this.http.get('/product')
      .map((res) => res.json());
  }

  ngOnInit() {
    // 订阅流
    this.dataSource.subscribe(
      // 把订阅到的数据传给myproducts属性
      (data) => this.myproducts = data
    )
  }

}
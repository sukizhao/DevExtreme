import { Component, OnInit, NgModule, } from '@angular/core';
// 由于app.module里面已经导入模块，所以此处不用再导入模块了 
// import { Injectable } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { DxSelectBoxModule, DxPopupModule, DxButtonModule, DxTemplateModule, DxFormModule } from 'devextreme-angular';
@Component({
  selector: 'app-devextreme',
  templateUrl: './devextreme.component.html',
  styleUrls: ['./devextreme.component.css']
})
export class DevextremeComponent implements OnInit {
  selectAllModeVlaue: string = "page";
  selectionModeValue: string = "all";
  selectedItems: any;
  products = [
    { 'id': 1, 'name': 'suki1' },
    { 'id': 2, 'name': 'suki2' },
    { 'id': 3, 'name': 'suki3' },
    { 'id': 4, 'name': 'suki4' },

  ];
  products1 = [];
  mytext = "1230";
  all = "all";
  username: any;
  id: number = 1;
  login: any = [{ "username": "username" + this.id, "password": "pwd" + this.id }];
  constructor() { }

  ngOnInit() {
  }

  updateSelectedItems = function (e) {
    this.selectedItems = e.component.option("selectedItems");
    // console.log(selectedItems);
    this.products1 = this.selectedItems;
  };
  deletItem(e) {
    let i = this.products1.indexOf(e);
    this.products1.splice(i, 1);
  }


  addInput() {
    console.log('点击');
    console.log(this.login);
    let number = this.login.length + 1;
    this.login.push({ "username": "username" + number, "password": "pwd" + number });
    console.log(this.login);
  }

  removeInput(item: any) {
    console.log(item);
    let i = this.login.indexOf(item);
    console.log(i);
    this.login.splice(i, 1);
  }

}
// @NgModule({
//   imports: [
//     BrowserModule,
//     DxSelectBoxModule,
//     DxPopupModule,
//     DxButtonModule,
//     DxTemplateModule,
//     DxFormModule
//   ],
//   exports: [DevextremeComponent],
//   declarations: [DevextremeComponent],
// })
// // 必须用Injectable才能不报错
// @Injectable()
// export class DevextremeModule {

// }
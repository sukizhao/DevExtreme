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
  products = [
    { 'id': 1, 'name': 'suki1' },
    { 'id': 2, 'name': 'suki2' },
    { 'id': 3, 'name': 'suki3' },
    { 'id': 4, 'name': 'suki4' },

  ];
  mytext = "1230";
  all = "all";
  constructor() { }

  ngOnInit() {
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
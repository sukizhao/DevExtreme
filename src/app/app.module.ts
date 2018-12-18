import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, JsonpModule } from '@angular/http';  /*数据请求模块*/
import {
  DxSelectBoxModule,
  DxTextAreaModule,
  DxDateBoxModule,
  DxListModule,
  DxFormModule,
} from 'devextreme-angular';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './product/product.component';
import { DevextremeComponent } from './components/devextreme/devextreme.component';
// import { DevextremeModule } from './components/devextreme/devextreme.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ProductComponent,
    DevextremeComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    BrowserModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxListModule,
    HttpModule,
    JsonpModule,
    // DevextremeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);


按照 Devextreme 的官方文档, 首次使用 devextreme

https://js.devexpress.com/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/

 

1 创建 Angular项目,   

　　ng new test

2 安装 devextreme

　　npm install --save devextreme devextreme-angular

3 在 app.module.ts 引用一个按钮

　　

import { DxButtonModule } from "devextreme-angular";

@NgModule({
...
imports: [
...
DxButtonModule,
...
]
})
export class AppModule {}

 

4 执行 ng serve 然后出错了

ERROR in ./node_modules/jszip/lib/readable-stream-browser.js

Module not found: Error: Can't resolve 'stream' in 'D:\Project\Work\Quotes2\quotes\node_modules\jszip\lib'

 

查找错误原因, 找到官方的解决方案

{
  ...
  "compilerOptions": {
    ...
    "paths": {
      "jszip": [
        "node_modules/jszip/dist/jszip.min.js"
      ]
    }
  }
}

https://www.devexpress.com/Support/Center/Question/Details/T632535/a-project-s-compilation-fails-with-the-can-t-resolve-stream-error-in-angular-6

 

至此问题解决, 编译通过.












# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

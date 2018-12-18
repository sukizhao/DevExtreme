import { Component, OnInit } from '@angular/core';

import { Http, Jsonp, Headers } from '@angular/http';  /*数据请求模块*/


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public list: any[];
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private jsonp: Jsonp, ) {

  }

  ngOnInit() {
  }
  requestData() {
    var url = "/appapi.php?a=getPortalList&catid=20&page=1";
    this.http.get(url).subscribe(function (data) {

      console.log(JSON.parse(data['_body']));


    }, function (err) {

      console.log(err);
    })
  }



}

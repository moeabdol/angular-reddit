import { Component, OnInit, HostBinding, Input } from "@angular/core";

import { Article } from "./article";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @HostBinding("attr.class") cssClass = "row";
  @Input() article: Article;

  constructor() {
    this.article = new Article("Angular 2", "http://angular.io", 10);
  }

  ngOnInit() {
  }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
}

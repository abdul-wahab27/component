import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-posts-comments",
  templateUrl: "./posts-comments.component.html",
  styleUrls: ["./posts-comments.component.css"],
})
export class PostsCommentsComponent implements OnInit {
  @Input() comments: any = {};

  constructor() {}

  ngOnInit(): void {}
}

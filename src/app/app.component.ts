import { Component } from "@angular/core";
import { json } from "src/json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "component-app";
  heading = "This is angular app";
  data: any[] = json;
  inputpost: any = json[0];
}

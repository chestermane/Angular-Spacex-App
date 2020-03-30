import { Component, OnInit } from "@angular/core";
import { SpacexService } from "../services/spacex.service";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private spacexService: SpacexService) {}

  ngOnInit() {
   
  }

  ngOnDestroy() {

  }
}

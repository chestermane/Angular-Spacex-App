import { Component, OnInit } from "@angular/core";
import { SpacexService } from "../services/spacex.service";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { Launch } from "../../models/Launch";

@AutoUnsubscribe()
@Component({
  selector: "app-missions",
  templateUrl: "./missions.component.html",
  styleUrls: ["./missions.component.scss"]
})
export class MissionsComponent implements OnInit {
  constructor(private spacexService: SpacexService) {}

  recentLaunches: Launch[];
  offset: number = 0;

  ngOnInit() {
    this.getRecentFlights();
  }

  getRecentFlights(offset: number = this.offset) {
    this.offset += offset;
    if (this.offset < 0) {
      return;
    } else {
      this.spacexService.getFlight(this.offset).subscribe(flight => {
        console.log(flight);
        this.recentLaunches = flight;
      });
    }
  }


  ngOnDestroy() {}
}

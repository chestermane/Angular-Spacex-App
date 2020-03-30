import { Component, OnInit, AfterContentInit } from "@angular/core";
import { SpacexService } from "../services/spacex.service";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { Launch } from "../../models/Launch";


@AutoUnsubscribe()
@Component({
  selector: "app-all-flights",
  templateUrl: "./all-flights.component.html",
  styleUrls: ["./all-flights.component.scss"]
})
export class AllFlightsComponent implements OnInit {
  constructor(private spacexService: SpacexService) {}

  allLaunches: Launch[];

  ngOnInit() {
    this.spacexService.getAllFlight().subscribe(flight => {
      console.log(flight);
      this.allLaunches = flight;
    });
  }

  ngOnDestroy() {}
}

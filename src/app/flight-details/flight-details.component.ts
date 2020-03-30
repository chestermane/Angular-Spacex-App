import { Component, OnInit } from "@angular/core";
import { SpacexService } from "../services/spacex.service";
import { ActivatedRoute } from "@angular/router";
import { Launch } from "../../models/Launch";
import { SanitizePipe } from "../../pipes/sanitize.pipe";
import * as moment from "moment";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: "app-flight-details",
  templateUrl: "./flight-details.component.html",
  styleUrls: ["./flight-details.component.scss"]
})
export class FlightDetailsComponent implements OnInit {
  constructor(
    private spacexService: SpacexService,
    private route: ActivatedRoute,
    private safe: SanitizePipe
  ) {}

  flightDetails: Launch;
  safeURL: any;
  launchDate: string;

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getFlightDetails(routeParams.id);
    });
  }

  getFlightDetails(flight_number) {
    this.spacexService.getFlightDetails(flight_number).subscribe(flight => {
      this.flightDetails = flight;
      this.sanitizeURL(this.flightDetails.links.youtube_id);
      this.launchDate = moment(this.flightDetails.launch_date_local).format(
        "MMMM DD YYYY"
      );
    });
  }

  sanitizeURL(url: string) {
    this.safe.transform(url);
    this.safeURL = url;
  }

  ngOnDestroy() {}
}

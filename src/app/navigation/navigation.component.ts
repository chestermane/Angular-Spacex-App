import { Component, OnInit } from "@angular/core";
import { SpacexService } from "../services/spacex.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  missions = [];
  autocompleteMatches = [];
  searchStr: string;

  constructor(private spaceXService: SpacexService, private router: Router,) {}

  ngOnInit() {
  
  
  }

  getLaunches() {
    if (this.missions.length > 0) {
      return;
    } else {
      this.spaceXService.searchMission(this.searchStr).subscribe(mission => {
        this.missions = mission;
      });
    }
  }

  missionSearch(event: any) {
    if(event.target.value.length === 0){
      this.autocompleteMatches = [];
      return;
    } 
    this.searchStr = event.target.value.toLowerCase();
    this.autocompleteMatches = this.missions.filter(mission => {
      const regexSearch = new RegExp("^" + this.searchStr, "gi");
      return mission.mission_name.match(regexSearch);
    });
    console.log(this.autocompleteMatches);
  }

  clickToLaunch(flight_number) {
    this.autocompleteMatches = [];
    this.router.navigate([`/flight/${flight_number}`]);
  }
}

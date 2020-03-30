import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Launch } from "../../models/Launch";
import { Observable, pipe } from "rxjs";
import { map, repeat } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpacexService {
  constructor(private http: HttpClient) {}

  launches: Observable<Launch[]>;
  launch: Observable<Launch>;

  getFlight(offset: number = 0): Observable<Launch[]> {
    return this.http
      .get(
        "https://api.spacexdata.com/v3/launches/past?order=desc&limit=2&offset=" +
          offset
      )
      .pipe(
        map((response: Launch[]) => {
          return response.map((launch: Launch) => {
            return {
              flight_number: launch.flight_number,
              mission_name: launch.mission_name,
              launch_date_local: launch.launch_date_local,
              details: launch.details,
              rocket: launch.rocket,
              links: launch.links,
              youtube_id: launch.links.youtube_id
            };
          });
        })
      );
  }

  getFlightDetails(flight_number: number): Observable<any> {
    return this.http.get<any>(
      `https://api.spacexdata.com/v3/launches/${flight_number}`
    );
  }

  getAllFlight(): Observable<Launch[]> {
    return this.http.get<Launch[]>(
      "https://api.spacexdata.com/v3/launches/past?order=desc"
    );
  }

  getUpcomingFlight(): Observable<any> {
    return this.http.get(
      "https://api.spacexdata.com/v3/launches/upcoming?order=desc"
    );
  }

  searchMission(searchStr: string): Observable<any> {
    return this.http.get(
      `https://api.spacexdata.com/v3/launches?filter=mission_name,flight_number`
    );
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SpacexService } from "./services/spacex.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { MissionsComponent } from "./missions/missions.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AllFlightsComponent } from "./all-flights/all-flights.component";
import { AboutComponent } from "./about/about.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FlightDetailsComponent } from "./flight-details/flight-details.component";
import { SanitizePipe } from "../pipes/sanitize.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    FooterComponent,
    MissionsComponent,
    NotFoundComponent,
    AllFlightsComponent,
    AboutComponent,
    FlightDetailsComponent,
    SanitizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [SpacexService, SanitizePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

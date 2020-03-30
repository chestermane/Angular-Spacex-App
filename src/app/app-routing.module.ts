import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AllFlightsComponent } from "./all-flights/all-flights.component";
import { AboutComponent } from "./about/about.component";
import { FlightDetailsComponent } from "./flight-details/flight-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "allflights", component: AllFlightsComponent },
  { path: "flight/:id", component: FlightDetailsComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

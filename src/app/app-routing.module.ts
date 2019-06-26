import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainHeaderComponent } from "./main-header/main-header.component";
import { SubHeaderComponent } from "./sub-header/sub-header.component";
import { EventDetailsComponent } from "./sub-header/event-details/event-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "events", component: SubHeaderComponent },
  { path: 'event/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

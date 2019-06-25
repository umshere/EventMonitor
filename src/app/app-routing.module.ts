import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainHeaderComponent } from "./main-header/main-header.component";
import { SubHeaderComponent } from "./sub-header/sub-header.component";

const routes: Routes = [{ path: "event", component: SubHeaderComponent },
{ path: '', redirectTo: '/event', pathMatch: 'full' }];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

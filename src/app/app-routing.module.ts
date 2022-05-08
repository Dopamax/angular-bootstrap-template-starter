import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainDashboardComponent } from './Pages/main-dashboard/main-dashboard.component';
import { TeamMembersComponent } from './Pages/team-members/team-members.component';


const routes: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'Team-members', component: TeamMembersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
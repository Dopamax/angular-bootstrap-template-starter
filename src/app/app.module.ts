import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarItemListComponent } from './Components/Dashboard/sidebar-item-list/sidebar-item-list.component';
import { SidebarComponent } from './Components/Dashboard/sidebar/sidebar.component';
import { IconsModule } from './Modules/icons/icons.module';
import { NavbarComponent } from './Components/Dashboard/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainDashboardComponent } from './Pages/main-dashboard/main-dashboard.component';
import { TeamMembersComponent } from './Pages/team-members/team-members.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarItemListComponent,
    SidebarComponent,
    NavbarComponent,
    MainDashboardComponent,
    TeamMembersComponent
  ],
  imports: [
    BrowserModule,
    IconsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

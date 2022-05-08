import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {
  users:any[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
    /*this.users.push({id:0,"firstName":"Ahmed","lastName":"Salmi"})
    this.users.push({id:1,"firstName":"Jomani","lastName":"Latifa"})
    this.users.push({id:2,"firstName":"Abd el moula","lastName":"Hakor"})
    this.users.push({id:3,"firstName":"Fohami","lastName":"Rachid"})*/
    console.log(this.users);
    

  }

  getUsers(){
    this.http.get('https://random-data-api.com/api/users/random_user?size=10')
    .subscribe((res:any)=>{
      this.users=res;
    })
  }

}

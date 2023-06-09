import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users:any;
  constructor(private http:HttpClient,private accountService:AccountService){}
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  getUsers(){
    this.http.get("https://localhost:7158/api/users").subscribe({
      next:observer=>this.users=observer,
      error: error=>console.log(error),
      complete:()=>console.log("api completed")
    })

  }
  setCurrentUser(){
    const userString= localStorage.getItem('user');
    if(!userString) return;
    const user:User=JSON.parse(userString);
  }
}

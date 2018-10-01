import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HttpClient
  ],
})

export class AppComponent {
  title = 'users-spa';
  users = [{
		name:'users',
		email:'test@test.com',
		role:'admin'
	},
	{
		name:'1',
		email:'1',
		role:'1'

	},
	{
		name:'2',
		email:'2',
		role:'2'
	}
	]

  constructor(private http: HttpClient) { 
  	this.http.get('http://localhost:3000/api/v1/users').subscribe(resp => {
  		console.log('123123123')
  		console.log resp
  	})
  }

  ngOnInit() {
  	console.log '!!@3', this.http.get('http://example.com')
  }
}

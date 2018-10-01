import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  constructor() { console.log('123123123') }
}


// export class HeroesComponent implements OnInit {
 
//   heroes = HEROES;
//   selectedHero: Hero;
 
  
 
//   ngOnInit() {
//   }
 
//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
// }
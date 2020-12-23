import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nba-manager';

  public readonly routes: any[] = [
    {link: '/', displayName: 'Home'},
    {link: '/teams', displayName: 'Teams'},
    {link: '/players', displayName: 'Players'},
    {link: '/games', displayName: 'Games'}
    ];
}

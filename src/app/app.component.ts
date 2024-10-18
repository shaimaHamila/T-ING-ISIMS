import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sessionName: string = 'Formation web';
  firstSession = {
    name: 'Formation web',
    subtitle: 'MEAN Stack',
    date: 'Prévue du 11/06/2023 au 15/06/2023',
    location: 'Lyon',
  };
}

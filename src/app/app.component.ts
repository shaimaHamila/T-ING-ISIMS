import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sessionName: string = 'Formation web';
  session = {
    id: 1,
    name: 'Formation web',
    subtitle: 'MEAN Stack',
    date: 'Prévue du 11/06/2023 au 15/06/2023',
    location: 'Lyon',
    participant: 0,
  };
  totalParticipants: number = this.session.participant;

  updateTotalParticipants(newParticipantCount: number) {
    this.totalParticipants = newParticipantCount;
  }
}

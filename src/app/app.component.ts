import { Component } from '@angular/core';
import { Session } from './session-item/session-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  sessionName: string = 'Formation web';
  oldSessions = [
    {
      name: 'Formation Web',
      date: '11/06/2023 au 15/06/2023',
      location: 'Sousse',
    },
    {
      name: 'Formation Mobile',
      date: '01/07/2023 au 05/07/2023',
      location: 'Sfax',
    },
    {
      name: 'Formation UX',
      date: '01/07/2023 au 05/07/2023',
      location: 'Sousse',
    },
  ];
  sessions: Session[] = [
    {
      id: 1,
      name: 'Formation Web',
      subtitle: 'MEAN Stack',
      date: '11/06/2023 au 15/06/2023',
      location: 'Sousse',
      participant: 0,
      selectedMode: 'online',
    },
  ];
  // Calculate the total number of participants from all sessions
  totalParticipants: number = this.sessions.reduce(
    (sum, session) => sum + session.participant,
    0,
  );
  updateTotalParticipants(newParticipantCount: number) {
    this.totalParticipants = newParticipantCount;
  }
  updateMode(session: any, newMode: string) {
    session.selectedMode = newMode;
    console.log('Mode de formation mis à jour:', newMode);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
export interface Session {
  id: number;
  name: string;
  subtitle: string;
  date: string;
  location: string;
  selectedMode: 'onsite' | 'online';
  participant: number;
}
export type SessionMode = 'onsite' | 'online';
@Component({
  selector: 'session-item',
  templateUrl: './session-item.component.html',
})
export class SessionItemComponent {
  @Input() couleur: string = 'red';
  @Input() session!: Session;
  @Output() participantChange = new EventEmitter<number>();
  @Output() modeChange = new EventEmitter<string>();
  inscrire(): void {
    this.session.name = 'Formation Web Avancé';
    console.log('Nouvelle inscription');
    this.session.participant++;
    this.participantChange.emit(this.session.participant);
    console.log(this.session.participant + 'Participant : ');
  }
  // Emit the selected mode when it's changed
  onModeChange(mode: string): void {
    this.session.selectedMode = mode as SessionMode;
    this.modeChange.emit(this.session.selectedMode);
  }
}

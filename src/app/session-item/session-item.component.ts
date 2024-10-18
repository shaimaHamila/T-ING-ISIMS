import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'session-item',
  templateUrl: './session-item.component.html',
  styleUrl: './session-item.component.scss',
})
export class SessionItemComponent {
  // @Input() name: string = 'Formation web';
  @Input() couleur: string = 'Red';
  @Input() name!: string;
  @Input() subtitle!: string;
  @Input() date!: string;
  @Input() location!: string;
  @Input() participant!: number;
  @Output() participantChange = new EventEmitter<number>();

  inscrire(): void {
    this.name = 'Formation Web Avancé';
    console.log('Nouvelle inscription');
    this.participant++;
    this.participantChange.emit(this.participant);
    console.log(this.participant + 'Participant : ');
  }
}

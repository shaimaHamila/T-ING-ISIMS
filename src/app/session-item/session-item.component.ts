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
  @Input() selectedMode!: string;
  @Input() participant!: number;
  @Output() participantChange = new EventEmitter<number>();
  @Output() modeChange = new EventEmitter<string>();
  inscrire(): void {
    this.name = 'Formation Web Avancé';
    console.log('Nouvelle inscription');
    this.participant++;
    this.participantChange.emit(this.participant);
    console.log(this.participant + 'Participant : ');
  }
  // Emit the selected mode when it's changed
  onModeChange(mode: string): void {
    this.selectedMode = mode;
    this.modeChange.emit(this.selectedMode);
  }
}

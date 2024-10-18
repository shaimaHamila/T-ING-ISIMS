import { Component, Input } from '@angular/core';

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
}

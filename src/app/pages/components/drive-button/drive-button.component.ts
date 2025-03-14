import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drive-button',
  imports: [],
  templateUrl: './drive-button.component.html',
  styleUrl: './drive-button.component.scss'
})
export class DriveButtonComponent {
    @Input() linkToDrive: string = '';
    @Input() name: string = '';
    @Input() id: string = '';


}

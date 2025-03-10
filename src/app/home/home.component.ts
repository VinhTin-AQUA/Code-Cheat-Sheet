import { Component } from '@angular/core';
import { items } from './items.data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    items = items

    constructor(){}

    ngOnInit() {}
}

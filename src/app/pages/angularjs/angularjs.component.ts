import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-angularjs',
  imports: [RouterOutlet, SideBarComponent, HeaderComponent],
  templateUrl: './angularjs.component.html',
  styleUrl: './angularjs.component.scss'
})
export class AngularjsComponent {
    showSidebar: boolean = true;


	receiveData(data: boolean) {
		this.showSidebar = data;
	}
}

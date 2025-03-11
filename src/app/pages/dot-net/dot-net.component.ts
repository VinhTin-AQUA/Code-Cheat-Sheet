import { Component } from '@angular/core';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { dotnetRouterData } from './data/dotnet.router-data';

@Component({
	selector: 'app-dot-net',
	imports: [SideBarComponent, HeaderComponent],
	templateUrl: './dot-net.component.html',
	styleUrl: './dot-net.component.scss',
})
export class DotNetComponent {
	showSidebar: boolean = true;
	content: string = ``;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe({
			next: (params: any) => {
				// console.log(params); // {id: '2', name: 'hoc'}
				this.content = dotnetRouterData(params.id);
			},
		});
	}

	receiveData(data: boolean) {
		this.showSidebar = data;
	}
}

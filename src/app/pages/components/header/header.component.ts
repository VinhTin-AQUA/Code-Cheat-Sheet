import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-header',
	imports: [RouterLink],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	@Input() headerType: string = 'dotnet';
	title: string = '.NET';
	showSidebar: boolean = true;

	@Output() dataEmitter = new EventEmitter<boolean>();

	ngOnInit() {
		switch (this.headerType) {
			case 'dotnet':
				this.title = '.NET';
				break;
			case 'angular':
				this.title = 'Angular';
				break;
			default:
				this.title = '.NET';
		}
	}

	onShowSideBar() {
		this.showSidebar = !this.showSidebar;
		this.dataEmitter.emit(this.showSidebar);
	}

	@HostListener('window:resize', [])
	onResize() {
		this.checkScreenSize();
	}

	private checkScreenSize() {
		const check = window.innerWidth < 640;

		if (check === true && this.showSidebar === true) {
			this.showSidebar = false;
			this.dataEmitter.emit(false);
		} else if (check === false && this.showSidebar === false) {
			this.showSidebar = true;
			this.dataEmitter.emit(true);
		}
	}
}

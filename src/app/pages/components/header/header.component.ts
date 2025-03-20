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
	showSubSidebar: boolean = true;

	@Output() dataEmitter = new EventEmitter<boolean>();
	@Output() dataShowSubSidebar = new EventEmitter<boolean>();

	ngOnInit() {
		this.checkSidebarInit();

		switch (this.headerType) {
			case 'dotnet':
				this.title = '.NET';
				break;
			case 'angular':
				this.title = 'Angular';
				break;
			case 'bot':
				this.title = 'Bot';
				break;
			case 'docker':
				this.title = 'Docker';
				break;
			case 'nginx':
				this.title = 'Nginx';
				break;
			case 'ngrok':
				this.title = 'Ngrok';
				break;
			case 'flutter':
				this.title = 'Flutter';
				break;
			case 'nestjs':
				this.title = 'NestJS';
				break;
			default:
				this.title = '.NET';
		}
	}

	onShowSideBar() {
		this.showSidebar = !this.showSidebar;
		this.dataEmitter.emit(this.showSidebar);
	}

	onShowSubSidebar() {
		this.showSubSidebar = !this.showSubSidebar;
		this.dataShowSubSidebar.emit(this.showSubSidebar);
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

		if (check === true && this.showSubSidebar === true) {
			this.showSubSidebar = false;
			this.dataShowSubSidebar.emit(false);
		} else if (check === false && this.showSubSidebar === false) {
			this.showSubSidebar = true;
			this.dataShowSubSidebar.emit(true);
		}
	}

	private checkSidebarInit() {
		const check = window.innerWidth < 640;

		if (check === true && this.showSidebar === true) {
			this.showSidebar = false;
		} else if (check === false && this.showSidebar === false) {
			this.showSidebar = true;
		}

		if (check === true && this.showSubSidebar === true) {
			this.showSubSidebar = false;
		} else if (check === false && this.showSubSidebar === false) {
			this.showSubSidebar = true;
		}
	}
}

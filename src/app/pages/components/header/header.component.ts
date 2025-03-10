import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	title: string = '.NET';
	showSidebar: boolean = true;

	@Output() dataEmitter = new EventEmitter<boolean>();

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

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { dotnetMenus } from './menus';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-side-bar',
	imports: [CommonModule, RouterLink],
	templateUrl: './side-bar.component.html',
	styleUrl: './side-bar.component.scss',
	animations: [
		trigger('submenuAnimation', [
			transition(':enter', [
				style({ height: '0px', opacity: 0 }),
				animate('300ms ease-out', style({ height: '*', opacity: 1 })),
			]),
			transition(':leave', [animate('300ms', style({ height: '0px', opacity: 0 }))]),
		]),
	],
})
export class SideBarComponent {
	@Input() showSidebar: boolean = true;
    show = true;
	dotnetMenus: any = dotnetMenus;

	constructor() {}

	ngOnInit() {
		for (let i of dotnetMenus) {
			i.showSubMenu = false;
		}
	}

	onShowSubMenu(item: any) {
		if (item.showSubMenu === null || item.showSubMenu === undefined) {
			return;
		}
		item.showSubMenu = !item.showSubMenu;
	}
}

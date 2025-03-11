import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { angularMenus, dotnetMenus } from './menus';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-side-bar',
	imports: [CommonModule, RouterLink, RouterLinkActive],
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
	@Input() menuType: string = 'dotnet';
	show = true;
	menus: any = dotnetMenus;

	constructor() {}

	ngOnInit() {
		switch (this.menuType) {
			case 'dotnet':
				this.menus = dotnetMenus;
				break;
			case 'angular':
				this.menus = angularMenus;
				break;
			default:
				this.menus = dotnetMenus;
		}

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

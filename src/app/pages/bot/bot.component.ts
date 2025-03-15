import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { botCodes as codes } from './bot-codes';
import { CommonModule } from '@angular/common';
import { DriveButtonComponent } from '../components/drive-button/drive-button.component';
import { CodeBlocksComponent } from '../components/code-blocks/code-blocks.component';
import { HeaderComponent } from '../components/header/header.component';
import { SideBarComponent } from '../components/side-bar/side-bar.component';

@Component({
	selector: 'app-bot',
	imports: [
		CommonModule,
		DriveButtonComponent,
		CodeBlocksComponent,
		HeaderComponent,
		SideBarComponent,
	],
	templateUrl: './bot.component.html',
	styleUrl: './bot.component.scss',
})
export class BotComponent {
	showSidebar: boolean = true;
	showSubSidebar: boolean = true;
	codes: any;
	isOutlet: boolean = false;
	@ViewChild('contentContainer') contentContainer!: ElementRef;

	constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.checkSidebarInit();

		this.activatedRoute.params.subscribe({
			next: (params: any) => {
				// console.log(params); // {id: '2', name: 'hoc'}

				if (params.id in codes) {
					this.codes = codes[params.id as keyof typeof codes];
				} else {
					this.router.navigateByUrl('/');
				}
			},
		});
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

	receiveData(data: boolean) {
		this.showSidebar = data;
	}

	onDataShowSubSidebar(data: boolean) {
		this.showSubSidebar = data;
	}

	scrollTo(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			this.contentContainer.nativeElement.scrollTo({
				top: element.offsetTop,
				behavior: 'smooth',
			});
		}
	}
}

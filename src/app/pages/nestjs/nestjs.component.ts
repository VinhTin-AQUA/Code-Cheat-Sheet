import { Component, ElementRef, ViewChild } from '@angular/core';
import { nestjsCodes as codes } from './nestjs-codes';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DriveButtonComponent } from '../components/drive-button/drive-button.component';
import { HeaderComponent } from '../components/header/header.component';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeBlocksComponent } from '../components/code-blocks/code-blocks.component';

@Component({
	selector: 'app-nestjs',
	imports: [
		SideBarComponent,
		HeaderComponent,
		CommonModule,
		HighlightModule,
		CodeBlocksComponent,
		DriveButtonComponent,
	],
	templateUrl: './nestjs.component.html',
	styleUrl: './nestjs.component.scss',
})
export class NestjsComponent {
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

	copyCode(codeText: any) {
		navigator.clipboard.writeText(codeText).then(() => {
			alert('Đã sao chép vào clipboard! 🎉');
		});
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

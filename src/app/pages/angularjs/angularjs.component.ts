import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { codes } from './angular-codes';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'app-angularjs',
	imports: [SideBarComponent, HeaderComponent, HighlightModule],
	templateUrl: './angularjs.component.html',
	styleUrl: './angularjs.component.scss',
})
export class AngularjsComponent {
	showSidebar: boolean = true;
	codes: any;
	isOutlet: boolean = false;
	@ViewChild('contentContainer') contentContainer!: ElementRef;

	constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe({
			next: (params: any) => {
				// console.log(params); // {id: '2', name: 'hoc'}

				if (params.id in codes) {
					this.codes = codes[params.id as keyof typeof codes];
				} else {
					this.router.navigateByUrl('/angular-js/fast-code');
				}
			},
		});
	}

	receiveData(data: boolean) {
		this.showSidebar = data;
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

import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import {
	directiveCustomCodes,
	fastCodes,
	guardCodes,
	interceptorCodes,
	layoutCodes,
	pipeCodes,
	provideConfigCodes,
} from './codes';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'app-angularjs',
	imports: [RouterOutlet, SideBarComponent, HeaderComponent, HighlightModule],
	templateUrl: './angularjs.component.html',
	styleUrl: './angularjs.component.scss',
})
export class AngularjsComponent {
	showSidebar: boolean = true;
	codes: any;
	isOutlet: boolean = false;
	@ViewChild('contentContainer') contentContainer!: ElementRef;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe({
			next: (params: any) => {
				// console.log(params); // {id: '2', name: 'hoc'}
				// this.content = dotnetRouterData(params.id);
				this.selectCodes(params.id);
			},
		});
	}

	private selectCodes(id: string) {
		switch (id) {
			case 'provide-config':
				this.codes = provideConfigCodes;
				break;
			case 'fast-code':
				this.codes = fastCodes;
				break;
			case 'directive-custom':
				this.codes = directiveCustomCodes;
				break;
			case 'guard':
				this.codes = guardCodes;
				break;
			case 'interceptors':
				this.codes = interceptorCodes;
				break;
			case 'pipe':
				this.codes = pipeCodes;
				break;
			case 'layouts':
				this.codes = layoutCodes;
				break;
			default:
				this.codes = fastCodes;
		}
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

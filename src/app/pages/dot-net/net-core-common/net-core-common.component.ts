import { Component, ElementRef, ViewChild } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { codes } from './code';

@Component({
	selector: 'app-net-core-common',
	imports: [HighlightModule],
	templateUrl: './net-core-common.component.html',
	styleUrl: './net-core-common.component.scss',
})
export class NetCoreCommonComponent {
	codes: any = codes;

	@ViewChild('contentContainer') contentContainer!: ElementRef;

	constructor() {}

	ngOnInit() {}

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

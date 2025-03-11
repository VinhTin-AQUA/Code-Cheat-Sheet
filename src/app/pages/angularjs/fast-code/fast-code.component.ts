import { Component, ElementRef, ViewChild } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { codes } from './codes';

@Component({
	selector: 'app-fast-code',
	imports: [HighlightModule],
	templateUrl: './fast-code.component.html',
	styleUrl: './fast-code.component.scss',
})
export class FastCodeComponent {
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

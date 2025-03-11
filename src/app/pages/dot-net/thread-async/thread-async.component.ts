import { Component, ElementRef, ViewChild } from '@angular/core';
import { codes } from './codes';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'app-thread-async',
	imports: [HighlightModule],
	templateUrl: './thread-async.component.html',
	styleUrl: './thread-async.component.scss',
})
export class ThreadAsyncComponent {
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

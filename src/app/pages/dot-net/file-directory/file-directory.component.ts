import { Component, ElementRef, ViewChild } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { codes } from './data';

@Component({
	selector: 'app-file-directory',
	imports: [HighlightModule],
	templateUrl: './file-directory.component.html',
	styleUrl: './file-directory.component.scss',
})
export class FileDirectoryComponent {
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

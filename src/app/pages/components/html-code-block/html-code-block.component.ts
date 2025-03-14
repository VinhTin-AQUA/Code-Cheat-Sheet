import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
	selector: 'app-html-code-block',
	imports: [HighlightModule, CommonModule],
	templateUrl: './html-code-block.component.html',
	styleUrl: './html-code-block.component.scss',
})
export class HtmlCodeBlockComponent {
	@Input() name: string = '';
	@Input() codeBlocks: any = [];
	@Input() id: string = '';
	@Input() preview: string = '';

	sanitizedHtml!: SafeHtml;

	constructor(private sanitizer: DomSanitizer) {}

	ngOnInit() {
		this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(this.preview);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['preview']) {
			this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(this.preview);
		}
	}

	copyCode(codeText: any) {
		navigator.clipboard.writeText(codeText).then(() => {
			alert('Đã sao chép vào clipboard! 🎉');
		});
	}
}

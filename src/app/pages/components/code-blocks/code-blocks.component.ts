import { Component, Input } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-blocks',
  imports: [HighlightModule],
  templateUrl: './code-blocks.component.html',
  styleUrl: './code-blocks.component.scss'
})
export class CodeBlocksComponent {
    @Input() codeBlocks: any = []
    @Input() id: string = '';
    @Input() name: string = '';

    copyCode(codeText: any) {
		navigator.clipboard.writeText(codeText).then(() => {
			alert('Đã sao chép vào clipboard! 🎉');
		});
	}
}

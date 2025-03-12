export const directiveCustomCodes = [
	{
		id: 'dinh-nghia',
		name: 'Định nghĩa',
		codeBlocks: [
			{
				name: 'Định nghĩa',
				language: 'text',
				code: `    - Là những attribute của 1 thẻ html
    - Là những directive được angular xây dụng sẵn.
    - Directive được angular xây dựng sẵn: NgClass , NgStyle , NgModel`,
			},
		],
	},
	{
		id: 'directive-custom',
		name: 'Directive custom',
		codeBlocks: [
			{
				name: 'Tạo directive',
				language: 'shell',
				code: `    ng g d HightLight`,
			},
			{
				name: 'Code',
				language: 'typescript',
				code: `    import { Directive, ElementRef } from '@angular/core';

    @Directive({
    selector: '[appHightLight]',
    })
        export class HightLightDirective {
        constructor(private el: ElementRef) {
            this.el.nativeElement.style.backgroundColor = 'yellow';
        }
    }`,
			},
			{
				name: 'Cách sử dụng',
				language: 'html',
				code: `    <h3 appHightLight>Hello world</h3>`,
			},
			{
				name: 'Thêm xử lý sự kiện',
				language: 'typescript',
				code: `    import { Directive, ElementRef, HostListener } from '@angular/core';

    @Directive({
        selector: '[appHightLight]',
    })
    export class HightLightDirective {
        constructor(private el: ElementRef) {
            this.el.nativeElement.style.backgroundColor = 'yellow';
        }

        private fontWeight(isBold: boolean) {
            isBold === true
            ? (this.el.nativeElement.style.fontWeight = 'bold')
            : (this.el.nativeElement.style.fontWeight = 'normal');
        }

        @HostListener('mouseenter') onMouseEnter() {
            this.fontWeight(true);
        }

        @HostListener('mouseleave') onMouseLeave() {
            this.fontWeight(false);
        }
    }`,
			},
		],
	},
];
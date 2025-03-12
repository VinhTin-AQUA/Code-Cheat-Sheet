export const pipeCodes = [
	{
		id: 'dinh-nghia',
		name: 'Định nghĩa',
		codeBlocks: [
			{
				name: 'Định nghĩa',
				language: 'text',
				code: `    - Pipe được sử dụng để ứng dụng tự động chuyển đổi các giá trị như: tiền tệ, định dạng ngày tháng`,
			},
			{
				name: 'Link tham khảo',
				language: 'text',
				code: `    https://v17.angular.io/guide/pipe-template`,
			},
		],
	},
	{
		id: 'cach-su-dung-pipe-thuong-gao',
		name: 'Cách sử dụng Pipe thường gặp',
		codeBlocks: [
			{
				name: 'Áp dụng Pipe trong HTML',
				language: 'html',
				code: `    <h2>{{ var_name | uppercase }}</h2>
    <h2>{{ var_one | date:"Fulldate"}}</h2>
    <h2>{{ var_one | date:"Shortdate"}}</h2>
    <h2>{{ var_one | date:"Middiumdate"}}</h2>
    <h2>{{ var_one | date:"DD-MM-YY"}}</h2>
    <h2>{{ var_one | date:"HH-MM--SS"}}</h2>`,
			},
			{
				name: 'Áp dụng nhiều PIPE cùng lúc',
				language: 'html',
				code: `    <p>{{3.5 | ceil | toFixed:0}}</p>`,
			},
		],
	},
	{
		id: 'custom-pipe-1-tham-so',
		name: 'Custom Pipe 1 tham số',
		codeBlocks: [
			{
				name: 'Tạo Pipe',
				language: 'shell',
				code: `    ng g p Name –skip-tests`,
			},
			{
				name: 'Nội dung Pipe',
				language: 'typescript',
				code: `    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
        name: 'floor'
    })
        export class FloorPipe implements PipeTransform {
        // làm tròn xuống
        transform(value: any): unknown {
            return Math.floor(value);
        }
    }`,
			},
			{
				name: 'Cách sử dụng',
				language: 'html',
				code: `    <span class="text-[0.9em] text-blue-600">{{ city.vote | floor }}</span>`,
			},
		],
	},
	{
		id: 'custom-pipe-nhieu-tham-so',
		name: 'Custom pipe nhiều tham số',
		codeBlocks: [
			{
				name: 'Tạo pipe chứa nhiều tham số',
				language: 'typescript',
				code: `    @Pipe({
        name: 'star'
    })
    export class StarPipe implements PipeTransform {
        transform(value: number, param1: number, params2: string): number {
            // code xử lý
            return Math.floor(value);
        }
    }`,
			},
			{
				name: 'Sử dụng',
				language: 'html',
				code: `    <span class="text-[0.9em] text-blue-600">{{ city.vote | star : 0 : '' }}</span>`,
			},
		],
	},
];

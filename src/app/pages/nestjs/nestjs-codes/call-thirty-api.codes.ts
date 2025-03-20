export const callApiAxiosCodes = [
	{
		id: 'callapiaxioscodes',
		name: 'Gọi API bên thứ 3',
		codeBlocks: [
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    npm install axios @nestjs/axios`,
			},
		],
	},
    {
		id: 'su-dung',
		name: 'Sử dụng',
		codeBlocks: [
			{
				name: 'Import module',
				language: 'typescript',
				code: `    import { Module } from '@nestjs/common';
    import { HttpModule } from '@nestjs/axios';
    import { MyService } from './my.service';

    @Module({
    imports: [HttpModule],
    providers: [MyService],
    })
    export class MyModule {}`,
			},
            {
				name: 'Import HttpService',
				language: 'typescript',
				code: `    import { Injectable } from '@nestjs/common';
    import { HttpService } from '@nestjs/axios';
    import { lastValueFrom } from 'rxjs';

    @Injectable()
    export class MyService {
    constructor(private readonly httpService: HttpService) {}

    async getExternalData(): Promise<any> {
        const url = 'https://api.example.com/data';
        try {
        const response = await lastValueFrom(this.httpService.get(url));
        return response.data;
        } catch (error) {
        console.error('Error fetching external data:', error.message);
        throw error;
        }
    }
    }`,
			},
            {
                name: 'Tích hợp thêm tùy chọn',
                language: 'typescript',
                code: `    const response = await lastValueFrom(
    this.httpService.get(url, {
        headers: {
            Authorization: \`Bearer YOUR_ACCESS_TOKEN\`,
            },
            params: {
            query: 'example',
            },
        }),
    );`
            },
            {
                name: 'POST',
                language: 'typescript',
                code: `    const response = await lastValueFrom(
        this.httpService.post(url, { key: 'value' }),
    );`
            }
		],
	},
];

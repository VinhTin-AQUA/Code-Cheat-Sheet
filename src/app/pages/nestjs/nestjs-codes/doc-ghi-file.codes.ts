export const docGhiFile = [
	{
		id: 'doc-file-dong-bo',
		name: 'Đọc file đồng bộ',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    import { Injectable } from '@nestjs/common';
    import * as fs from 'fs';

    @Injectable()
    export class FileService {
        readFileSync(filePath: string): string {
            try {
                const data = fs.readFileSync(filePath, {}, () => {});
                return data;
            } catch (error) {
                console.error('Error reading file:', error);
                throw error;
            }
        }
    }`,
			},
		],
	},
    {
		id: 'doc-file-bat-dong-bo',
		name: 'Đọc file bất đồng bộ',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    import { Injectable } from '@nestjs/common';
    import * as fs from 'fs/promises';

    @Injectable()
    export class FileService {
        async readFileAsync(filePath: string): Promise<string> {
            try {
                const data = await fs.readFile(filePath, {}, () => {});
                return data;
            } catch (error) {
                console.error('Error reading file:', error);
                throw error;
            }
        }
    }`,
			},
		],
	},
    {
		id: 'ghi-file-dong-bo',
		name: 'Ghi file đồng bộ',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    @Injectable()
    export class FileService {
        writeFileSync(filePath: string, content: string): void {
            try {
                fs.writeFileSync(filePath, content, {}, () => {});
            } catch (error) {
                console.error('Error writing file:', error);
                throw error;
            }
        }
    }`,
			},
		],
	},
    {
		id: 'doc-file-voi-stream',
		name: 'Đọc file với stream',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    import { Injectable } from '@nestjs/common';
    import * as fs from 'fs';

    @Injectable()
    export class FileService {
        readFileStream(filePath: string): fs.ReadStream {
            try {
             return fs.createReadStream(filePath, { encoding: 'utf-8' });
            } catch (error) {
                console.error('Error creating read stream:', error);
                throw error;
            }
        }
    }`,
			},
		],
	},
    {
		id: 'ghi-file-voi-stream',
		name: 'Ghi file với Stream',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    import { Injectable } from '@nestjs/common';
    import * as fs from 'fs';

    @Injectable()
    export class FileService {
        writeFileStream(filePath: string, content: string): fs.WriteStream {
            try {
                const stream = fs.createWriteStream(filePath);
                stream.write(content);
                stream.end();
                return stream;
            } catch (error) {
                console.error('Error creating write stream:', error);
                throw error;
            }
        }
    }`,
			},
		],
	},
];

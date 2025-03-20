export const nestJSCommandCodes = [
	{
		id: 'commands',
		name: 'Commands',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `   # tạo module gồm: controller, service, module
    nest g resource products --no-spec [--flat]`,
			},
            {
				name: '',
				language: 'shell',
				code: `  # format code theo prettier
    npm run format`,
			},
            {
				name: '',
				language: 'shell',
				code: `   # tạo module
    nest g module mysql-config --flat`,
			},
            {
				name: '',
				language: 'shell',
				code: `   # tạo service
    nest g service mysql-config --flat --no-spec`,
			},
		],
	},
];

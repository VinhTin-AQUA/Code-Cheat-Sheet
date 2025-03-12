export const CLICodes = [
	{
		id: 'cli',
		name: 'CLI',
		codeBlocks: [
			{
				name: 'CLI command',
				language: 'shell',
				code: `    https://angular.io/cli/generate

    * tạo module kèm theo routing tại thư mục hiện hành mà không tạo ra thư mục mới
    ng g m <TenModult> --routing --flat

    * tạo component mới bỏ qua file test
    ng g c <TenComponent> --skip-tests

    * tạo service bỏ qua file test
    ng g s <TenService> --skip-tests

    * tạo guard theo class và không tạo file test
    ng g guard Auth --functional=false --skip-tests

    * interceptor
    ng generate interceptor

    * enviroments
    ng generate environments

    * tạo pipe
    ng g p Floor --skip-tests
`,
			},
		],
	},
];


export const tailwindCodes = [
	{
		id: 'su-dung-tailwind',
		name: 'Sử dụng Tailwind',
		codeBlocks: [
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    npm install tailwindcss@4 @tailwindcss/postcss postcss
`,
			},
            {
                name: 'Tạo file config .postcssrc.json với nội dung dưới',
                language: 'json',
                code: `    {
        "plugins": {
            "@tailwindcss/postcss": {}
        }
    }`
            },
            {
				name: 'add tailwind CSS và SCSS vào styles.scss',
				language: 'css',
				code: `    /* You can add global styles to this file, and also import other style files */
    @use 'tailwindcss';
    
    html,
    body {
        height: 100%;
    }
    
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }`,
			},
		],
	},
    
];




export const dropShadowCodes = [
	{
		id: 'drop-shadow',
		name: 'Drop shadow',
		preview: `    <img width="200" src="https://cdn-icons-png.flaticon.com/512/2544/2544087.png" alt="" style="filter: drop-shadow(2px 20px 10px #008000);
                border: 1px solid green;" />`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `    <img width="200" src="https://cdn-icons-png.flaticon.com/512/2544/2544087.png" alt="" />`,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    img {
        filter: drop-shadow(2px 20px 10px #008000);
        border: 1px solid green;
    }`,
			},
		],
	},
];

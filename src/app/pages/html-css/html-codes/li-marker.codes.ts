export const liMarkerCodes = [
	{
		id: 'li-marker',
		name: 'Li marker',
		preview: `    <ul>
        <li style="list-style-type: none;">🟢 one</li>
        <li style="list-style-type: none;">🟢 two</li>
        <li style="list-style-type: none;">🟢 three</li>
    </ul>
`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `   <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>`,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    ul li::marker {
        content: '🟢';
    }`,
			},
		],
	},
];

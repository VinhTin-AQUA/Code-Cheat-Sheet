export const passwordToggle = [
	{
		id: 'password-toggle',
		name: 'Password toggle',
		preview: `<div>
    <input id="pwd" type="password" placeholder="password" />
    <input type="checkbox" onclick="pwd.type = this.checked ? 'text' : 'password'">
</div>`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `<div>
    <input id="pwd" type="password" placeholder="password" />
    <input type="checkbox" onclick="pwd.type = this.checked ? 'text' : 'password'">
</div>`,
			},
		],
	},
];

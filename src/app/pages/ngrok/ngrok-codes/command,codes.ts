export const commandCodes = [
	{
		id: 'ngrok-command',
		name: 'Commands',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    # public port https
    ngrok https 8080 # scheme=https

    # public port http
    ngrok http 8080

    ngrok http 3000`,
			},
		],
	},
];

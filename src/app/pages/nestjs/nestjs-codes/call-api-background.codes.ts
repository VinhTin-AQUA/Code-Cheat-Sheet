export const callApiBackgroundCodes = [
	{
		id: 'call-api-background',
		name: 'Sử dụng setImmediate',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `        async sendTest() {
        const api = \`https://api.telegram.org/\${this.botErrorToken}/sendMessage\`;
        const message = 'Test send';
        const groupChatId = '4263398254';

        const data = {
            chat_id: \`-\${groupChatId}\`,
            text: message,
        };

        // Gửi request ở nền
        setImmediate(async () => {
            try {
                const response = await axios.post(api, data);
                console.log('Message sent:', response.data);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        });

        console.log('API call scheduled.');
    }`,
			},
		],
	},
   
];

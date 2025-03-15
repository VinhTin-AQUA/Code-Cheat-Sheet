export const dockercomposeCodes = [
	{
		id: 'run-docker-compose',
		name: 'Run docker compose',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker compose up -d`,
			},
		],
	},
    {
		id: 'build-docker-compose',
		name: 'build docker compose (rebuild)',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker compose build`,
			},
		],
	},
    {
		id: 'build-docker-compose-mot-dich-vu-cu-the',
		name: 'build docker compose (rebuild) một dịch vụ cụ thể',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker compose build <service_name>`,
			},
		],
	},
    {
		id: 'dung-docker-compose-nhung-khong-xoa',
		name: 'Dừng docker compose nhưng không xóa',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker compose stop`,
			},
		],
	},
    {
		id: 'dung-docker-compose-va-xoa-het-container',
		name: 'Dừng docker compose và xóa hết container',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker compose down`,
			},
		],
	},
    {
		id: 'dung-docker-compose-xoa-het-container-va-xoa-volume',
		name: 'Dừng docker compose, xóa hết container và xóa volume',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker compose down -v`,
			},
		],
	},
];

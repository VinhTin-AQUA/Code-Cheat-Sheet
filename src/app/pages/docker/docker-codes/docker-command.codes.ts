export const dockerCommandCodes = [
	{
		id: 'docker-login',
		name: 'Docker login',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker login
    # nhập user name và password`,
			},
		],
	},
    {
		id: 'kiem-tra-trang-thai-docker',
		name: 'Kiểm tra trạng thái Docker',
		codeBlocks: [
			{
				name: 'Linux',
				language: 'shell',
				code: `    systemctl status docker
    # nếu docker đã dừng sẽ thấy trạng thái Active: inactive (dead)`,
			},
		],
	},
    {
		id: 'dung-docker-ngay-lap-tuc',
		name: 'Dừng Docker ngay lập tức và docker socket',
		codeBlocks: [
			{
				name: 'Linux',
				language: 'shell',
				code: `    sudo systemctl stop docker docker.socket`,
			},
		],
	},
    {
		id: 'ngan-docker-khoi-dong-cung-he-thong',
		name: 'Ngăn Docker khởi động cùng hệ thống',
		codeBlocks: [
			{
				name: 'Linux',
				language: 'shell',
				code: `    sudo systemctl disable docker`,
			},
		],
	},
    {
		id: 'khoi-dong-lai-docker',
		name: 'Khởi động Docker',
		codeBlocks: [
			{
				name: 'Linux',
				language: 'shell',
				code: `    sudo systemctl start docker`,
			},
		],
	},
    {
		id: 'khoi-dong-lai-docker-cung-he-thong',
		name: 'Khởi động Docker cùng hệ thống',
		codeBlocks: [
			{
				name: 'Linux',
				language: 'shell',
				code: `    sudo systemctl enable docker`,
			},
		],
	},
];

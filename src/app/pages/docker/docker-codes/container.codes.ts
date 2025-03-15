export const containerCommandCodes = [
	{
		id: 'show-container-list',
		name: 'Xem danh sách các container đang chạy',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker ps`,
			},
		],
	},
	{
		id: 'show-container-list-include-stopped',
		name: 'Xem danh sách tất cả các container (bao gồm cả container đã dừng)',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker ps -a`,
			},
		],
	},
	{
		id: 'run-container',
		name: 'chạy docker container',
		codeBlocks: [{ name: '', language: 'shell', code: `    docker start my_container` }],
	},
	{
		id: 'stop-container',
		name: 'dừng container',
		codeBlocks: [{ name: '', language: 'shell', code: `    docker stop <container_id>` }],
	},
	{
		id: 'remove-container',
		name: 'Xóa container',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker rm <container_id>`,
			},
		],
	},
	{
		id: 'enter-bash',
		name: 'vào bash của container',
		codeBlocks: [
			{ name: '', language: 'shell', code: `    docker exec -it <container_id> /bin/bash` },
		],
	},
	{
		id: 'enter-sh',
		name: 'vào sh container',
		codeBlocks: [
			{ name: '', language: 'shell', code: `    docker exec -it <tên_container> sh` },
		],
	},
	{
		id: 'exits-sh',
		name: 'thoát shell container',
		codeBlocks: [{ name: '', language: 'shell', code: `    Ctrl + D` }],
	},
	{
		id: 'view-logs',
		name: 'xem logs',
		codeBlocks: [
			{ name: '', language: 'shell', code: `    docker logs <container_name_or_id>` },
		],
	},
	{
		id: 'view-realtime-logs',
		name: 'xem log theo thời gian thực',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker logs -f <container_name_or_id>`,
			},
		],
	},
	{
		id: 'limit-line-logs',
		name: 'Giới hạn số dòng log hiển thị',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker logs --tail <number_of_lines> <container_name_or_id>`,
			},
		],
	},
	{
		id: 'view-specific-time-logs',
		name: 'xem log thời gian cụ thể',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker logs --since YYYY-MM-DDTHH:MM:SS <container_name_or_id>
    docker logs --until YYYY-MM-DDTHH:MM:SS <container_name_or_id>`,
			},
		],
	},
	{
		id: 'view-json-logs',
		name: 'xem log ở dạng json',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker logs --details <container_name_or_id>`,
			},
		],
	},
	{
		id: 'delete-all-logs',
		name: 'xóa toàn bộ logs của toàn bộ container',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    sudo sh -c "truncate -s 0 /var/lib/docker/containers/**/*-json.log"`,
			},
		],
	},
];

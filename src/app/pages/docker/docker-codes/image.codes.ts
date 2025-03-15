export const imageCommandCodes = [
	{
		id: 'build-image',
		name: 'xây dựng image từ docker',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker build -t myapp .`,
			},
		],
	},
	{
		id: 'show-image-list',
		name: 'xem danh sách images',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    docker images`,
			},
		],
	},
	{
		id: 'build-container-from-image',
		name: 'run image to container',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    # Cú pháp cơ bản 
    docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

    # Chạy một container từ một image với tên my_image
    docker run my_image_id

    # Chạy một container từ một image và xuất các cổng mạng từ container ra ngoài:
    docker run -p 8080:80 my_image_id

    # build image to container và đưa vào terminal tương tác tới container
    docker run -it my_image_id

    # Ví dụ lệnh đầy đủ
    docker run -d -p 8080:80 --name myappcontainer my_image_id`,
			},
		],
	},
	{
		id: 'update-image',
		name: 'cập nhật image',
		codeBlocks: [{ name: '', language: 'shell', code: `    # lệnh build image` }],
	},
	{
		id: 'remove-image',
		name: 'Xóa image',
		codeBlocks: [{ name: '', language: 'shell', code: `    docker rmi <image_id>` }],
	},
	{
		id: 'push-image-dockerhub',
		name: 'push image lên docker hub',
		codeBlocks: [
			{
				name: '',
				language: 'shell',
				code: `    # tạo tag tag image

    docker tag <image_name> id_docker_hub/<image_name>:1.0
    docker tag <image_name> vinhtin/<image_name>:1.0

    # push tag image to docker hup
    docker push id_docker_hub/<image_name>:1.0
    docker push vinhtin/<image_name>:1.0`,
			},
		],
	},
	{
		id: 'pull image',
		name: 'pull image',
		codeBlocks: [
			{ name: '', language: 'shell', code: `    docker pull <username>/<repository>:<tag>` },
		],
	},
];

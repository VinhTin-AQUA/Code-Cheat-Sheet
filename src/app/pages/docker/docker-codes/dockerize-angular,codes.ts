export const dockerizeAngular = [
	{
		id: 'dockerize-toan-bo-source',
		name: 'Đóng gói docker toàn bộ source (Không nên vì toàn bộ source nên kích thước lơn)',
		codeBlocks: [
			{
				name: 'tạo fil Dockerfile',
				language: 'dockerfile',
				code: `    ### STAGE 1: Build ###
    FROM node:20.12.2 AS build

    WORKDIR /usr/src/app

    COPY . /usr/src/app

    RUN npm install -g @angular/cli

    RUN npm install

    CMD ["ng", "serve", "--host", "0.0.0.0"]`,
			},
			{
				name: 'Tạo file docker-compose.yml',
				language: 'yaml',
				code: `    services:
        my-app:
            build:
                context: .
                dockerfile: Dockerfile
            ports: 
                - 1233:4200
            networks:
                - test-net`,
			},
		],
	},
	{
		id: 'dockerize-build-folder',
		name: 'Đóng gói docker trên thư mục build (nên làm)',
		codeBlocks: [
			{
				name: 'Tạo file docker-compose.yml',
				language: 'yaml',
				code: `    services:
        react-app:
            image: angular
            build:
                context: .
                dockerfile: Dockerfile
            
            container_name: angular-app
            # ports:
            #   - "3000:443"
            restart: always
            networks:
                - angular-app_default # Liên kết với mạng đã tồn tại

        networks:
            angular-app_default: # Sử dụng mạng external
            # external: true`,
			},
			{
				name: 'Tạo file Dockerfile',
				language: 'dockerfile',
				code: `        # Sử dụng Node.js làm base image
    FROM node:lts-alpine

    # Cài đặt công cụ 'serve' để phục vụ file tĩnh
    RUN npm install -g serve

    # Tạo thư mục làm việc bên trong container
    WORKDIR /app

    # Copy thư mục build vào container
    COPY ./build /app # Lưu ý: có một số phiên bản khi build sẽ ra thư mục dist thì copy vào thay vì thư mục build

    # Expose port 3000 (hoặc port khác bạn muốn sử dụng)
    EXPOSE 3000

    # Chạy ứng dụng với 'serve'
    CMD ["serve", "-s", ".", "-l", "4200"]`,
			},
		],
	},
];

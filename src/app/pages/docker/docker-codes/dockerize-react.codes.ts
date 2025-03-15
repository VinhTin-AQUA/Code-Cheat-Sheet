export const dockerizeReactCodes = [
    {
        id:'react-full-source',
        name: 'React full source',
        codeBlocks: [
            {
                name: 'Tạo Dockerfile',
                language: 'dockerfile',
                code: `    # Use the official Node.js image as the base image
    FROM node:20.12.2 as build

    # Thiết lập thư mục làm việc trong container
    WORKDIR /app

    # Sao chép file package.json và yarn.lock vào container
    COPY package.json yarn.lock ./

    # Cài đặt các dependencies
    RUN yarn install

    # Sao chép toàn bộ mã nguồn vào container
    COPY . .

    # Mở cổng mặc định của Vite (3000)
    EXPOSE 3000

    # Lệnh để chạy ứng dụng Vite trong môi trường development
    CMD ["yarn", "dev", "--host"]`
            },
            {
                name: 'Tạo docker-compose',
                language: 'yaml',
                code: `    services:
    react-moigioi:
        container_name: react-moigioi
        image: react-moigioi
            build:
            context: .
        dockerfile: Dockerfile
        environment:
            - TZ=Asia/Ho_Chi_Minh
            - NODE_ENV=development
        volumes:
            - .:/app
            - /app/node_modules
        # ports:
        #   - 9000:9000
        command: yarn dev --host`
            }
        ]
    },
    {
        id:'react-source-build',
        name: 'Dockerize trên thư mục build',
        codeBlocks: [
            {
                name: 'Tạo Dockerfile',
                language: 'dockerfile',
                code: `    
    # Sử dụng Node.js làm base image
    FROM node:lts-alpine

    # Cài đặt công cụ 'serve' để phục vụ file tĩnh
    RUN npm install -g serve

    # Tạo thư mục làm việc bên trong container
    WORKDIR /app

    # Copy thư mục build vào container
    COPY ./dist /app

    # Expose port 3000 (hoặc port khác bạn muốn sử dụng)

    EXPOSE 3000

    # Chạy ứng dụng với 'serve'
    CMD ["serve", "-s", ".", "-l", "3000"]`
            },
            {
                name: 'Tạo docker-compose.yml',
                language: 'yaml',
                code: `    services:
    react-app:
        image: react-dashboard
        build:
            context: .
            dockerfile: Dockerfile

        container_name: react-dashboard
        # ports:
        #   - "3000:443"
        restart: always
        networks:
            - aloper-prod  # Liên kết với mạng đã tồn tại

    networks:
        aloper-prod: # Sử dụng mạng external
            external: true`
            }
        ]
    }
]
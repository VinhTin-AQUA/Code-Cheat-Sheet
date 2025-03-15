export const dockerizeNestJsCodes = [
    {
        id: 'dockerize-nestjs-app',
        name: 'Dockerize NestJS app trên thư mục build',
        codeBlocks: [
            {
                name: 'Tạo file Dockerfile',
                language: 'dockerfile',
                code: `    # Stage 1: Build Stage
    FROM node:20-alpine AS builder

    WORKDIR /app
    COPY package*.json ./

    # Cài đặt dependencies cho ứng dụng (bao gồm cả Puppeteer)
    RUN npm install

    # Copy mã nguồn ứng dụng vào container
    COPY . .

    # Stage 2: Deployment Stage
    FROM node:20-alpine

    # Tạo thư mục làm việc trong container
    WORKDIR /app

    # Copy thư mục dist và node_modules từ builder stage
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/node_modules ./node_modules
    COPY package*.json ./

    # Mở cổng cho ứng dụng (giả sử ứng dụng của bạn chạy trên cổng 3200)
    EXPOSE 3200

    # Chạy ứng dụng NestJS
    CMD ["node", "dist/main"]`,
            },
            {
                name: 'Tạo file docker-compose.yml',
                language: 'yaml',
                code: `    name: aloper-prod

    services:
        aloperapi-prod:
            container_name: aloperapi-prod
            image: aloperapi-prod
            build:
                context: .
                dockerfile: Dockerfile
            ports:
                - "3200:3200"
            environment:
                - TZ=Asia/Ho_Chi_Minh
                - NODE_ENV=production
            restart: always
            env_file:
                - .env
            networks:
            - aloper-prod`,
            },
        ]
    }
]
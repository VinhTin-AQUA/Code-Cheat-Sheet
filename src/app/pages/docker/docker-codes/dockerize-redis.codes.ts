export const dockerizeRedisCodes = [
    {
        id: 'dockerize-redis',
        name: 'Dockerize Redis',
        codeBlocks: [
            {
                name:'Tạo file docker-compose.yml',
                language: 'yaml',
                code: `    name: aloper-prod

    services:
        redis-prod:
            image: redis:latest
            container_name: redis-prod
            restart: always
            command: --port 6380
            ports:
                - "6380:6380"
            expose:
                - "6380"
            volumes:
                - redis_data:/data
            environment:
                - REDIS_PASSWORD=my-password
                - REDIS_PORT=6380
                - REDIS_DATABASES=16
                - abortConnect=false
            networks:
                - aloper-prod

    volumes:
        redis_data:`
            }
        ]
    }
]
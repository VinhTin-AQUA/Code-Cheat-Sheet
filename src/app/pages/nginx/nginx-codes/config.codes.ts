export const configCodes = [
    {
        id: 'config',
        name: 'Config',
        codeBlocks: [
            {
                name: 'docker-compose.yml',
                language: 'yaml',
                code: `    services:
        nginx:
            image: nginx:stable-alpine
            ports:
                - 8081:443
                # - 1112:443
            restart: unless-stopped
            volumes:
                - ./nginx/nginx.conf:/etc/nginx/nginx.conf
                - ./SSL/aloper_fun.crt:/home/Aloper-BE/SSL/aloper_fun.crt
                - ./SSL/aloper.fun_private.key:/home/Aloper-BE/SSL/aloper.fun_private.key`
            },
            {
                name: 'nginx.conf',
                language: 'yaml',
                code: `    events {}

    http {
        upstream web-api {
            server aloperapi-dev:8080;
        }

        server {
            listen 80;
            server_name aloper.fun;
            # server_name localhost;

            location / {
                proxy_pass         http://web-api;
                return 301 https://$host$request_uri;
            }
        }

        server {
            listen 443 ssl;
            server_name aloper.fun;
            # server_name localhost;

        
            ssl_certificate /home/Aloper-BE/SSL/aloper_fun.crt;
            ssl_certificate_key /home/Aloper-BE/SSL/aloper.fun_private.key;
            # ssl_trusted_certificate /home/Aloper-BE/SSL/My_CA_Bundle.ca-bundle; # hoặc ca_bundle.crt
            
            ssl_protocols TLSv1.2 TLSv1.3;

            location / {
                proxy_pass         https://web-api;
                proxy_http_version 1.1;
                proxy_set_header   Upgrade $http_upgrade;
                proxy_set_header   Connection $connection_upgrade;
                proxy_set_header   Host $host;
                proxy_cache_bypass $http_upgrade;
                proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header   X-Forwarded-Proto $scheme;

                proxy_read_timeout 90;  # Thay đổi thời gian chờ đọc từ upstream
                proxy_buffers 16 4k;    # Thay đổi kích thước buffer nếu cần

                client_max_body_size 20M;  # Giới hạn file tải lên là 20MB cho đường dẫn /upload
            }
        }

        map $http_upgrade $connection_upgrade {
            default upgrade;
            '' close;
        }

        include /etc/nginx/conf.d/*.conf;
    }`
            },
        ]
    }
]
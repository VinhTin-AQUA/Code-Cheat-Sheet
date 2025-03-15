export const addDenpendenciesCodes = [
    {
        id: 'install-font-chu-window',
        name: 'Install font chữ trên window',
        codeBlocks: [
            {
                name:'',
                language: 'dockerfile',
                code: `    FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

    # Copy the certificate to the container
    COPY ../https /https

    RUN echo "deb http://deb.debian.org/debian bookworm main contrib non-free" > /etc/apt/sources.list \\
        && echo "deb http://deb.debian.org/debian bookworm-updates main contrib non-free" >> /etc/apt/sources.list \\
        && echo "deb http://security.debian.org bookworm-security main contrib non-free" >> /etc/apt/sources.list \\
        && apt-get update \\
        && apt-get install -y --no-install-recommends \\
            fonts-arphic-ukai \\
            fonts-arphic-uming \\
            fonts-ipafont-mincho \\
            fonts-ipafont-gothic \\
            fonts-unfonts-core \\
            ttf-wqy-zenhei \\
            ttf-mscorefonts-installer \\
        && apt-get clean \\
        && apt-get autoremove -y \\
        && rm -rf /var/lib/apt/lists/*

    WORKDIR /app
    EXPOSE 8080
    EXPOSE 8081

    FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
    ARG BUILD_CONFIGURATION=Release
    WORKDIR /src
    COPY ["Aloper.API/wwwroot", "Aloper.API/"]
    COPY ["Aloper.API/Aloper.API.csproj", "Aloper.API/"]
    COPY ["Aloper.Application/Aloper.Application.csproj", "Aloper.Application/"]
    COPY ["Aloper.Domain/Aloper.Domain.csproj", "Aloper.Domain/"]
    COPY ["Aloper.Infrastructure/Aloper.Infrastructure.csproj", "Aloper.Infrastructure/"]
    RUN dotnet restore "./Aloper.API/Aloper.API.csproj"
    COPY . .
    WORKDIR "/src/Aloper.API"
    RUN dotnet build "./Aloper.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

    FROM build AS publish
    ARG BUILD_CONFIGURATION=Release
    RUN dotnet publish "./Aloper.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

    FROM base AS final
    WORKDIR /app
    COPY --from=publish /app/publish .

    ENTRYPOINT ["dotnet", "Aloper.API.dll"]`
            }
        ]
    },
    {
        id: 'install-thu-vien-ho tro-puperteer',
        name: 'Install thư viện hỗ trợ cho thư viện puperteer',
        codeBlocks: [
            {
                name:'',
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

    # Cài đặt các thư viện cần thiết cho Puppeteer
    RUN apk add --no-cache \\
        chromium \\
        nss \\
        freetype \\
        harfbuzz \\
        ca-certificates \\
        ttf-freefont


    # Copy thư mục dist và node_modules từ builder stage
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/node_modules ./node_modules
    COPY package*.json ./

    # Mở cổng cho ứng dụng (giả sử ứng dụng của bạn chạy trên cổng 3200)
    EXPOSE 3200

    # Chạy ứng dụng NestJS
    CMD ["node", "dist/main"]`
            }
        ]
    }
]
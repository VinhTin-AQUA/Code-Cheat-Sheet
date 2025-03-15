export const dockerizeNetCodes = [
	{
		id: 'dockerize-net-app',
		name: 'Dockerize Net App (API, MVC)',
		codeBlocks: [
			{
				name: 'Tạo file Dockerfile',
				language: 'dockerfile',
				code: `    # Sử dụng lệnh CMD có sẵn của .NET command để sinh Dockerfile
    # mẫu
    #See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

    FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
    RUN mkdir /app
    WORKDIR /app
    EXPOSE 80
    EXPOSE 443

    FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
    ARG BUILD_CONFIGURATION=Release
    WORKDIR /src
        
    COPY ["Aloper/Aloper.csproj", "Aloper/"]
    COPY ["Aloper.DataAcess/Aloper.DataAcess.csproj", "Aloper.DataAcess/"]
    COPY ["Aloper.Models/Aloper.Models.csproj", "Aloper.Models/"]
    COPY ["Core.Aloper/Core.Aloper.csproj", "Core.Aloper/"]
    COPY ["Aloper.Framework/Aloper.Framework.csproj", "Aloper.Framework/"]
    RUN dotnet restore "./Aloper/Aloper.csproj"
    COPY . .
    WORKDIR "/src/Aloper"
    RUN dotnet build "./Aloper.csproj" -c $BUILD_CONFIGURATION -o /app/build

    FROM build AS publish
    ARG BUILD_CONFIGURATION=Release
    RUN dotnet publish "./Aloper.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

    FROM base AS final
    WORKDIR /app
    COPY --from=publish /app/publish .
    COPY --from=build /src /app/src
    ENTRYPOINT ["dotnet", "Aloper.dll"]`,
			},
            {
				name: 'Tạo file docker-compose.yml',
				language: 'yaml',
				code: `    services:
    aloperapi:
        image: aloperapi
        build: 
            context: ./BE_Aloper
            dockerfile: Aloper/Dockerfile
        ports:
            - 8080:80
            - 8081:433
        environment:
            - ConnectionStrings__DefaultConnection=Server=sqlserver;Database=Aloper;User=sa;Password=Password@123;
        depends_on:
            - sqlserver`,
			},
		],
	},
];

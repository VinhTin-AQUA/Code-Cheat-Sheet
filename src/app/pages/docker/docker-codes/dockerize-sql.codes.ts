export const dockerizeSqlCodes = [
    {
        id: 'dockerize-sql',
        name: 'Dockerize SQL',
        codeBlocks: [
            {
                name: '',
                language: 'yaml',
                code: `    name: restore_data_with_volume

    services:
    sqlserver:
        image: "mcr.microsoft.com/mssql/server:latest"
        container_name: sqlserver
        ports: 
            - 1433:1433 
        environment:
            - ACCEPT_EULA=y
            - SA_PASSWORD=Password@123 
        volumes:
            - sql_volume:/var/opt/mssql 

    volumes:
        sql_volume:
            driver: local
            external: true`
            }
        ]
    }
]
export const dockerUtilCodes = [
    {
        id: 'giam-sat-log-docker',
        name: 'Giám sát log docker',
        codeBlocks: [
            {
                name: '',
                language: 'shell',
                code: `    docker run -d -v /var/run/docker.sock:/var/run/docker.sock -p 8080:8080 amir20/dozzle:latest`
            }
        ]
    }
]
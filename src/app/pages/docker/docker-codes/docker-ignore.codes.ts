export const dockerIgnoreCodes = [
    {
        id: 'docker-ignore',
        name: 'Tạo file .dockerignore',
        codeBlocks: [
            {
                name: '',
                language: 'yaml',
                code: `    **/.classpath
    **/.dockerignore
    **/.env
    **/.git
    **/.gitignore
    **/.project
    **/.settings
    **/.toolstarget
    **/.vs
    **/.vscode
    **/*.*proj.user
    **/*.dbmdl
    **/*.jfm
    **/azds.yaml
    **/bin
    **/charts
    **/docker-compose*
    **/Dockerfile*
    **/node_modules
    **/.angular
    **/npm-debug.log
    **/obj
    **/secrets.dev.yaml
    **/values.dev.yaml
    LICENSE
    README.md
    !**/.gitignore
    !.git/HEAD
    !.git/config
    !.git/packed-refs
    !.git/refs/heads/**`
            }
        ]
    }
]
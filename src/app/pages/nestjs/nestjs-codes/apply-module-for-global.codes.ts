export const applyModuleForGlobal = [
	{
		id: 'use-global-decorator',
		name: 'Sử dụng @Global() cho module',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    @Global()
	@Module({
	    providers: [JwtStrategy, JwtModule],
	})
	export class AuthModule {}`,
			},
		],
	},
    {
		id: 'import-vao-module-goc',
		name: 'import trong module gốc là AppModule',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    @Module({
        imports: [
            AuthModule,
        ],
        controllers: [AppController],
        providers: [AppService],
    })
    export class AppModule {}`,
			},
		],
	},
];

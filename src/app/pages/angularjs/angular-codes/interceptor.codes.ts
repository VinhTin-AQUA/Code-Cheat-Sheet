export const interceptorCodes = [
	{
		id: 'tao-interceptors',
		name: 'Tạo interceptors',
		codeBlocks: [
			{
				name: 'CMD',
				language: 'shell',
				code: `    ng generate interceptor <name>`,
			},
		],
	},
	{
		id: 'them-jwt-vao-header-cho-tat-ca-request',
		name: 'Thêm JWT vào header cho tất cả request',
		codeBlocks: [
			{
				name: 'Định nghĩa interceptor và thêm JWT vào header',
				language: 'typescript',
				code: `    export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
        // Inject the current \`AuthService\` and use it to get an authentication token: 
        const authToken = inject (AuthService).getToken();

        // Clone the request to add the authentication header.
        const newReq = req.clone({
            setHeaders: {
                Authorization: \`Bearer \${authToken}\`,
            },
        });

        return next(newReq);
    };`,
			},
			{
				name: 'Config interceptor vừa tạo',
				language: 'typescript',
				code: `    export const appConfig: AppLicationConfig = { 
        providers: [ 
            provideRouter(routes), 
            provideHttpClient(), 
            provideHttpClient(withInterceptors([JwtInterceptor])), 
        ], 
    };`,
			},
		],
	},
];

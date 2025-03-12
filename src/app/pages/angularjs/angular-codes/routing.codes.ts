export const routingCodes = [
	{
		id: 'cuon-len-dau-trang-khi-backward-trang',
		name: 'Cuộn lên đầu trang khi backward trang',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { provideRouter, withInMemoryScrolling } from '@angular/router';

    export const appConfig: ApplicationConfig = {
        providers: [
            provideRouter(
                routes,
                withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })
            ),
        ],
    };
`,
			},
		],
	},
	{
		id: 'params-va-query-string-url',
		name: 'Params và Query string URL',
		codeBlocks: [
			{
				name: 'Params',
				language: 'typescript',
				code: `    // Lấy params: /agent/post-detail/2/hoc
                this.activatedRoute.params.subscribe({
        next: (params: any) => {
            console.log(params); // {id: '2', name: 'hoc'}
        }
    })`,
			},
			{
				name: 'QueryParam, QueryString',
				language: 'typescript',
				code: `    /* truyền query */
    // cách 1
    /agent/post-detail?a=new&b=23
    // cách 2: sử dụng router
    this.router.navigate(['/agent/post-detail'], {queryParams: {id: 1, name: 'hoc'}})
    
    /* Lấy queryParam */
    // cách 1 sử dụng activatedRoute
    this.activatedRoute.queryParams.subscribe(res => {
        console.log(res);
    })

    // cách 2 sử dụng queryParamMap
    this.activatedRoute.queryParamMap.subscribe(res => {
        console.log(res);
    })
`,
			},
		],
	},
	{
		id: 'router-link-activate',
		name: 'Router link activate',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    import { RouterLinkActive } from '@angular/router';

    routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
`,
			},
		],
	},
	{
		id: 'routing',
		name: 'Routing',
		codeBlocks: [
			{
				name: 'Tạo 3 component: AccountComponent, LoginComponent, SignupComponent',
				language: 'text',
				code: `    AccountComponent
        LoginComponent
        SignupComponent
        
        account.component.ts
        account.component.css
        account.component.html
        account.routes.ts`,
			},
			{
				name: 'Cấu hình route trong account.routes.ts',
				language: 'typescript',
				code: `    export const accountRoutes: Routes = [
        {
            path: '',
            component: Accountcomponent,
            children: [
                { path: 'login', component: LoginComponent, title: 'Đăng nhập' },
                { path: 'signup', component: SignupComponent, title: 'Đăng ký' },
            ],
        },
    ];`,
			},
			{
				name: 'Cấu hình route trong app.routes.ts',
				language: 'typescript',
				code: `    {
		path: 'account',
		loadChildren: () => import('./pages/account/account.routes').then(r => r.accountRoutes),
	},`,
			},
			{
				name: 'Sử dụng router-outlet trong account.component.html',
				language: 'html',
				code: `    <router-outlet></router-outlet>`,
			},
		],
	},
	{
		id: 'view-transition',
		name: 'View transition trong Angular – Hiệu ứng chuyển giữa các pages',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
    import {
        provideRouter,
        withViewTransitions,
    } from '@angular/router';
    import { routes } from './app.routes';
    
    export const appConfig: ApplicationConfig = {
        providers: [
            provideZoneChangeDetection({ eventCoalescing: true }),
            provideRouter(
                routes,
                withViewTransitions(),
            ),
        ],
    };
`,
			},
		],
	},
];
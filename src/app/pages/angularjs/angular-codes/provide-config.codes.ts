export const provideConfigCodes = [
	{
		id: 'provide-animation-module',
		name: 'Provide animation module',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { provideAnimations } from '@angular/platform-browser/animations';

    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimations(),
    ],`,
			},
		],
	},
	{
		id: 'provide-http-client',
		name: 'Provide Http Client',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { provideHttpClient } from '@angular/common/http';
        
    export const appConfig: ApplicationConfig = {
        providers: [
            provideZoneChangeDetection({ eventCoalescing: true }),
            provideHttpClient(),
            //code
        ]
    }`,
			},
		],
	},
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
		id: 'binding-du-lieu-qua-routing',
		name: 'Binding dữ liệu qua Routing - withComponentInputBinding(),',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
    import {
        provideRouter,
        withComponentInputBinding,
    } from '@angular/router';
    import { routes } from './app.routes';
    export const appConfig: ApplicationConfig = {
        providers: [
            provideZoneChangeDetection({ eventCoalescing: true }),
            provideRouter(
                routes,
                withComponentInputBinding(),
            ),
        ],
    };
`,
			},
		],
	},
	{
		id: 'chuyen-trang-muot-ma',
		name: 'Hiệu ứng chuyển trang mượt mà - withViewTransitions(),',
		codeBlocks: [
			{
				name: 'Typescript',
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
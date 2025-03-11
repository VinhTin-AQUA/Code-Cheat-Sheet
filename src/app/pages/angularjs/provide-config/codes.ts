export const codes = [
	{
		id: 'provide-animation-module',
		name: 'provide animation module',
		code: `    import { provideAnimations } from '@angular/platform-browser/animations';

    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimations(),
    ],
`,
	},
];

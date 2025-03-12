import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(),
		provideRouter(routes, withViewTransitions(), withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })),
		provideAnimations(),
		provideHighlightOptions({
			fullLibraryLoader: () => import('highlight.js'),
		}),
	],
};

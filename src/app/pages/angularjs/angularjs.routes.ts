import { Routes } from '@angular/router';
import { AngularjsComponent } from './angularjs.component';
import { FastCodeComponent } from './fast-code/fast-code.component';

export const angularRoutes: Routes = [
	{
		path: '',
		component: AngularjsComponent,
		children: [
			{ path: '', redirectTo: 'fast-code', pathMatch: 'full' },
			{ path: 'fast-code', component: FastCodeComponent, title: 'Fast codes' },
			{ path: '**', redirectTo: 'fast-code', pathMatch: 'full' },
		],
	},
];

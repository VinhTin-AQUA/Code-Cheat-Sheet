import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularjsComponent } from './pages/angularjs/angularjs.component';
import { DotNetComponent } from './pages/dot-net/dot-net.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, title: 'List' },
	{
		path: 'dot-net/:id',
		component: DotNetComponent,
		title: 'Net Core',
	},
	{
		path: 'angular-js/:id',
		component: AngularjsComponent,
		title: 'Angular',
	},
	// {
	// 	path: 'angular-js',
	// 	loadChildren: () => import('./pages/angularjs/angularjs.routes').then(r => r.angularRoutes),
	// },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularjsComponent } from './pages/angularjs/angularjs.component';
import { DotNetComponent } from './pages/dot-net/dot-net.component';
import { HtmlCssComponent } from './pages/html-css/html-css.component';
import { BotComponent } from './pages/bot/bot.component';
import { DockerComponent } from './pages/docker/docker.component';

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
    {
		path: 'bot/:id',
		component: BotComponent,
		title: 'Bot',
	},
    {
		path: 'docker/:id',
		component: DockerComponent,
		title: 'Docker',
	},
    {
        path: 'html-css/:id', component: HtmlCssComponent, title: 'HTML - CSS'
    },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];

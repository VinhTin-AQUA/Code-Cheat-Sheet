import { Routes } from '@angular/router';
import { DotNetComponent } from './dot-net.component';
import { FileDirectoryComponent } from './file-directory/file-directory.component';
import { ThreadAsyncComponent } from './thread-async/thread-async.component';
import { StringComponent } from './string/string.component';
import { CsharpComponent } from './csharp/csharp.component';
import { NetCoreCommonComponent } from './net-core-common/net-core-common.component';
import { NetCoreAPIComponent } from './net-core-api/net-core-api.component';
import { TechsComponent } from './techs/techs.component';

export const dotnetRoutes: Routes = [
	{
		path: '',
		component: DotNetComponent,
		children: [
			{ path: '', redirectTo:'file-directory', pathMatch: 'full' },
			{ path: 'file-directory', component: FileDirectoryComponent, title: 'File và Thư mục' },
			{ path: 'thread-async', component: ThreadAsyncComponent, title: 'Thread và Async' },
			{ path: 'string', component: StringComponent, title: 'String' },
			{ path: 'csharp', component: CsharpComponent, title: 'C#' },
			{ path: 'netcore-common', component: NetCoreCommonComponent, title: 'Net Core common' },
			{ path: 'netcore-api', component: NetCoreAPIComponent, title: 'Net Core API' },
			{ path: 'techs', component: TechsComponent, title: 'Techs' },
            { path: '**', redirectTo: 'file-directory' }
		],
	},
];

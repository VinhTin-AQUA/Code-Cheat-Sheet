export const guardCodes = [
	{
		id: 'link-tham-khao',
		name: 'Link tham khảo',
		codeBlocks: [
			{
				name: 'Link',
				language: 'text',
				code: `    https://dev.to/this-is-angular/create-configurable-angular-guards-ng4?fbclid=IwAR1vK3X9l6Uic_CpvLMk2AC8UtDNPYkc7x4uhcTviWaO56xzngeIby-4VPY`,
			},
		],
	},
	{
		id: 'su-dung-guard',
		name: 'Sử dụng guard',
		codeBlocks: [
			{
				name: 'Tạo AuthService',
				language: 'typescript',
				code: `    import { Injectable } from '@angular/core';
    @Injectable({providedIn: 'root'})
    export class AuthService {
        constructor() { }
        hasRole(role: string) {
            // Logic xử lý xác định tài khoản có role được truyền tới không
            if(role === 'Admin') {
                return true;
            }
        
            return false;
        }
    )`,
			},
			{
				name: 'Tạo AuthGuard',
				language: 'typescript',
				code: `    
    import { CanActivateFn, Router } from '@angular/router';
    import { inject } from '@angular/core';
    import { AuthService } from '../auth/auth.service';

    export const authGuard: CanActivateFn = (route, state) => { 
        const authService = inject(AuthService);
        const router = inject(Router)
        const role = route.data['role'];
        const canAccess: boolean = authService.hasRole(role);
        return canAccess ? true: router.navigateByUrl('/access-denied');
    };`,
			},
			{
				name: 'Tạo role',
				language: 'typescript',
				code: `    export const ROLES = { 
        ADMIN: 'Admin',
        MANAGER: 'Manager', 
        USER: 'User',
    }`,
			},
			{
				name: 'Thiết lập guard và role truy cập trong app-routing-module',
				language: 'typescript',
				code: `    
    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { AdminComponent } from './admin/admin.component';
    import { ManagerComponent } from './manager/manager.component';
    import { UserComponent } from './user/user.component';
    import { authGuard } from './shared/guards/auth.guard';
    import { AccessDeniedComponent } from './access-denied/access-denied.component';
    import { ROLES } from './shared/auth/roles';
    import { HomeComponent } from './home/home.component';

    const routes: Routes = [
        { path: '', component: HomeComponent },
        {
            path: 'admin',
            component: AdminComponent,
            canActivate: [authGuard],
            data: { role: ROLES.ADMIN  }
        },

        {
            path: 'manager',
            component: ManagerComponent,
            canActivate: [authGuard],
            data: { role: ROLES.MANAGER },
        },
        {
            path: 'user',
            component: UserComponent,
            canActivate: [authGuard],
            data: { role: ROLES.USER },
        },
        { path: 'access-denied', component: AccessDeniedComponent },

    @NgModule({
        imports: [RouterModule.forRoot(routes)], 
        exports: [RouterModule],
    })
    export class AppRoutingModule {}`,
			},
		],
	},
];
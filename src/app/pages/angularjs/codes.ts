export const fastCodes = [
	{
		id: 'the-option-trong-select-chua-2-gia-tri-trong-form-group',
		name: 'Thẻ option trong select chứa 2 giá trị trong form Group',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <!-- Cách 1: sử dụng [ngValue]="{id: 'value 1', cityCode: 'value 2'}" -->
    <div class="text-[1.2em] mb-4">
        <label class="mr-1">Tỉnh / Thành phố</label>
        <select class="input-field" formControlName="cityKey">
            <option *ngFor="let city of allCities" [ngValue]="{id: city.Id, cityCode: city.CityCode}">{{city.Name}}</option>
        </select>
    </div>

    <!-- Cách 2: sử dụng attribute data-… -->
    <!-- Sử dụng attribute data-…có thể áp dụng với dữ liệu động tăng tính linh hoạt -->
    <select (change)="onSelectCityChange($event.target)" class="input-field">
        <option
            *ngFor="let city of allCities"
            [value]="city.Id"
            [attr.data-cityCode]="city.CityCode"
            [selected]="city.Id == cityId"
        >
            {{ city.Name }}
        </option>
    </select>`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    // Lấy thẻ option được chọn sau khi sự kiện select thay đổi
    onSelectCityChange(event: any) {
        const selectedOption = event.selectedOptions[0];
        this.cityId = selectedOption.value; // lấy value
        this.cityCode = selectedOption.dataset.citycode; // lấy data
    }
`,
			},
		],
	},
	{
		id: 'chay-ung-dung-front-end-tren-thu-muc-build-bang-docker-compose',
		name: 'Chạy ứng dụng front-end trên thư mục build bằng docker compose',
		codeBlocks: [
			{
				name: 'Docker file',
				language: 'dockerfile',
				code: `    # Sử dụng Node.js làm base image
    FROM node:lts-alpine

    # Cài đặt công cụ 'serve' để phục vụ file tĩnh
    RUN npm install -g serve

    # Tạo thư mục làm việc bên trong container
    WORKDIR /app

    # Copy thư mục build vào container
    COPY ./build /app # Lưu ý: có một số phiên bản khi build sẽ ra thư mục dist thì copy vào thay vì thư mục build

    # Expose port 3000 (hoặc port khác bạn muốn sử dụng)
    EXPOSE 3000

    # Chạy ứng dụng với 'serve'
    CMD ["serve", "-s", ".", "-l", "3000"]`,
			},
			{
				name: 'Docker compose',
				language: 'dockerfile',
				code: `   services:
    react-app:
        image: react-dashboard
        build:
        context: .
        dockerfile: Dockerfile
        
        container_name: rEact-dashboard
        # ports:
        #   - "3000:443"
        restart: always
        networks:
        - aloper-prod_default # Liên kết với mạng đã tồn tại

    networks:
    aloper-prod_default: # Sử dụng mạng external
        # external: true`,
			},
		],
	},
	{
		id: 'chinh-dinh-chinh-xac-active-url',
		name: 'Chỉnh định chính xác active url',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `   [routerLinkActiveOptions]="{exact: true}"`,
			},
		],
	},
	{
		id: 'click-vao-khoan-trong-de-dong-menu',
		name: 'Click vào khoản trống để đóng menu',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <button class="select-none" (click)="onShowMenuProfile($event)">
        {{ userStore.userName() }}
    </button>`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `   // sự kiện click trên nút mở menu
    onShowMenuProfile(event: Event) {
        event.stopPropagation();
        this.showProfile = !this.showProfile;
    }

    // sự kiện click ở khoản trống để đóng menu
    @HostListener('document:click', ['$event'])
    onHidemenuProfile() {
        this.showProfile = false;
        console.log(123);
        
    }`,
			},
		],
	},
	{
		id: 'cac-hinh-anh-hien-thi-deu-nhau-trong-grid-tailwind-css',
		name: 'Các hình ảnh hiển thị đều nhau trong grid-tailwind-css',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `   <!-- các hình ảnh hiển thị đều nhau trong grid -->
    <div class="relative" style="height: 0; padding-top: 100%;">
        <img src="path_to_image.jpg" alt="Image" class="absolute inset-0 w-full h-full object-cover" />
    </div>`,
			},
		],
	},
	{
		id: 'dark-mode',
		name: 'Dark Mode',
		linkToDrive: 'a',
	},
	{
		id: 'debounce',
		name: 'Debounce',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { ReactiveFormsModule } from '@angular/forms';
    import { NgModule } from '@angular/core';

    @NgModule({
        imports: [
            ReactiveFormsModule,
            // Các module khác...
        ],
    })
    export class AppModule {}
    import { Component, OnInit } from '@angular/core';
    import { FormControl } from '@angular/forms';
    import { debounceTime } from 'rxjs/operators';

    @Component({
    selector: 'app-input-debounce',
    template:'
        <input [formControl]="searchInput" placeholder="Search here..." />
        <p>Kết quả: {{ result }}</p>
    ',
    })
    export class InputDebounceComponent implements OnInit {
        searchInput: FormControl = new FormControl('');
        result: string = '';

        ngOnInit() {
            this.searchInput.valueChanges
            .pipe(
                debounceTime(500) // Đặt thời gian debounce là 500ms
            )
            .subscribe(value => {
                this.result = value; // Cập nhật kết quả sau khi debounce
            });
        }
    }`,
			},
		],
	},
	{
		id: 'deploy-angular-app-on-github-page',
		name: 'Deploy_angular_app_on_github_page',
		codeBlocks: [
			{
				name: 'Steps',
				language: 'text',
				code: `    thay đổi các đường dẫn file tĩnh   repoName/assets/...

    Step 1 - ng add angular-cli-ghpages
    Step 2 - push Code to githubRepo
    Step 3 - go to repo setting and select main branch and save
    Step 4 - build application using below cmd
        ng build --base-href "https://VinhTin-AQUA.github.io/Portfolio/"
    Step 5 - publish your build changes from your local folder to github pages with below cmd
    npx angular-cli-ghpages --dir=dist/portfolio/browser
    Step 6 -  go to repo setting and select gh-pages branch and save`,
			},
		],
	},
	{
		id: 'kiem-tra-nhap-chu-trong-input',
		name: 'Kiểm tra nhập chữ trong input',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    private isNumeric(str: string): boolean {
        const regex = /^[0-9]+$/;
        return regex.test(str);
    }`,
			},
		],
	},
	{
		id: 'kiem-tra-token-het-han',
		name: 'Kiểm tra token hết hạn',
		codeBlocks: [
			{
				name: 'Tải thư viện: jwt-decode',
				language: 'shell',
				code: `    npm install jwt-decode`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import jwt_decode from 'jwt-decode';

    // Giải mã JWT và trả về payload
    decodeToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }

    // Kiểm tra token có hết hạn hay chưa
    isTokenExpired(token: string): boolean {
        const decodedToken = this.decodeToken(token);

        if (!decodedToken) {
            return true;  // Token không hợp lệ hoặc không thể giải mã
        }

        const expirationDate = decodedToken.exp * 1000; // Chuyển từ giây sang milliseconds
        const currentDate = new Date().getTime();

        return expirationDate < currentDate;  // Trả về true nếu token đã hết hạn
    }`,
			},
		],
	},
	{
		id: 'lay-attribute-data-id',
		name: 'Lấy attribute data-id',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <select formControlName="ward"
	class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:">
			@for (w of wards; track $index) {
				<option value="{{ w.ward_name }}">{{ w.ward_name }}</option>
			}
    </select>`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    onProviceChanged(event: any) {
        const selectedOption = event.target.selectedOptions[0];
        this.getDistricts(selectedOption.getAttribute('id'));
    }`,
			},
		],
	},
	{
		id: 'ngan-chan-nhap-e-trong-input-number',
		name: 'Ngăn chặn nhập e trong input number',
		codeBlocks: [
			{
				name: 'CSS',
				language: 'css',
				code: `    /* Đối với Chrome, Safari, Edge, Opera */
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Đối với Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }`,
			},
			{
				name: 'Html',
				language: 'html',
				code: `    <!-- ngăn chặn nhập logarit tự nhiên e và các ký tự +,-,. -->
    <input type="number" (keydown)="preventInvalidInput($event)">`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    preventInvalidInput(event: KeyboardEvent): void {
        // Nếu ký tự là 'e', '+', '-', hoặc '.'
        if (['e', 'E', '+', '-'].includes(event.key)) {
        event.preventDefault();
        }
    }`,
			},
		],
	},
	{
		id: 'render-html-tu-phuong-thuc-ts',
		name: 'Render html từ phương thức ts',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <div [innerHTML]="render()"></div>`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    render(): string {
        return '<p class="text-red-400">Hello World!</p>';
    }`,
			},
		],
	},
	{
		id: 'run-angular-app-with-ssl',
		name: 'Run angular app with ssl',
		linkToDrive: 'a',
	},
	{
		id: 'scroll-den-element-view-child',
		name: 'Scroll đến element view child',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <input #phone type="text" />`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    @ViewChild('phone') phone!: ElementRef;

    onSubMit() {
        this.phone.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        this.phone.nativeElement.focus()
    }
    /* Tóm tắt các giá trị của block:
    start: Cuộn phần tử lên đầu vùng nhìn.
    center: Cuộn phần tử vào giữa vùng nhìn.
    end: Cuộn phần tử xuống cuối vùng nhìn.
    nearest: Cuộn đến vị trí gần nhất có thể mà phần tử vẫn nằm trong vùng nhìn. */`,
			},
		],
	},
	{
		id: 'style-cho-element-ref',
		name: 'Style cho element ref',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <input #phone />`,
			},
			{
				name: 'Html',
				language: 'html',
				code: `    @ViewChild('phone') phone!: ElementRef;

    obSubmit() {
        // Thêm border và màu sắc cho focus
        this.phone.nativeElement.style.borderColor = 'rgb(239, 68, 68)';
        this.phone.nativeElement.style.borderOpacity = '1';
        
        // Thêm các class tùy chỉnh khi focus
        this.phone.nativeElement.classList.add('focus:border-red-500', 'focus:ring-red-400');
    }`,
			},
		],
	},
	{
		id: 'tham-so-event-trong-su-kien',
		name: 'Tham số event trong sự kiện',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <!-- file -->
    <div>
        <input (change)="onChange($event)" type="file" id="fileInput" />
    </div>
        
    <!-- text -->
    <div>
        <input (change)="onChange($event)" type="text" id="fileInput" />
    </div>`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    // file
    onChange(event: any) {
    const file = event.target.files[0];
    const blobUrl = URL.createObjectURL(file); // Tạo Blob URL
        this.blobUrl = blobUrl
    }
                    
    // text
    onChange(event: any) {
        this.inputValue = event.target.value;
        console.log('Giá trị mới:', this.inputValue);
        // Ở đây, bạn có thể thực hiện các xử lý khác với giá trị nhập vào, ví dụ:
        // - Gửi dữ liệu lên server
        // - Kiểm tra tính hợp lệ của dữ liệu
        // - Cập nhật giao diện
    }
    `,
			},
		],
	},
	{
		id: 'thiet-lap-title-va-url-dong-theo-doi-tuong',
		name: 'Thiết lập title và url động theo đối tượng',
		linkToDrive: 'a',
	},
	{
		id: 'upload-files',
		name: 'Upload files',
		linkToDrive: 'a',
	},
	{
		id: 'xoa-1-phan-tu-khoi-mang',
		name: 'Xóa 1 phần tử khỏi mảng',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    const index = this.users.findIndex((x) => x.id === user?.id);
    if (index !== -1) {
        this.users.splice(index, 1);
    }`,
			},
		],
	},
	{
		id: 'dat-gia-tri-mac-dinh-date-trong-form',
		name: 'Đặt giá trị mặc định Date trong form',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    this.addForm = this.formBuilder.group({
        bod: [this.getDefaultDate()],
    });

    // Hàm trả về ngày mặc định (ở đây là ngày hiện tại)
    private getDefaultDate(): string {
        const today = new Date();
        // Cần chuyển đổi về định dạng yyyy-MM-dd vì đây là định dạng hợp lệ của input type="date"
        const month = today.getMonth() + 1; // Vì getMonth() trả về tháng từ 0-11, cần cộng thêm 1
        const day = today.getDate();
        const year = today.getFullYear();

        // Chuyển ngày về dạng yyyy-MM-dd
        return \`\${year}-\${month.toString().padStart(2, '0')}-\${day.toString().padStart(2, '0')}\`;
    }`,
			},
		],
	},
	{
		id: 'dinh-dang-hien-thi-ngay-thang-pipe',
		name: 'Định dạng hiển thị ngày tháng sử dụng DatePipe',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <td class="whitespace-nowrap px-6 py-4">{{donorPetAudit.lastDonation | date:'dd/MM/yyyy' }}</td>`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { DatePipe } from '@angular/common';
    imports: [DatePipe],`,
			},
		],
	},
	{
		id: 'dinh-dang-ngay-thang-form-group',
		name: 'Định dạng ngày tháng',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({
            // Tạo một FormControl để chứa ngày tháng
            date: new FormControl(new Date().toISOString().substring(0, 10)),
            // Thêm các FormControl khác nếu cần
        });
    }`,
			},
		],
	},
	{
		id: 'copy-to-clipboard',
		name: 'Copy to clipboard',
		codeBlocks: [
			{
				name: 'Typescript',
				language: 'typescript',
				code: `   	copyCode(codeText: any) {
		navigator.clipboard.writeText(codeText).then(() => {
			alert('Đã sao chép vào clipboard! 🎉');
		});
	}`,
			},
		],
	},
];

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

export const directiveCustomCodes = [
	{
		id: 'dinh-nghia',
		name: 'Định nghĩa',
		codeBlocks: [
			{
				name: 'Định nghĩa',
				language: 'text',
				code: `    - Là những attribute của 1 thẻ html
    - Là những directive được angular xây dụng sẵn.
    - Directive được angular xây dựng sẵn: NgClass , NgStyle , NgModel`,
			},
		],
	},
	{
		id: 'directive-custom',
		name: 'Directive custom',
		codeBlocks: [
			{
				name: 'Tạo directive',
				language: 'shell',
				code: `    ng g d HightLight`,
			},
			{
				name: 'Code',
				language: 'typescript',
				code: `    import { Directive, ElementRef } from '@angular/core';

    @Directive({
    selector: '[appHightLight]',
    })
        export class HightLightDirective {
        constructor(private el: ElementRef) {
            this.el.nativeElement.style.backgroundColor = 'yellow';
        }
    }`,
			},
			{
				name: 'Cách sử dụng',
				language: 'html',
				code: `    <h3 appHightLight>Hello world</h3>`,
			},
			{
				name: 'Thêm xử lý sự kiện',
				language: 'typescript',
				code: `    import { Directive, ElementRef, HostListener } from '@angular/core';

    @Directive({
        selector: '[appHightLight]',
    })
    export class HightLightDirective {
        constructor(private el: ElementRef) {
            this.el.nativeElement.style.backgroundColor = 'yellow';
        }

        private fontWeight(isBold: boolean) {
            isBold === true
            ? (this.el.nativeElement.style.fontWeight = 'bold')
            : (this.el.nativeElement.style.fontWeight = 'normal');
        }

        @HostListener('mouseenter') onMouseEnter() {
            this.fontWeight(true);
        }

        @HostListener('mouseleave') onMouseLeave() {
            this.fontWeight(false);
        }
    }`,
			},
		],
	},
];

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

export const pipeCodes = [
	{
		id: 'dinh-nghia',
		name: 'Định nghĩa',
		codeBlocks: [
			{
				name: 'Định nghĩa',
				language: 'text',
				code: `    - Pipe được sử dụng để ứng dụng tự động chuyển đổi các giá trị như: tiền tệ, định dạng ngày tháng`,
			},
			{
				name: 'Link tham khảo',
				language: 'text',
				code: `    https://v17.angular.io/guide/pipe-template`,
			},
		],
	},
	{
		id: 'cach-su-dung-pipe-thuong-gao',
		name: 'Cách sử dụng Pipe thường gặp',
		codeBlocks: [
			{
				name: 'Áp dụng Pipe trong HTML',
				language: 'html',
				code: `    <h2>{{ var_name | uppercase }}</h2>
    <h2>{{ var_one | date:"Fulldate"}}</h2>
    <h2>{{ var_one | date:"Shortdate"}}</h2>
    <h2>{{ var_one | date:"Middiumdate"}}</h2>
    <h2>{{ var_one | date:"DD-MM-YY"}}</h2>
    <h2>{{ var_one | date:"HH-MM--SS"}}</h2>`,
			},
			{
				name: 'Áp dụng nhiều PIPE cùng lúc',
				language: 'html',
				code: `    <p>{{3.5 | ceil | toFixed:0}}</p>`,
			},
		],
	},
	{
		id: 'custom-pipe-1-tham-so',
		name: 'Custom Pipe 1 tham số',
		codeBlocks: [
			{
				name: 'Tạo Pipe',
				language: 'shell',
				code: `    ng g p Name –skip-tests`,
			},
			{
				name: 'Nội dung Pipe',
				language: 'typescript',
				code: `    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
        name: 'floor'
    })
        export class FloorPipe implements PipeTransform {
        // làm tròn xuống
        transform(value: any): unknown {
            return Math.floor(value);
        }
    }`,
			},
			{
				name: 'Cách sử dụng',
				language: 'html',
				code: `    <span class="text-[0.9em] text-blue-600">{{ city.vote | floor }}</span>`,
			},
		],
	},
	{
		id: 'custom-pipe-nhieu-tham-so',
		name: 'Custom pipe nhiều tham số',
		codeBlocks: [
			{
				name: 'Tạo pipe chứa nhiều tham số',
				language: 'typescript',
				code: `    @Pipe({
        name: 'star'
    })
    export class StarPipe implements PipeTransform {
        transform(value: number, param1: number, params2: string): number {
            // code xử lý
            return Math.floor(value);
        }
    }`,
			},
			{
				name: 'Sử dụng',
				language: 'html',
				code: `    <span class="text-[0.9em] text-blue-600">{{ city.vote | star : 0 : '' }}</span>`,
			},
		],
	},
];

export const layoutCodes = [
	{
		id: 'pinterest-layouts',
		name: 'Pinterest layouts',
		codeBlocks: [
			{
				name: 'Link tham khảo',
				language: 'text',
				code: `    https://dev.to/hungle00/build-a-masonry-layout-pinterest-layout-3glp?fbclid=IwAR3z4viDmb_5yCpudf0KsYWOScDWM7h3KXqPkxYhasutyANAgHuahGDj4BY`,
			},
			{
				name: 'CSS columns approach',
				language: 'css',
				code: `    /* container */
    .board-grid {
        column-count: 4;
        column-gap: 1em;
    }
        
    /* item */
    .item {
        -webkit-column-break-inside: avoid;
        break-inside: avoid;
        page-break-inside: avoid;
    }`,
			},

			{
				name: 'CSS columns approach using Tailwind css',
				language: 'html',
				code: `    <div class="columns-2 md:columns-3 lg:columns-4 gap-6">
        <div class="break-inside-avoid mb-2">
            <img src="https://i.pinimg.com/564x/77/c8/d4/77c8d48eccb8ae095a3c3ce24b2fce8e.jpg" alt="">
        </div>
    </div>`,
			},
			{
				name: 'CSS grid approach',
				language: 'css',
				code: `    .board-grid {
        display: grid;
        grid-template-columns: repeat (auto-fill, 300px);
        grid-auto-rows: 20px;
        grid-gap: 10px;
    }

    item{
        grid-row-end: span 10;
    }`,
			},
		],
	},
	{
		id: 'reactive-sidebar-header',
		name: 'Reactive sidebar-header-submenu',
		codeBlocks: [
			{
				name: 'Html',
				language: 'html',
				code: `    <div class="h-screen">
        <aside
            id="default-sidebar"
            class="transition-all duration-500"
            [ngClass]="{
                'w-[300px]': showSidebar === true,
                'w-0': showSidebar === false
            }"
            aria-label="Sidebar"
        >
            <div class="h-full">
                <div
                    id="menu-sidebar"
                    class="w-full h-screen py-4 overflow-y-scroll bg-zinc-900 overflow-x-hidden"
                >
                    <ul class="space-y-2 font-medium">
                        @for (item of dotnetMenus; track $index) {

                        <li>
                            @if(item.linkToDrive) {
                            <a
                                [href]="item.linkToDrive"
                                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-zinc-900 group"
                            >
                                <span class="flex-1 ms-3 whitespace-nowrap">{{ item.name }}</span>
                            </a>
                            } @else if (item.url) {} @else {
                            <button
                                (click)="onShowSubMenu(item)"
                                class="cursor-pointer flex items-center w-full p-2 pe-6 text-base text-white transition duration-75 rounded-lg hover:bg-gray-100 hover:text-zinc-900"
                            >
                                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{
                                    item.name
                                }}</span>
                                <svg
                                    class="w-3 h-3"
                                    [ngClass]="{ 'rotate-180': item.showSubMenu }"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            
                            @if(item.showSubMenu) {
                            <ul
                                @submenuAnimation
                                class="text-[0.85rem] space-y-2 transition-all duration-500 overflow-hidden"
                            >
                                @for (submenu of item.subMenus; track $index) {
                                <li>
                                    <a
                                        [routerLink]="'/dot-net/' + submenu.id"
                                        class="flex items-center w-full p-2 rounded-lg pl-11 group text-white hover:bg-gray-100 hover:text-zinc-900"
                                        >{{ submenu.name }}</a
                                    >
                                </li>
                                }
                            </ul>
                            } }
                        </li>
                        }
                    </ul>
                </div>

                <!-- <div class="flex-1" (click)="onShowSideBar(false)"></div> -->
            </div>
        </aside>
    </div>`,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    .active {
        color: oklch(0.448 0.119 151.328);
    }

    #menu-sidebar::-webkit-scrollbar {
        width: 2px; /* width of the entire scrollbar */
        height: 2px;
    }

    #menu-sidebar::-webkit-scrollbar-track {
        background: #fff; /* color of the tracking area */
    }

    #menu-sidebar::-webkit-scrollbar-thumb {
        background: oklch(0.448 0.119 151.328); /* color of the scroll thumb */
    }

    #menu-sidebar::-webkit-scrollbar-thumb:hover {
        background: black; /* color of the scroll thumb on hover */
    }`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { CommonModule } from '@angular/common';
    import { Component, Input } from '@angular/core';
    import { dotnetMenus } from './menus';
    import { animate, style, transition, trigger } from '@angular/animations';
    import { RouterLink } from '@angular/router';

    @Component({
        selector: 'app-side-bar',
        imports: [CommonModule, RouterLink],
        templateUrl: './side-bar.component.html',
        styleUrl: './side-bar.component.scss',
        animations: [
            trigger('submenuAnimation', [
                transition(':enter', [
                    style({ height: '0px', opacity: 0 }),
                    animate('300ms ease-out', style({ height: '*', opacity: 1 })),
                ]),
                transition(':leave', [animate('300ms', style({ height: '0px', opacity: 0 }))]),
            ]),
        ],
    })
    export class SideBarComponent {
        @Input() showSidebar: boolean = true;
        show = true;
        dotnetMenus: any = dotnetMenus;

        constructor() {}

        ngOnInit() {
            for (let i of dotnetMenus) {
                i.showSubMenu = false;
            }
        }

        onShowSubMenu(item: any) {
            if (item.showSubMenu === null || item.showSubMenu === undefined) {
                return;
            }
            item.showSubMenu = !item.showSubMenu;
        }
    }`,
			},
		],
	},
];

export const techCodes = [
	{
		id: 'apollo-client',
		name: 'Apollo client (link to drive)',
		linkToDrive: 'a',
	},
];

export const signalStoreCodes = [
	{
		id: 'su-dung-signal-store',
		name: 'Sử dụng Signal Store',
		codeBlocks: [
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    ng add @ngrx/signals@latest`,
			},
			{
				name: 'Tạo store',
				language: 'typescript',
				code: `    import { signalStore, withState } from '@ngrx/signals'; 
    import { Book } from '../models/book';

    type BooksState = { books: Book[]; isLoading: boolean; };

    const initialState: BooksState = {
        books: [], isLoading: false,
    };

    export const BooksStore = signalStore({ providedIn: 'root' }, withState(initialState));`,
			},
			{
				name: "{ providedIn: 'root' } cung cấp cho toàn bộ ứng dụng. Khi đó không cần cung cấp provider cho từng component như bên dưới",
				language: 'typescript',
				code: `    providers: [BookStore]`,
			},
			{
				name: 'Inject và sử dụng',
				language: 'typescript',
				code: `    export class BookComponent {
        store = inject(BooksStore);
        
        constructor() {}
        
        click() {
            this.store.books().push({
                title: 'a',
                author: 'a',
                published: new Date(),
            });
        }
    }`,
			},
		],
	},
	{
		id: 'cac-function-mo-rong',
		name: 'Các function mở rộng',
		codeBlocks: [
			{
				name: 'withMethods',
				language: 'typescript',
				code: `    // thêm các hàm mở rộng
    import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
    type LoaderState = {
        show: boolean;
    };
    const initialState: LoaderState = {
        show: false,
    };
    export const LoaderStore = signalStore(
        { providedIn: 'root' },
        withState(initialState),
        withMethods(store => ({
            onShow(flag: boolean): void {
                patchState(store, state => ({
                    show: flag,
                }));
            },
        }))
    )

    /*
    Trong hàm withMethod:
    o	store: bôi xanh là store của signalStore được định nghĩa
    o	onShow: là tên hàm tùy ý, có thể định nghĩa nhiều hàm khác nhau
    o	tham số của onShow định nghĩa tùy ý tùy vào nhu cầu
    o	patchState để thay đổi giá trị store
    o	tham số của patchState: store là store truyền vào từ tham số store bôi xanh, state là giá trị hiện tại của store
    */
        
    // gọi hàm
    export class NoticeComponent {
        loaderStore = inject(LoaderStore);
        onHide() {
            this.loaderStore.onShow(true);
        }
    }`,
			},
		],
	},
];

export const signalCodes = [
	{
		id: 'khai-bao-signal',
		name: 'Khai báo Signal',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `    numberSignal = signal(1);`,
			},
		],
	},
	{
		id: 'lay-gia-tri-signal',
		name: 'Lấy giá trị Signal',
		codeBlocks: [
			{
				name: '',
				language: 'html',
				code: `    <h3>{{numberSignal()}}</h3>`,
			},
		],
	},
	{
		id: 'set-va-update',
		name: 'Set và Update',
		codeBlocks: [
			{
				name: 'Html',
				language: 'typescript',
				code: `    <button (click)="numberSignal.set(2)">Click</button>`,
			},
			{
				name: 'Set',
				language: 'typescript',
				code: `    onClick() {
        this.numberSignal.set(10);
    }`,
			},
			{
				name: 'Update',
				language: 'typescript',
				code: `    onClick() {
        this.numberSignal.update((m) => m + 1);
    }`,
			},
		],
	},
	{
		id: 'computed-signals',
		name: 'Computed signals',
		codeBlocks: [
			{
				name: 'Khi signal thay đổi thì Compute signal cũng thay đổi theo',
				language: 'text',
				code: `   `,
			},
			{
				name: 'Khai báo',
				language: 'typescript',
				code: `    numberSignal = signal(1); // signal
    doubleCount: Signal<number> = computed(() => this.numberSignal() * 2); //  Computed signal

    // chỉ cần thay đổi signal thì doubleCount sẽ được thay đổi theo cách được định nghĩa bên trong computed
    onClick() {
        this.numberSignal.update((m) => m + 1);
    }
`,
			},
		],
	},
];

export const reactiveFormCodes = [
	{
		id: 'dat-trang-thai-dirty-cua-control-trong-form-group',
		name: 'Đặt trạng thái dirty của control trong form group',
		codeBlocks: [
			{
				name: 'Code',
				language: 'typescript',
				code: `    // đặt dirty thành true
    this.registerForm.controls['reEnterPassword'].markAsDirty({
        onlySelf: true,
    });
    
    // đặt thành dirty thành false
    this.registerForm.controls['reEnterPassword'].markAsPristine({
        onlySelf: true,
    });`,
			},
		],
	},
	{
		id: 'reset-value',
		name: 'Reset value',
		codeBlocks: [
			{
				name: 'Code',
				language: 'typescript',
				code: `    // Để đặt lại giá trị của formGroup về giá trị ban đầu, bạn có thể sử dụng phương thức .reset() của formGroup. Tuy nhiên, phương thức này sẽ đặt lại tất cả các giá trị trong formGroup thành giá trị rỗng
    // => có thể gây ra lỗi validate form

    //Sử dụng setValue
    this.formHotelSubmit.controls['hotelName'].setValue(this.hotel.HotelName);
    this.formHotelSubmit.controls['address'].setValue(this.hotel.Address);
    this.formHotelSubmit.controls['description'].setValue(this.hotel.Description);`,
			},
		],
	},
];

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

export const CLICodes = [
	{
		id: 'cli',
		name: 'CLI',
		codeBlocks: [
			{
				name: 'CLI command',
				language: 'shell',
				code: `    https://angular.io/cli/generate

    * tạo module kèm theo routing tại thư mục hiện hành mà không tạo ra thư mục mới
    ng g m <TenModult> --routing --flat

    * tạo component mới bỏ qua file test
    ng g c <TenComponent> --skip-tests

    * tạo service bỏ qua file test
    ng g s <TenService> --skip-tests

    * tạo guard theo class và không tạo file test
    ng g guard Auth --functional=false --skip-tests

    * interceptor
    ng generate interceptor

    * enviroments
    ng generate environments

    * tạo pipe
    ng g p Floor --skip-tests
`,
			},
		],
	},
];

export const echartsAngularCodes = [
	{
		id: 'echarts-angular',
		name: 'Echarts angular',
		codeBlocks: [
			{
				name: 'Link mẫu biểu đồ',
				language: 'text',
				code: `    https://echarts.apache.org/examples/en/index.html`,
			},
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    npm i echarts ngx-echarts`,
			},
			{
				name: 'Html',
				language: 'html',
				code: `    <div class="chart-container">
        <ngx-echarts
            [autoResize]="true"
            echarts
            [options]="options"
            [merge]="updateOptions"
            class="chart"
        ></ngx-echarts>
    </div>
`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { Component } from '@angular/core';
    import { flows } from './data/flow';
    import type { EChartsCoreOption } from 'echarts/core';
    import { NgxEchartsModule } from 'ngx-echarts';
    import { TrackingService } from './tracking.service';

    type DataT = {
        name: string;
        value: [string, number];
    };

    @Component({
        selector: 'app-dashboard',
        imports: [NgxEchartsModule],
        templateUrl: './dashboard.component.html',
        styleUrl: './dashboard.component.scss',
    })
    export class DashboardComponent {
        flows = flows;

        options!: EChartsCoreOption;
        updateOptions!: EChartsCoreOption;

        private oneDay = 24 * 3600 * 1000;
        private now!: Date;
        private value!: number;
        private data1!: DataT[];
        private timer: any;

        constructor(private trackingService: TrackingService) {}

        ngOnInit(): void {
            // generate some random testing data:
            this.data1 = [];
            this.now = new Date(1997, 9, 3);
            this.value = Math.random() * 1000;

            for (let i = 0; i < 1000; i++) {
                this.data1.push(this.randomData());
            }

            // initialize chart options:
            this.options = {
                title: {
                    text: 'Dynamic Data + Time Axis',
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: (params: any) => {
                        params = params[0];
                        const date = new Date(params.name);
                        return (
                            date.getDate() +
                            '/' +
                            (date.getMonth() + 1) +
                            '/' +
                            date.getFullYear() +
                            ' : ' +
                            params.value[1]
                        );
                    },
                    axisPointer: {
                        animation: false,
                    },
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false,
                    },
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: true,
                    },
                },
                series: [
                    {
                        name: 'Fake Data',
                        type: 'line',
                        symbol: 'none',
                        sampling: 'lttb',
                        itemStyle: {
                            color: 'rgb(52, 248, 62)',
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(52, 248, 62, 0.5)', // Màu ở trên
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(52, 248, 62, 0)', // Màu ở dưới (trong suốt)
                                    },
                                ],
                            },
                        },
                        data: this.data1,
                    },
                ],
            };

            // Mock dynamic data:
            this.timer = setInterval(() => {
                for (let i = 0; i < 5; i++) {
                    this.data1.shift();
                    const d1 = this.randomData();
                    this.data1.push(d1);
                }

                // update series data:
                this.updateOptions = {
                    series: [
                        {
                            data: this.data1,
                        },
                    ],
                };
            }, 1000);
        }

        ngOnDestroy() {
            clearInterval(this.timer);
            this.trackingService.disconnect();
        }

        // Gửi message lên server
        sendMessage() {
            this.trackingService.emit('events', 'Hello from Angular!');
        }

        randomData(): DataT {
            this.now = new Date(this.now.getTime() + this.oneDay);
            this.value = this.value / 1.5 + Math.random() * 100 - 10;

            return {
                name: this.now.toString(),
                value: [
                    [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
                    this.value,
                ],
            };
        }
    }
`,
			},
		],
	},
];

export const jwtDecodeCodes = [
	{
		id: 'jwt-decode',
		name: 'Jwt Decode',
		codeBlocks: [
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    npm install jwt-decode`,
			},
            {
				name: 'Sử dụng',
				language: 'typescript',
				code: `    import { jwtDecode } from "jwt-decode";

    const token = "eyJ0eXAiO.../// jwt token";
    var decoded:any = jwtDecode(token);

    var email = decoded.email;
`,
			},
		],
	},
];

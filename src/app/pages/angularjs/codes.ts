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
];

export const provideConfigCodes = [
	{
		id: 'provide-animation-module',
		name: 'provide animation module',
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
		name: 'provide Http Client',
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
]

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
]

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
]

export const layoutCodes = []



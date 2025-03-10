export const dotnetMenus = [
	{
		name: 'File, Thư mục',
		url: null,
		subMenus: [
			{
				id: 'duong-dan-den-thu-muc-dac-biet-cua-he-thong',
				name: 'Đường dẫn đến thư mục đặc biệt của hệ thống',
			},
			{
				id: 'lay-tat-ca-file-va-thu-muc-con-trong-thu-muc-cha',
				name: 'Lấy tất cả File và thư mục con trong thư mục cha',
			},
			{ id: 'xoa-tat-ca-file-trong-thu-muc', name: 'Xóa tất cả file trong thư mục' },
			{ id: 'chuyen-anh-sang-mang-bytes', name: 'Chuyển ảnh sang mảng bytes' },
			{ id: 'chuyen-mang-byte-ve-anh', name: 'Chuyển mảng byte về ảnh' },
			{ id: 'doc-mang-bytes-tu-file', name: 'Đọc mảng bytes từ file' },
			{ id: 'ghi-mang-byte-vao-file', name: 'Ghi mảng byte vào file' },
			{ id: 'luu-anh', name: 'Lưu ảnh' },
			{ id: 'luu-anh-tu-link-img', name: 'Lưu ảnh từ link img' },
		],
	},
	{
		name: 'Thread, Async',
		subMenus: [
			{ id: 'so-sanh-task-va-thread', name: 'So sánh Task và Thread' },
			{
				id: '2-tac-vu-dung-cho-tac-vu-khac-chay',
				name: '2 tác vụ dừng để tác vụ khác chạy',
			},
			{ id: 'async', name: 'async' },
			{ id: 'task-whenall', name: 'Task.WhenALL' },
			{ id: 'task-whenany', name: 'Task.WhenAny' },
			{ id: 'thuc-thi-khi-dang-doi', name: 'Thực thi khi đang đợi' },
			{
				id: 'kha-nhau-giua-task-delay-va-thread-sleep',
				name: 'Khác nhau giữa Task.Delay và Thread.Sleep',
			},

			{
				id: 'thuc-thi-tuan-tu-sau-khoang-thoi-gian',
				name: 'Thực thi tuần tự sau khoản thời gian',
			},
		],
	},
	{
		name: 'String',
		subMenus: [
			{
				id: 'chuyen-doi-chuoi-ky-tu-unicode-sang-chuoi-khong-dau',
				name: 'Chuyển đổi chuỗi ký tự Unicode sang chuỗi không dấu',
			},
			{ id: 'tao-slug-tu-chuoi-co-san', name: 'Tạo slug từ chuỗi có sẵn' },
		],
	},
	{
		name: 'C-Sharp',
		subMenus: [
			{ id: 'chuyen-dinh-dang-datetimeoffset', name: 'Chuyển định dạng datetimeoffset' },
			{
				id: 'doc-ghi-du-lieu-json-ra-doi-tuong-va-nguoc-lai',
				name: 'Đọc ghi dữ liệu JSON ra đối tượng và ngược lại',
			},
			{ id: 'indexer-dinh-nghia-index', name: 'Địng nghĩa Indexer' },
			{
				id: 'chi-lay-phan-quan-trong-trong-stack-trace',
				name: 'chỉ lấy phần quan trọng trong stack trace',
			},
			{
				id: 'hosted-service-dich-vu-tu-dong-chay-sau-khi-start-ung-dung',
				name: 'Hosted service – dịch vụ tự động chạy sau khi start ứng dụng',
			},
			{
				id: 'trien-khai-background-service-chay-tu-dong',
				name: 'Triển khai Background service chạy tự động',
			},
			{ id: 'build-net-app', name: 'build .NET app' },
			{ id: 'httpclient', name: 'HttpClient' },
			{ id: 'log-chu-co-mau-ra-console', name: 'Log chữ có máu ra console' },
		],
	},
	{
		name: 'Clean Architecture',
		linkToDrive: 'a',
	},
	{
		name: 'Caching',
		linkToDrive: 'a',
	},
	{
		name: 'Deploy',
		linkToDrive: 'a',
	},
	{
		name: 'Net Core chung',
		subMenus: [
			{ id: 'data-annotation-txt', name: 'DataAnnotation' },
			{ id: 'migration-docx', name: 'Migration' },
			{ id: 'custom-middleware-docx', name: 'Custom middleware' },
		],
	},
	{
		name: 'NET CORE MVC ',
		subMenus: [
			{
				id: 'active-menu-item-trong-layout-docx',
				name: 'Active menu item trong layout',
			},
			{
				id: 'ap-dung-css-cho-tung-view-cu-the-docx',
				name: 'Áp dụng css cho từng View cụ thể',
			},
			{
				id: 'chuyen-huong-den-controller-trong-area-txt',
				name: 'Chuyển hướng đến controller trong Area',
			},
			{ id: 'pagination-docx', name: 'Pagination' },
			{ id: 'su-dung-return-url-docx', name: 'Sử dụng return Url' },
			{ id: 'them-font-awesome-vao-mvc-docx', name: 'Thêm Font awesome vào MVC' },
			{
				id: 'truyen-du-lieu-sang-partial-view-docx',
				name: 'Truyền dữ liệu sang partial View',
			},
			{
				id: 'truyen-du-lieu-tu-view-ve-controll-ma-khong-can-tao-model-docx',
				name: 'Truyền dữ liệu từ View về controll mà không cần tạo model',
			},
			{ id: 'upload-file-trong-mvc-docx', name: 'Upload file trong MVC' },
			{
				id: 'xu-ly-returnurl-tra-ve-route-cua-cung-1-controller-docx',
				name: 'Xử lý returnUrl trả về route của cùng 1 controller',
			},
			{
				id: 'binding-du-lieu-tu-the-select-docx',
				name: 'Bindding dữ liệu từ thẻ Select',
			},
			{ id: 'mot-so-ky-thuat-khac-docx', name: 'Một số kỹ thuật khác' },
			{ id: 'addsingleton-docx', name: 'AddSingleton' },
			{
				id: 'code-dam-bao-database-migration-txt',
				name: 'Code đảm bảo Update Migration',
			},
			{ id: 'code-generator-docx', name: 'Code Generator' },
			{
				id: 'dang-ky-va-lay-gia-tri-tu-appsettings-docx',
				name: 'Đăng ký và lấy giá trị từ appsettings',
			},
			{
				id: 'goi-dich-vu-phat-sinh-du-lieu-mau-txt',
				name: 'Gọi dịch vụ phát sinh dữ liệu mẫu',
			},
			{
				id: 'hien-thi-noi-dung-trong-view-khong-bi-encode-docx',
				name: 'Hiển thị nội dung trong View không bị encode',
			},
			{ id: 'key-service-jpg', name: 'Key service' },
			{
				id: 'lay-duong-dan-thu-muc-webroot-va-duong-dan-thu-muc-du-an-docx',
				name: 'Lấy đường dẫn thư mục webroot và đường dẫn thư mục dự án',
			},
			{ id: 'lenh-co-ban-cli-docx', name: 'Lenh_co_ban_CLI' },
			{ id: 'pagination-netcore-pdf', name: 'PAGINATION NetCore' },
			{
				id: 'paht-sinh-du-lieu-ao-su-dung-seeddata-pdf',
				name: 'Phát sinh dữ liệu ảo sử dụng SeedData',
			},
			{ id: 'phat-sinh-url-docx', name: 'Phát sinh URL' },
			{ id: 'thiet-lap-file-tinh-docx', name: 'Thiết lập file tĩnh' },
			{
				id: 'tich-hop-va-trien-khai-danh-gia-hieu-xuat-trong-ung-dung-mvc-docx',
				name: 'Tích hợp và triển khai đánh giá hiệu xuất trong ứng dụng MVC',
			},
			{ id: 'xac-thuc-giao-thuc-https-txt', name: 'Xác thực giao thức https' },
			{ id: 'dich-vu-gui-mail-sms-docx', name: 'Dịch vụ gửi mail' },
			{ id: 'viewdata-viewbag-tempdata-pdf', name: '_ViewData – ViewBag – TempData' },
			{ id: '1-tong-quan-mo-hinh-mvc-pdf', name: 'Tổng quan mô hình MVC' },
			{
				id: '2-tao-route-anh-xa-url-vao-controller-action-area-trong-mvc-pdf',
				name: 'Tạo route và ánh xạ route vào Controller, Action, Area, trong_MVC',
			},
			{
				id: '3-tich-hop-entity-framework-lam-viec-voi-sql-server-docx',
				name: 'Tích hợp EF, làm việc với SQL server',
			},
			{
				id: '4-model-bindingvalidation-tao-trang-lien-he-su-dung-gulp-css-docx',
				name: 'Model Binding Validation tao trang lien he su dung Gulp CSS',
			},
			{
				id: '5-tich-hop-identity-phan-quyen-truy-cap-xac-thuc-2-yeu-to-docx',
				name: 'Tích hợp Identity - Phân quyền truy cập - Xác thực 2 yếu tố',
			},
			{
				id: '6-tich-hop-html-editor-summernotes-docx',
				name: 'Tích hợp text editor SummerNote',
			},
			{
				id: '7-tich-hop-thu-vien-quan-ly-file-elfinder-docx',
				name: 'Tích hợp thư viện quản lý file ElFinder',
			},
		],
	},
	{
		name: 'NET Core API',
		subMenus: [
			{
				id: 'custom-loi-modelstate-gui-den-client-thanh-mang-chuoi-docx',
				name: 'Custom lỗi ModelState gửi đến client thành mảng chuỗi',
			},
			{ id: 'dang-nhap-gg-api-docx', name: 'Đăng nhập GG API' },
			{ id: 'dich-vu-gui-mail-api-docx', name: 'Dịch vụ gửi mail API' },
			{ id: 'enable-cors-docx', name: 'Enable CORS' },
			{ id: 'form-request-docx', name: 'Form Request' },
			{ id: 'jwt-service-docx', name: 'JWT - Service' },
			{
				id: 'khac-phuc-spam-api-bi-trung-du-lieu-docx',
				name: 'Khắc phục spam API bị trùng dữ liệu',
			},
			{ id: 'upload-file-api-docx', name: 'Upload File API' },
		],
	},
	{
		name: 'Packages - Libraries',
		subMenus: [
			{
				id: 'graphql-hotchocolate-link-to-drive',
				name: '_GraphQL - HotChocolate (link to drive)',
			},
			{ id: 'identity-link-to-drive', name: '_Identity (link to drive)' },
			{ id: 'automapper-code-su-dung', name: 'AutoMapper:code sử dụng' },
			{ id: 'dapper-link-to-drive', name: 'Dapper (link to drive)' },
			{ id: 'entity-framework-link-to-drive', name: 'Entity Framework (link to drive' },
			{ id: 'firebase-link-to-drive', name: 'Firebase (link to drive)' },
			{ id: 'for-wpf-link-to-drive', name: 'For WPF (link to drive)' },
			{ id: 'logging-link-to-drive', name: 'Logging (link to drive)' },
			{ id: 'minio-link-to-drive', name: 'MinIO 9link to drive)' },
			{ id: 'mongo-link-to-drive', name: 'Mongo (link to drive)' },
			{ id: 'pdf-link-to-drive', name: 'PDF (link to drive)' },
			{ id: 'signalir-link-to-drive', name: 'SignalIR 9link to drive)' },
			{
				id: 'bogus-phat-sinh-du-lieu-ao-su-dung-thu-vien-docx',
				name: 'BOGUS - phát sinh dữ liệu ảo',
			},
			{ id: 'cloudinary-api-in-net-docx', name: 'CLoudinary API in .NET' },
			{ id: 'hangfire-docx', name: 'Hangfire' },
			{ id: 'selenium-docx', name: 'Selenium' },
			{ id: 'swagger-docx', name: 'Swagger' },
			{
				id: 'trien-khai-rabbitmq-trong-net-api-docx',
				name: 'Triển khai RabbitMQ trong .NET API',
			},
			{ id: 'websocket-in-net-docx', name: 'WebSocket In NET' },
		],
	},
	{
		name: 'Techs',
		subMenus: [{ id: 'rate-limiting', name: 'Rate limiting' }],
	},
	{
		name: 'Testing',
		subMenus: [{ id: 'x-unit', name: 'X Unit' }],
	},
	{
		name: 'WPF',
		linkToDrive: 'a',
	},
] as any;

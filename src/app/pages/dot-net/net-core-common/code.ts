export const codes = [
    {
		id: 'chi-lay-phan-quan-trong-trong-stack-trace',
		name: 'Chỉ lấy phần quan trọng trong stack trace',
		code: `    {
        if (string.IsNullOrEmpty(stackTrace))
        {
            return "";
        }
        var relevantLines = new StringBuilder();
        var lines = stackTrace.Split(new[] { Environment.NewLine }, StringSplitOptions.None);

        foreach (var line in lines)
        {
            if (line.Contains(" in ")) // Chỉ lấy những dòng chứa thông tin về file
            {
                relevantLines.AppendLine(line.Trim());
            }
        }

        return relevantLines.ToString();
    }                
`,
	},
    {
		id: 'hosted-service-dich-vu-tu-dong-chay-sau-khi-start-ung-dung',
		name: 'Hosted service – dịch vụ tự động chạy sau khi start ứng dụng',
		code: `    public class SystemHostedService : IHostedService
    {
        private readonly IServiceProvider serviceProvider;

        public SystemHostedService(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        public async Task StartAsync(CancellationToken cancellationToken)
        {
            // Sử dụng DI để lấy service cần thiết
            using (var scope = serviceProvider.CreateScope())
            {
                var myService = scope.ServiceProvider.GetRequiredService<ISystemService>();
                await myService.Init();
            }
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {}
    }
    // Đăng ký dịch vụ
    services.AddHostedService<SystemHostedService>();
`,
	},
    {
		id: 'build-net-app',
		name: 'build .NET app',
		code: `    /* build C# console */ 

    // bổ sung các tùy chọn trong .csproj -> PropertyGroup -> 
        <OutputType>Exe</OutputType>
        <TargetFramework>net8.0</TargetFramework>
        <RuntimeIdentifiers>win-x64;linux-x64;osx-x64</RuntimeIdentifiers>

    // build dự án ở chế độ release

    // mở Developer Powner shell trong visual studio hoặc mở terminal và cd đến thư mục dự án

    // Nếu đã build ở chế độ release thì không cần restore
        dotnet publish -c Release -r win-x64 -p:PublishSingleFile=true -p:TrimUnusableAssemblies=true --self-contained true --no-restore

    // tùy chọn:
        win-x64, linux-x64, osx-arm64

    // nếu chưa build thì gõ lệnh
        dotnet publish -c Release -r win-x64 -p:PublishSingleFile=true --self-contained true
        
    // Nén file (TrimUnusableAssemblies): Giảm kích thước file thực thi
        dotnet publish -c Release -r win-x64 -p:PublishSingleFile=true -p:TrimUnusableAssemblies=true --self-contained true
        
    // kiểm tra kết quả	bin/Release/net6.0/win-x64/publish/MyConsoleApp.exe             
`,
	},
    {
		id: 'data-annotation',
		name: 'DataAnnotation',
		code: `    - Set ID tự động tăng
        + model
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        
        + modelBuilder
        modelBuilder.Entity<City>()
            .HasKey(c => c.Id)
            .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

    - set số lượng ký tự
        [Column(TypeName = "nvarchar(70)")]
        
    - ForeignKey
        [ForeignKey("SuperheroId")]          
`,
	},
    {
		id: 'migration',
		name: 'Migration',
		code: `    // Install packages
    Install-Package Microsoft.EntityFrameworkCore.Tools #Migration
    dotnet add package Microsoft.EntityFrameworkCore.Design #EF Core

    // Tạo migration mới
    dotnet ef migrations add <TênMigration>
    Add-Migration <TênMigration>

    // Áp dụng migration mới nhất vào cơ sở dữ liệu
    dotnet ef database update
    Update-Database

    // Hoàn tác (rollback) migration gần nhất, các migration sau <TênMigration> sẽ ở trạng thái pending
    Update-Database -migration Migration2
    dotnet ef database update Migration2

    // Hoàn tác tất cả migration
    Update-Database -migration 0
    dotnet ef database update 0

    // Áp dụng một migration cụ thể vào cơ sở dữ liệu
    dotnet ef database update <TênMigration>
    Update-Database -Migration

    // Hiển thị tất cả các migration 
    dotnet ef migrations list
    Get-Migration

    // Xóa migration ở trạng thái pending
    dotnet ef migrations remove
    Remove-Migration   
`,
	},
    {
		id: 'custom-middleware',
		name: 'Custom middleware',
		code: `    // Tạo middle ware
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext, IOtherService service)
        {
            try
            {
                await next(httpContext);
            }
            catch (Exception ex)
            {
                // log errors
                service.Log("error");

                // 
                httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                httpContext.Response.ContentType = "application/json";

                await httpContext.Response.WriteAsJsonAsync(new
                {
                    Message = "Có lỗi xảy ra. Vui lòng liên hệ cho nhà quản trị.",
                    IsSuccess = false
                });
            }
        }
	}
    // Sử dụng
    app.UseMiddleware<ExceptionMiddleware>();
`,
	},
];

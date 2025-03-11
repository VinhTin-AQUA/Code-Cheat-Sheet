export const codes = [
	{
		id: 'chuyen-dinh-dang-datetimeoffset',
		name: 'Chuyển định dạng datetimeoffset',
        language: 'csharp',
		code: `    // Tạo một DateTimeOffset
    DateTimeOffset myDateTimeOffset = DateTimeOffset.Now;

    // Chuyển đổi thành chuỗi với định dạng mong muốn
    string formattedDateTime = myDateTimeOffset.ToString("dd/MM/yyyy HH:mm:ss");

    // In ra màn hình
    Console.WriteLine(formattedDateTime);
`,
	},
	{
		id: 'doc-ghi-du-lieu-json-ra-doi-tuong-va-nguoc-lai',
		name: 'Đọc ghi dữ liệu JSON ra đối tượng và ngược lại',
        language: 'csharp',
		code: `   #region ghi dữ liệu json

    Account account = new()
    {
        Name = "Hồ Vĩnh Tín",
        Age = 21,
        Activated = true,
        Memebers = ["A", "B", "C", "D"]
    };

    string json = JsonConvert.SerializeObject(account, Formatting.Indented);
    string path = @"Data\saveJson.json";
    File.WriteAllText(path, json);

    #endregion

    #region đọc dữ liệu từ json ra đối tượng

    string path = @"Data\saveJson.json";
    string jsonText = File.ReadAllText(path);
    Account account = JsonConvert.DeserializeObject<Account>(jsonText);
    Console.WriteLine(account.Name);
    Console.WriteLine(account.Age);
    Console.WriteLine(account.Activated);
    account.Memebers.ForEach(m => {
        Console.WriteLine(m);
    });

    #endregion          
`,
	},
    {
		id: 'indexer-dinh-nghia-index',
		name: 'Định nghĩa Indexer',
        language: 'csharp',
		code: `    using System.Text;
    using System.Linq;

    class Complex
    {
        double a, b;

        public Complex(double a, double b)
        {
            this.a = a;
            this.b = b;
        }
        public void Print()
        {
            Console.WriteLine($"{a}i + {b}");
        }

        // tạo indexer
        // public double this[chiso] chiso có thể là kiểu chuỗi và một số kiểu dữ liệu khác
        public double this[int i]
        {
            set // cài đặt cho phép gán
            {
                switch (i) 
                {
                    case 0: // nếu index = 0
                        a = value;
                        break;
                    case 1: // nếu index = 1
                        b = value;
                        break;
                    default:
                        throw new Exception("Chi so khong hop le");
                }
            }
            get // cài đặt cho phép lấy dữ liệu
            {
                switch (i)
                {
                    case 0: // nếu index = 0
                        return a;
                    case 1: // nếu index = 1
                        return b;
                    default:
                        throw new Exception("Chi so khong hop le");
                }
            }
        }
    }
    class Program
    {
        /*
            indexer là cách chúng ta truy cập vào các trường dữ liệu của class 
        */
        static void Main()
        {
            Complex z1 = new Complex(2, 3);
            z1.Print();

            z1[0] = 8;
            z1[1] = 3;
            z1.Print();
        }
    }      
`,
	},
    {
		id: 'chi-lay-phan-quan-trong-trong-stack-trace',
		name: 'Chỉ lấy phần quan trọng trong stack trace',
        language: 'csharp',
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
		id: 'tao-slug-tu-chuoi-co-san',
		name: 'Triển khai Background service chạy tự động',
        language: 'csharp',
		code: `    public class RoomBackgroundService : BackgroundService
    {
        private readonly IServiceScopeFactory serviceScopeFactory;
        private Timer _timer;

        public RoomBackgroundService(
            IServiceScopeFactory serviceScopeFactory)
        {
            this.serviceScopeFactory = serviceScopeFactory;
            _timer = null!;
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            //_timer = new Timer(CheckFirstDayOfMonth, null, TimeSpan.Zero, TimeSpan.FromMinutes(1));
            _timer = new Timer(async (state) => await CheckScheduledTimeAsync(), null, TimeSpan.Zero, TimeSpan.FromMinutes(1));
            return Task.CompletedTask;
        }

        private async Task CheckScheduledTimeAsync()
        {
            var currentTime = DateTime.Now;
            // Kiểm tra nếu là 00:00:00 và là ngày đầu tháng
            if (currentTime.Hour == 0 && currentTime.Minute == 0 && currentTime.Day == 1)
            {
                await UpdateProductStatuses();
            }
        }

        public override void Dispose()
        {
            _timer?.Dispose();
            base.Dispose();
        }

        private async Task UpdateProductStatuses()
        {
            using var scope = serviceScopeFactory.CreateScope();
            var telegramService = scope.ServiceProvider.GetRequiredService<ITelegramService>();
            await telegramService.SendTest("test tự động cập nhật trạng thái phòng");
        }
    }

    // BackgroundService 
    builder.Services.AddHostedService<ProductStatusUpdaterService>();
`,
	},
    {
		id: 'log-chu-co-mau-ra-console',
		name: 'Log chữ có máu ra console',
        language: 'csharp',
		code: `   // Đổi màu chữ thành đỏ
    Console.ForegroundColor = ConsoleColor.Red;

    // In dòng chữ ra console
    Console.WriteLine("Đây là chữ màu đỏ!");

    // Đặt lại màu mặc định
    Console.ResetColor();          
`,
	},
];

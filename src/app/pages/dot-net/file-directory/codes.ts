export const codes = [
	{
		id: 'lay-tat-ca-file-va-thu-muc-con-trong-thu-muc-cha',
		name: 'Lấy tất cả File và thư mục con trong thư mục cha',
        language:'csharp',
		code: `    string[] filePaths = Directory.GetFiles(@"C:\MyDirectory\", "*.*", SearchOption.AllDirectories);`,
	},
	{
		id: 'xoa-tat-ca-file-trong-thu-muc',
		name: 'Xóa tất cả file trong thư mục',
        language:'csharp',
		code: `    using System.IO;
    DirectoryInfo di = new DirectoryInfo(@"C:\example");
    foreach (FileInfo file in di.GetFiles())
    {
        file.Delete(); 
    }
`,
	},
	{
		id: 'xóa toàn bộ file và thư mục con trong thư mục',
		name: 'xóa toàn bộ file và thư mục con trong thư mục',
        language:'csharp',
		code: `    using System.IO;

    DirectoryInfo di = new DirectoryInfo(@"C:\example");

    foreach (FileInfo file in di.GetFiles())
    {
        file.Delete(); 
    }

    foreach (DirectoryInfo dir in di.GetDirectories())
    {
        dir.Delete(true); 
    }`,
	},
	{
		id: 'chuyen-anh-sang-mang-bytes',
		name: 'Chuyển ảnh sang mảng bytes',
        language:'csharp',
		code: `    static byte[] ImageToByteArray(string imagePath)
    {
        // Đọc hình ảnh thành mảng byte
        byte[] imageBytes;
        using (FileStream fs = new FileStream(imagePath, FileMode.Open, FileAccess.Read))
        {
            BinaryReader br = new BinaryReader(fs);
            imageBytes = br.ReadBytes((int)fs.Length);
        }

        return imageBytes;
    }
`,
	},
	{
		id: 'chuyen-mang-byte-ve-anh',
		name: 'Chuyển mảng byte về ảnh',
        language:'csharp',
		code: `    static void ByteArrayToImage(byte[] byteArray)
    {
        using (var ms = new MemoryStream(byteArray))
        {
            using (var fs = new FileStream("/Data/image.png", FileMode.Create))
            {
                ms.WriteTo(fs);
            }
        }
    }
`,
	},
	{
		id: 'doc-mang-bytes-tu-file',
		name: 'Đọc mảng bytes từ file',
        language:'csharp',
		code: `    static byte[] ReadBytesFromFile(string filePath)
    {
        // Đọc mảng byte từ file
        byte[] bytes;
        using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
        {
            BinaryReader br = new BinaryReader(fs);
            bytes = br.ReadBytes((int)fs.Length);
        }

        return bytes;
    }
`,
	},
	{
		id: 'ghi-mang-byte-vao-file',
		name: 'Ghi mảng byte vào file',
        language:'csharp',
		code: `    byte[] data = ImageToByteArray("Images/reminder_background.png");

    using (FileStream fs = new FileStream("Data/reminder_background.bin", FileMode.Create, FileAccess.Write))
    {
        BinaryWriter bw = new BinaryWriter(fs);
        bw.Write(data);
    }
`,
	},
	{
		id: 'luu-anh-tu-url-anh',
		name: 'Lưu ảnh từ URL ảnh',
        language:'csharp',
		code: `    // URL của API trả về mảng byte
    string apiUrl = "https://your-api-url.com/api/get-image";

    // Thư mục Downloads của người dùng
    string downloadsPath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), "Downloads");

    // Tên file bạn muốn lưu
    string fileName = "downloaded_image.jpg";
    language:'csharp',

    // Đường dẫn đầy đủ để lưu file
    string filePath = Path.Combine(downloadsPath, fileName);
    language:'csharp',

    try
    {
        using (HttpClient client = new HttpClient())
        {
            // Gọi API
            Console.WriteLine("Đang gọi API...");
            byte[] imageBytes = await client.GetByteArrayAsync(apiUrl);

            // Lưu ảnh vào file
            Console.WriteLine("Đang lưu ảnh...");
            await File.WriteAllBytesAsync(filePath, imageBytes);

            Console.WriteLine($"Ảnh đã được lưu thành công tại: {filePath}");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Có lỗi xảy ra: {ex.Message}");
    }
`,
	},
	{
		id: 'luu-anh-tu-api-tra-ve-mang-byte',
		name: 'Lưu ảnh từ API trả về mảng byte',
        language:'csharp',
		code: `    using (var client = new HttpClient())
    {
        client.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");
        var form = new MultipartFormDataContent
        {
            { new StringContent(taskId!), "task" },
            { new StringContent(uploadResponse.server_filename), "server_filename" },
             language:'csharp',
            { new StringContent(scale), "scale" },
        };
        var response = await client.PostAsync(scaleUrl, form);
        response.EnsureSuccessStatusCode();
        // Đọc dữ liệu mảng byte từ phản hồi
        byte[] imageBytes = await response.Content.ReadAsByteArrayAsync();
        string filePath = Path.Combine(folderToSaveImages!, uploadResponse.server_filename);
        language:'csharp',
        // Lưu ảnh vào file
        Console.WriteLine($"Saving..... {filePath}");
        await File.WriteAllBytesAsync(filePath, imageBytes);
        Console.WriteLine($"---- Save successfully: {filePath}");
        await Task.Delay(1200);
    }
`,
	},
];

export const codes = [
	{
		id: 'lay-tat-ca-file-va-thu-muc-con-trong-thu-muc-cha',
		name: 'Lấy tất cả File và thư mục con trong thư mục cha',
		code: `    string[] filePaths = Directory.GetFiles(@"C:\MyDirectory\", "*.*", SearchOption.AllDirectories);`,
	},
	{
		id: 'xoa-tat-ca-file-trong-thu-muc',
		name: 'Xóa tất cả file trong thư mục',
		code: `    using System.IO;
    DirectoryInfo di = new DirectoryInfo(@"C:\example");
    foreach (FileInfo file in di.GetFiles())
    {
        file.Delete(); 
    }
`,
	},
    {
        id:'xóa toàn bộ file và thư mục con trong thư mục',
        name: 'xóa toàn bộ file và thư mục con trong thư mục',
        code:  `    using System.IO;

    DirectoryInfo di = new DirectoryInfo(@"C:\example");

    foreach (FileInfo file in di.GetFiles())
    {
        file.Delete(); 
    }

    foreach (DirectoryInfo dir in di.GetDirectories())
    {
        dir.Delete(true); 
    }

        `
    },
	{ id: 'chuyen-anh-sang-mang-bytes', name: 'Chuyển ảnh sang mảng bytes' },
	{ id: 'chuyen-mang-byte-ve-anh', name: 'Chuyển mảng byte về ảnh' },
	{ id: 'doc-mang-bytes-tu-file', name: 'Đọc mảng bytes từ file' },
	{ id: 'ghi-mang-byte-vao-file', name: 'Ghi mảng byte vào file' },
	{ id: 'luu-anh', name: 'Lưu ảnh' },
	{ id: 'luu-anh-tu-link-img', name: 'Lưu ảnh từ link img' },
];

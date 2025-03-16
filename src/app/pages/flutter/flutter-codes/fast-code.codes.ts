export const fastCodes = [
	{
		id: 'dieu-chinh-kich-thuoc-cua-button',
		name: 'Điều chỉnh kích thước của button',
		codeBlocks: [
			{
				name: 'Bọc Button vào container và điều chỉnh width và height của Container',
				language: 'typescript',
				code: `    Container(
                width: 35, // Đặt chiều rộng cố định
                height: 35, // Đặt chiều cao cố định,
                padding: EdgeInsets.all(0),
                margin: EdgeInsets.all(0),
                child: FilledButton(
                    onPressed: widget.onClear,
                    style: FilledButton.styleFrom(
                      backgroundColor: Colors.white,
                      padding: EdgeInsets.all(0),
                      shape: CircleBorder(),
                      side: BorderSide(
                          color: const Color.fromARGB(255, 0, 0, 0),
                          width: 1), // Thêm border
                    ),
                    child: Icon(
                      Icons.clear_outlined,
                      color: Colors.red,
                      size: 20,
                    )),
              ),`,
			},
		],
	},
    {
        id: 'dua-path-cua-anh-sau-khi-chọn-anh-ve-dang-path-thuc-te',
        name: 'Đưa path của ảnh sau khi chọn ảnh về dạng path thực tế',
        codeBlocks: [
            {
                name: '',
                language: 'typescript',
                code: `    String convertUriToLocalPath(String uriPath) {
        final uri = Uri.parse(uriPath);
        return uri.toFilePath(); // Chuyển thành đường dẫn cục bộ
    }`
            }
        ]
    }
];

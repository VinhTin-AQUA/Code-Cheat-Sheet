export const theoDoiLogReleaseCodes = [
	{
		id: 'theo-doi-log-release',
		name: 'Theo dõi Logs ở app release',
		codeBlocks: [{
            name: '',
            language: 'text',
            code: `    - build apk release và cài đặt trên thiết bị
    - Kết nối với thiết bị qua USB
    - trên vs code terminal chạy lệnh: flutter logs
    - tiến hành dùng ứng dụng
    - Hoặc
        adb devices
        flutter run -d [deviceID] --release
        flutter run -d fe969cfe --release`
        }],
	},
];

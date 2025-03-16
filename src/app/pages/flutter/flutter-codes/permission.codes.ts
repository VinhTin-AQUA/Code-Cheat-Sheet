export const permissionCodes = [
	{
		id: 'xin-cap-quyen-truy-cap',
		name: 'xin cấp quyền truy cập ảnh, video, photos, audio, bluetooth, camera,...',
		codeBlocks: [
			{
				name: 'thêm thư viện',
				language: 'yaml',
				code: `    dependencies:
    permission_handler: ^11.3.1
    device_info_plus: ^11.2.1`,
			},
		],
	},
    {
		id: 'xin-cap-quyen',
		name: 'xin cấp quyền',
		codeBlocks: [
			{
				name: 'Xin cấp quyền photo',
				language: 'dart',
				code: `    Future<bool> requestPermission(Permission permission) async {
    AndroidDeviceInfo build = await DeviceInfoPlugin().androidInfo;
        if (build.version.sdkInt >= 30) {
            var re = await Permission.photos.request();
                if (re.isGranted) {
                return true;
            } else {
                return false;
            }
        } else {
            if (await permission.isGranted) {
                return true;
            } else {
                var result = await permission.request();
                if (result.isGranted) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }`,
			},
		],
	},
    {
		id: 'mot-so-permisson-trong-android-manifest',
		name: 'Một số lệnh cấp quyền trong Android manifest - android/app/src/main/AndroidManifest.xml',
		codeBlocks: [
            {
				name: 'Link tham khảo',
				language: 'text',
				code: `    https://developer.android.com/reference/android/Manifest.permission`,
			},
			{
				name: 'liên quan đến lưu trữ',
				language: 'yaml',
				code: `    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
    <uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/>
    <uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/>`,
			},
            {
				name: 'liên quan đến internet',
				language: 'yaml',
				code: `    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />`,
			},
            {
				name: 'liên quan đến sinh trắc học, khóa ứng dụng',
				language: 'yaml',
				code: `    <uses-permission android:name="android.permission.USE_BIOMETRIC" />`,
			},
		],
	},
];

export const buildCodes = [
	{
		id: 'build-apk-android',
		name: 'Build APK android',
		codeBlocks: [
			{
				name: 'Trong android/app/build.gradle, trong khối android, thêm',
				language: 'gradle',
				code: `    buildTypes {
        release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now, so \`flutter run --release\` works.
            signingConfig = signingConfigs.debug
             // Tắt việc kiểm tra debug để file APK tối ưu
            minifyEnabled true
            shrinkResources false
            // Chỉ định file proguard (nếu cần)
            // proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }`,
			},
			{
				name: 'Đổi tên hiển thị ứng dụng: trong android/app/src/main/AndroidManifest.xml, thêm 1 attribute android:label và thẻ <application>',
				language: 'xml',
				code: `    <application android:label="Image Scaling" >`,
			},
			{
				name: 'Đổi applicationId của ứng dụng: trong android/app/build.gradle, trong khối defaultConfig, thay đổi hoặc thêm',
				language: 'gradle',
				code: `    applicationId = "com.newtun.image_scaling"`,
			},
			{
				name: 'Đổi icon của ứng dụng, trong pubspec.yaml',
				language: 'yaml',
				code: `    # thêm dependencies
		dependencies:
			...		  
	  		flutter_launcher_icons: ^0.14.3
	  		
	# thêm cấu hình icon vào file pubspec.yaml, với path đến icon có thể thay đổi
		flutter_launcher_icons:
		  android: true
		  ios: true
		  image_path: "assets/icon/app_icon.png" 
	# chạy lệnh: flutter pub run flutter_launcher_icons:main`,
			},
			{
				name: 'Build',
				language: 'shell',
				code: `    flutter build apk --release`,
			},
		],
	},
	{
		id: 'build-with-cert',
		name: 'Build có chứng chỉ',
		codeBlocks: [
			{
				name: 'chuẩn bị /upload-keystore.jks, nếu chưa có thì tạo theo lệnh sau',
				language: 'shell',
				code: `    keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload`,
			},
            {
				name: 'Cấu hình ứng dụng của bạn để sử dụng kho khóa để ký, mở: android/app/build.gradle, thêm',
				language: 'gradle',
				code: `    # Thay thế your_keystore_password và your_key_password bằng mật khẩu bạn đã đặt trước đó.

        signingConfigs {
	        release {
	            storeFile file("upload-keystore.jks")
	            storePassword "your_keystore_password"
	            keyAlias "upload"
	            keyPassword "your_key_password"
	        }
	    }
	    buildTypes {
	        release {
	            signingConfig signingConfigs.release
	        }
	    }`,
			},
            {
				name: 'Build',
				language: 'shell',
				code: `    flutter build apk --release`,
			},
		],
	},
];

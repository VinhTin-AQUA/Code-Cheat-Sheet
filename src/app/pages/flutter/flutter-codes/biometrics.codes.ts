export const biometricsCodes = [
	{
		id: 'biometrics',
		name: 'Sinh trắc học',
		codeBlocks: [
			{
				name: 'Thêm dependencies',
				language: 'yaml',
				code: `   	dependencies:
	  flutter:
	    sdk: flutter
	  local_auth: ^2.3.0  # Kiểm tra phiên bản mới nhất
	  flutter_secure_storage: ^9.2.4  # Để lưu trữ mật khẩu một cách an toàn
`,
			},
		],
	},
	{
		id: 'cau-hinh-android',
		name: 'Cấu hình cho Android',
		codeBlocks: [
			{
				name: 'mở android/app/build.gradle và thêm các quyền sau vào trong android {}:',
				language: 'gradle',
				code: `   	android {
		    defaultConfig {
		        minSdkVersion 23
		        // Thêm dòng này nếu chưa có
		        multiDexEnabled true
		    }
		}`,
			},
			{
				name: 'Thêm quyền cho ứng dụng trong AndroidManifest.xml',
				language: 'xml',
				code: `    <uses-permission android:name="android.permission.USE_BIOMETRIC" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />`,
			},
		],
	},
	{
		id: 'cau-hinh-ios',
		name: 'Cấu hình cho IOS',
		codeBlocks: [
			{
				name: 'Mở ios/Runner/Info.plist và thêm vào dòng sau để yêu cầu quyền sử dụng sinh trắc học',
				language: 'plist',
				code: `    <key>NSFaceIDUsageDescription</key>
    <string>We need your FaceID for authentication</string>`,
			},
		],
	},
	{
		id: 'dang-nhap-van-tay',
		name: 'Đăng nhập sử dụng vân tay',
		codeBlocks: [
			{
				name: '',
				language: 'dart',
				code: `    // Dăng nhập bằng vân tay
        import 'package:local_auth/local_auth.dart';

    // Kiểm tra các phương thức xác thực sinh trắc học có sẵn
    Future<bool> _checkBiometrics() async {
        try {
            bool canAuthenticate = await _localAuth.canCheckBiometrics;
            if (canAuthenticate) {
            return true;
            } else {
            return false;
            }
        } catch (e) {
            return false;
        }
    }

    Future<bool> _authenticateWithBiometrics() async {
        try {
            bool isCheckBiometrics = await _checkBiometrics();

            if (isCheckBiometrics == false) {
            if (mounted) {
                showErrorDialog(
                    context, 'Thông báo', 'Thiết bị không hõ trợ sinh trắc học');
            }
            return false;
            }

            bool isAuthenticated = await _localAuth.authenticate(
            localizedReason: 'Vui lòng xác thực vân tay để tiếp tục.',
            options: AuthenticationOptions(
                biometricOnly: true, // Chỉ sử dụng sinh trắc học
            ),
            );

            return isAuthenticated;
        } catch (e) {
            return false;
        }
    }

    Future<void> _loginWithBiometrics() async {
        try {
            bool check = await _authenticateWithBiometrics();

            if (check == false) {
            return;
            }
            if (mounted) {
            Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => Home()),
            );
            }
        } catch (e) {
            if (mounted) {
            showErrorDialog(context, 'Lỗi', '$e');
            }
        }
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
            title: const Text(
                'Password Management',
                style: TextStyle(
                    color: Colors.white, fontWeight: FontWeight.bold, fontSize: 13),
            ),
            backgroundColor: Colors.red.shade400,
            elevation: 1, //
            flexibleSpace: Container(
                decoration: BoxDecoration(
                image: DecorationImage(
                    image: AssetImage('assets/background_app_bar.jpg'),
                    fit: BoxFit.cover,
                ),
                ),
            ),
            ),
            body: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                Container(
                    alignment: Alignment.center,
                    child: Text(
                    _message,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                        color: Colors.indigo,
                        fontSize: 20,
                        fontWeight: FontWeight.bold),
                    ),
                ),
                SizedBox(height: 20),
                _isPasswordSet
                    ? Column(
                        children: [
                            TextFormField(
                                controller: passwordController,
                                decoration: InputDecoration(
                                    labelText: 'Nhập mật khẩu',
                                    prefixIcon: Icon(
                                    Icons.https_outlined,
                                    ),
                                    border: OutlineInputBorder(),
                                    alignLabelWithHint: true,
                                    suffixIcon: IconButton(
                                    icon: Icon(
                                        isShowPassword
                                            ? Icons.visibility
                                            : Icons.visibility_off,
                                    ),
                                    onPressed: () {
                                        setState(() {
                                        isShowPassword = !isShowPassword;
                                        });
                                    },
                                    )),
                                obscureText: !isShowPassword),
                            SizedBox(height: 10),
                            ElevatedButton(
                            onPressed: _checkPassword,
                            child: Text('Đăng nhập'),
                            ),
                        ],
                        )
                    : Column(
                        children: [
                            TextField(
                            controller: passwordController,
                            decoration: InputDecoration(
                                labelText: 'Nhập mật khẩu',
                                prefixIcon: Icon(
                                    Icons.https_outlined,
                                ),
                                border: OutlineInputBorder(),
                                alignLabelWithHint: true,
                                suffixIcon: IconButton(
                                    icon: Icon(
                                    isShowPassword
                                        ? Icons.visibility
                                        : Icons.visibility_off,
                                    ),
                                    onPressed: () {
                                    setState(() {
                                        isShowPassword = !isShowPassword;
                                    });
                                    },
                                )),
                            obscureText: !isShowPassword,
                            ),
                            SizedBox(height: 10),
                            TextField(
                            controller: confirmPasswordController,
                            decoration: InputDecoration(
                                labelText: 'Xác nhận mật khẩu',
                                prefixIcon: Icon(
                                    Icons.https_outlined,
                                ),
                                border: OutlineInputBorder(),
                                alignLabelWithHint: true,
                                suffixIcon: IconButton(
                                    icon: Icon(
                                    isShowConfirmPassword
                                        ? Icons.visibility
                                        : Icons.visibility_off,
                                    ),
                                    onPressed: () {
                                    setState(() {
                                        isShowConfirmPassword =
                                            !isShowConfirmPassword;
                                    });
                                    },
                                )),
                            obscureText: !isShowConfirmPassword,
                            ),
                            SizedBox(height: 10),
                            ElevatedButton(
                            onPressed: _savePassword,
                            child: Text('Lưu mật khẩu'),
                            ),
                        ],
                        ),
                SizedBox(height: 20),
                Container(
                    alignment: Alignment.center,
                    child: ElevatedButton(
                    onPressed: _loginWithBiometrics,
                    child: Text('Đăng nhập bằng sinh trắc học'),
                    ),
                )
                ],
            ),
            ),
        );
        }
    }`,
			},
		],
	},
	{
		id: 'loi-phat-sinh',
		name: 'Lỗi: PlatformException(no_fragment_activity, local_auth plugin requires activity to be a FragmentActivity., null, null)',
		codeBlocks: [
			{
				name: 'Android tạo file nếu chưa có: android/app/src/main/java/com/example/password_management/MainActivity.java',
				language: 'java',
				code: `    package com.example.yourapp;

    import io.flutter.embedding.android.FlutterFragmentActivity;
    
    public class MainActivity extends FlutterFragmentActivity {
        // No additional code is needed unless you have custom logic.
    }`,
			},
            {
				name: 'IOS tạo file nếu chưa có: android/app/src/main/kotlin/com/example/password_management/MainActivity.kt',
				language: 'kt',
				code: `    package com.example.password_management
		import androidx.annotation.NonNull
		import io.flutter.embedding.android.FlutterFragmentActivity
		import io.flutter.embedding.engine.FlutterEngine
		import io.flutter.plugins.GeneratedPluginRegistrant
		import io.flutter.embedding.android.FlutterActivity
		
		class MainActivity: FlutterFragmentActivity()`,
			},
		],
	},
];

export const flutterSecureStorageCodes = [
	{
		id: 'flutter-secure-storage',
		name: 'flutter_secure_storage',
		codeBlocks: [
			{
				name: 'thêm thư viện',
				language: 'yaml',
				code: `    dependencies:
	  flutter:
	    sdk: flutter
	  local_auth: ^2.3.0  # Kiểm tra phiên bản mới nhất
	  flutter_secure_storage: ^9.2.4  # Để lưu trữ mật khẩu một cách an toàn`,
			},
		],
	},
    {
		id: 'su-dung-flutter-secure-storage',
		name: 'Sử dụng',
		codeBlocks: [
			{
				name: 'thêm thư viện',
				language: 'dart',
				code: `    import 'package:flutter_secure_storage/flutter_secure_storage.dart';
    // Kiểm tra xem mật khẩu đã được lưu chưa
    Future<void> _checkIfPasswordIsSet() async {
        String? password = await _secureStorage.read(key: 'password');
        setState(() {
            _isPasswordSet = password != null && password.isNotEmpty;
            _message = password != null ? "Đăng nhập" : "Thiết lập mật khẩu";
        });
    }

    // Lưu mật khẩu vào storage
    Future<void> _savePassword() async {
        if (passwordController.text != confirmPasswordController.text) {
            showErrorDialog(
                context, 'Thông báo', 'Xác nhận mật khẩu không chính xác');
        return;
    }

    bool isCheckBiometrics = await _checkBiometrics();
        if (isCheckBiometrics == false) {
            await _secureStorage.write(
                key: 'password', value: passwordController.text);
            setState(() {
                passwordController.text = '';
                confirmPasswordController.text = '';
                _isPasswordSet = true;
            });
            return;
        }

        bool isAuthenticated = await _localAuth.authenticate(
            localizedReason: 'Vui lòng xác thực vân tay để tiếp tục.',
                options: AuthenticationOptions(
                biometricOnly: true, // Chỉ sử dụng sinh trắc học
            ),
        );

        if (isAuthenticated) {
            await _secureStorage.write(
                key: 'password', value: passwordController.text);
            setState(() {
                passwordController.text = '';
                confirmPasswordController.text = '';
                _isPasswordSet = true;
            });
        } else {
            // thông báo lỗi
        }
    }

    // Đăng nhập bằng mật khẩu
    Future<void> _checkPassword() async {
        String? storedPassword = await _secureStorage.read(key: 'password');

        if (storedPassword != passwordController.text) {
            if (mounted) {
                showErrorDialog(context, 'Thông báo', 'Mật khẩu không chính xác');
            }
            return;
        }

        if (mounted) {
            Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => Home()),
            );
        }
    }`,
			},
		],
	},
];

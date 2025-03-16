export const firebaseDatabaseCodes = [
	{
		id: 'firebase-database',
		name: 'Tạo project trên firebase console',
		codeBlocks: [
			{
				name: '',
                language: 'text',
				code: `    tạo project 
    package name giống với package trong dự án
    thêm ứng dụng android
    tải google-services.json
    với ios thì tải GoogleService-Info.plist`,
			},
		],
	},
    {
		id: 'them-dependencies',
		name: 'thêm dependencies',
		codeBlocks: [
			{
				name: '',
                language: 'yaml',
				code: `    firebase_core: ^3.10.1
	cloud_firestore: ^5.6.2
`,
			},
		],
	},
    {
		id: 'cau-hinh-firebase-database-trong-flutter',
		name: 'Cấu hình Firebase trong dự án Flutter',
		codeBlocks: [
			{
				name: 'Với ios',
                language: 'text',
				code: `   # Đặt GoogleService-Info.plist vào thư mục ios/Runner.
    # Chạy lệnh sau để cài đặt CocoaPods
    cd ios
    pod install`,
			},
            {
				name: 'Với Android',
                language: 'text',
				code: `   # Đặt google-services.json vào thư mục android/app
    # Thêm dòng sau vào file android/build.gradle:
    buildscript {
        repositories {
            google()
            mavenCentral()
        }
        dependencies {
            classpath 'com.android.tools.build:gradle:8.0.2' // Hoặc phiên bản tương thích với dự án
            classpath 'com.google.gms:google-services:4.3.15' // Thêm plugin này
        }
    }
    
    # Và thêm dòng này vào cuối file android/app/build.gradle
    apply plugin: 'com.google.gms.google-services'`,
			},
		],
	},
    {
		id: 'khoi-tao-firebase',
		name: 'Khởi tạo Firebase',
		codeBlocks: [
			{
				name: 'Trong file main.dart',
                language: 'dart',
				code: `   import 'package:flutter/material.dart';
	import 'package:firebase_core/firebase_core.dart';
	
	void main() async {
        WidgetsFlutterBinding.ensureInitialized();
        await Firebase.initializeApp();
        runApp(MyApp());
	}`,
			},
		],
	},
    {
		id: 'su-dung',
		name: 'Sử dụng',
		codeBlocks: [
			{
				name: 'thêm dữ liệu',
                language: 'dart',
				code: `   import 'package:cloud_firestore/cloud_firestore.dart';

    Future<bool> addData(AddAccountDto data) async {
        CollectionReference users =
            FirebaseFirestore.instance.collection(passwordCollectionName);

        try {
            await users.add(data.toEncryptedJson());
            return true; // Trả về true nếu thêm thành công
        } catch (error) {
            print("Failed to add user: $error");
            return false; // Trả về false nếu xảy ra lỗi
        }
    }`,
			},
            {
				name: 'Lấy tất cả tài liệu trong bộ sưu tập',
                language: 'dart',
				code: `   static Future<List<Map<String, dynamic>>> getAllData() async {
        CollectionReference users =
            FirebaseFirestore.instance.collection(passwordCollectionName);
        QuerySnapshot querySnapshot = await users.get();

        // Khởi tạo danh sách để lưu dữ liệu
        List<Map<String, dynamic>> dataList = [];

        for (var doc in querySnapshot.docs) {
            // Chuyển đổi dữ liệu từ DocumentSnapshot thành Map<String, dynamic>
            var data = doc.data() as Map<String, dynamic>;
            // Thêm _id vào dữ liệu
            data['id'] = doc.id;

            // Thêm dữ liệu đã chỉnh sửa vào danh sách
            dataList.add(data);

            print(data);
        }
        return dataList; // Trả về danh sách dữ liệu
    }`,
			},
            {
				name: 'Ép kiểu dữ liệu sau khi lấy data của từng phần tử',
                language: 'dart',
				code: `  // Phương thức factory để tạo đối tượng User từ dữ liệu Firebase
    factory AddAccountDto.fromFirestore(Map<String, dynamic> data) {
        return AddAccountDto(data['appName'] ?? '', data['userName'] ?? '',
            data['password'] ?? '', data['note'] ?? '');
    }`,
			},
            {
				name: 'Nghe thay đổi dữ liệu theo thời gian thực',
                language: 'dart',
				code: `  void listenToChanges() {
    CollectionReference users = FirebaseFirestore.instance.collection('users');

        users.snapshots().listen((querySnapshot) {
        for (var doc in querySnapshot.docs) {
        print(doc.data());
        }
        });
    }`,
			},
            {
				name: 'Cập nhật dữ liệu',
                language: 'dart',
				code: `  	void updateData(String docId) async {
    DocumentReference userDoc =
        FirebaseFirestore.instance.collection('users').doc(docId);

        await userDoc.update({'age': 30}).then((_) {
            print("User Updated");
        }).catchError((error) {
            print("Failed to update user: $error");
        });
    }
`,
			},
            {
				name: 'Xóa dữ liệu',
                language: 'dart',
				code: `  	void deleteData(String docId) async {
        DocumentReference userDoc =
            FirebaseFirestore.instance.collection('users').doc(docId);

        await userDoc.delete().then((_) {
            print("User Deleted");
        }).catchError((error) {
            print("Failed to delete user: $error");
        });
    }`,
			},
            {
				name: 'Lấy dữ liệu theo id',
                language: 'dart',
				code: `  	static Future<Map<String, dynamic>?> getDocumentById(
        String documentId) async {
        try {
        // Tham chiếu đến document dựa trên ID
        DocumentReference docRef = FirebaseFirestore.instance
            .collection(passwordCollectionName)
            .doc(documentId);

        // Lấy document từ Firestore
        DocumentSnapshot docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
            // Lấy dữ liệu và thêm _id vào
            Map<String, dynamic> data = docSnapshot.data() as Map<String, dynamic>;
            data['id'] = docSnapshot.id; // Thêm ID tài liệu vào dữ liệu

            return data; // Trả về dữ liệu
        } else {
            return null; // Trả về null nếu document không tồn tại
        }
        } catch (e) {
            return null; // Trả về null nếu có lỗi xảy ra
        }
    }`,
			},
		],
	},
];

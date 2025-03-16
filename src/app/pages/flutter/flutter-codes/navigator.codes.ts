export const navigatorCodes = [
	{
		id: 'navigator',
		name: 'Navigator',
		codeBlocks: [
			{
				name: 'Điều hướng đến Widget',
				language: 'typescript',
				code: `    Navigator.push(
	    context,
	    MaterialPageRoute(builder: (context) => AddAccount()),
	);`,
			},
            {
				name: 'Quay lại màng hình trước đó',
				language: 'typescript',
				code: `    Navigator.pop(context)`,
			},
            {
				name: 'Đẩy màn hình và nhận dữ liệu khi quay lại',
				language: 'typescript',
				code: `    Navigator.push(
	  context,
	  MaterialPageRoute(builder: (context) => SecondScreen()),
	).then((result) {
	  print('Dữ liệu nhận được: $result');
	});
	
	// Trả dữ liệu từ màn hình mới
	Navigator.pop(context, 'Dữ liệu từ màn hình 2');`,
			},
            {
				name: 'Xóa tất cả màn hình trước đó và đẩy màn hình mới (pushAndRemoveUntil)',
				language: 'typescript',
				code: `    Navigator.pushAndRemoveUntil(
	  context,
	  MaterialPageRoute(builder: (context) => NewScreen()),
	  (route) => false, // Xóa toàn bộ các màn hình trước đó
	);`,
			},
            {
				name: 'Thay thế màn hình hiện tại bằng màn hình mới (pushReplacement)',
				language: 'typescript',
				code: `    	Navigator.pushReplacement(
	  context,
	  MaterialPageRoute(builder: (context) => NewScreen()),
	);
`,
			},
            {
				name: 'Sử dụng Navigator với các route được đặt tên',
				language: 'typescript',
				code: `	// định nghĩa các route trong MaterialApp:
    void main() {
        runApp(MaterialApp(
        initialRoute: '/',
        routes: {
            '/': (context) => FirstScreen(),
            '/second': (context) => SecondScreen(),
        },
        ));
    }
		
	// Điều hướng bằng tên route
    Navigator.pushNamed(context, '/second');
    Navigator.pop(context);
`,
			},
            {
				name: 'Sử dụng Hero animation khi chuyển màn hình',
				language: 'typescript',
				code: `// Màn hình 1
	Hero(
	  tag: 'hero-tag',
	  child: Image.asset('assets/image.png'),
	);
	
	// Màn hình 2
	Hero(
	  tag: 'hero-tag',
	  child: Image.asset('assets/image.png'),
	);

	// ví dụ
    import 'package:flutter/material.dart';

    void main() => runApp(MyApp());
    
    class MyApp extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
        return MaterialApp(
            home: FirstScreen(),
        );
        }
    }
    
    class FirstScreen extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('Màn hình 1')),
            body: Center(
            child: GestureDetector(
                onTap: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => SecondScreen()),
                );
                },
                child: Hero(
                tag: 'hero-tag', // Tag phải giống nhau trên cả hai màn hình
                child: Image.asset(
                    'assets/image.png',
                    width: 100,
                    height: 100,
                ),
                ),
            ),
            ),
        );
        }
    }
    
    class SecondScreen extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text('Màn hình 2')),
            body: Center(
            child: Hero(
                tag: 'hero-tag', // Phải khớp với tag trên màn hình trước
                child: Image.asset(
                'assets/image.png',
                width: 300,
                height: 300,
                ),
            ),
            ),
        );
        }
    }`,
			},
		],
	},
];

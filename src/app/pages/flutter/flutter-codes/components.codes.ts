export const componentCodes = [
	{
		id: 'alert-dialog',
		name: 'Alert dialog',
		codeBlocks: [
			{
				name: 'Tạo widget',
				language: 'typescript',
				code: `    import 'package:flutter/material.dart';

    class AlertDialogHelper {
        static void showAlertDialog(BuildContext context,
            {required String title,
            required String message,
            String confirmButtonText = "OK",
            required Color color}) {
            showDialog(
            context: context,
            builder: (BuildContext context) {
                return AlertDialog(
                title: Text(title),
                content: Text(message),
                backgroundColor: color,
                actions: <Widget>[
                    TextButton(
                    child: Text(confirmButtonText),
                    onPressed: () {
                        Navigator.of(context).pop();
                    },
                    ),
                ],
                );
            },
            );
        }
    }`,
			},
			{
				name: 'Cách sử dụng AlertDialogHelper',
				language: 'typescript',
				code: `    void showSuccessDialog(BuildContext context) {
    AlertDialogHelper.showAlertDialog(context,
        title: "Thành công",
        message: "Sản phẩm đã được thêm thành công!",
        color: Colors.greenAccent);
    }

    void showErrorDialog(BuildContext context) {
    AlertDialogHelper.showAlertDialog(context,
        title: "Lỗi",
        message: "Đã xảy ra lỗi. Vui lòng thử lại!",
        color: Colors.redAccent);
    }`,
			},
			{
				name: 'Sử dụng',
				language: 'typescript',
				code: `     bool check = await callAPI(model);
    if (check == true) {
      if (mounted) {
        showSuccessDialog(context);
      }
    } else {
      if (mounted) {
        showErrorDialog(context);
      }
    }`,
			},
		],
	},
	{
		id: 'loading',
		name: 'Loading',
        codeBlocks: [
            {
                name: 'Tạo widget',
                language: 'typescript',
                code: `    	import 'package:flutter/material.dart';
	
	class LoadingWidget extends StatelessWidget {
	  final bool isLoading;
	
	  const LoadingWidget({super.key, required this.isLoading});
	
	  @override
	  Widget build(BuildContext context) {
	    return isLoading
	        ? Container(
	            color: Colors.black54,
	            child: Center(
	              child: CircularProgressIndicator(),
	            ),
	          )
	        : SizedBox.shrink();
	  }
	}`
            },
            {
                name: ' Sử dụng',
                language: 'typescript',
                code: `    setState(() {
      	_isLoading = true;
	    	});
	    	await addData(model);
	
	    	setState(() {
      	_isLoading = false;
    	});
    
	body: Stack(
		children: <Widget>[
		    Center(
		    child: ElevatedButton(
			        onPressed: _callApi,
			        child: Text('Call API'),
			    ),
		    ),
		    LoadingWidget(isLoading: _isLoading),
		],
	),`
            }
        ]
	},
];

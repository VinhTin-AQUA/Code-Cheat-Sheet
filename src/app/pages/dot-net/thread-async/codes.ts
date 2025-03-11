export const codes = [
	{
		id: 'so-sanh-thread-va-async',
		name: 'So sánh Thread và Async',
		language: 'language',
		code: `1.	Thread
-	Threads là nhóm xử lý thu nhỏ mà một hệ điều hành có thể lên lịch. Trong .NET, threading cho phép bạn thực hiện các thao tác phức tạp trong nền mà không làm gián đoạn luồng thực thi chính của ứng dụng. Threading đặc biệt hữu ích cho các hoạt động ràng buộc CPU yêu cầu thực thi song song để tăng tốc quá trình tổng thể. Điều quan trọng cần lưu ý là hệ điều hành rất quan trọng trong việc quản lý các luồng, lên lịch thực hiện chúng và đảm bảo sự công bằng và hiệu quả. Hiểu các cơ chế này có thể giúp bạn viết mã hiệu quả hơn và có thể mở rộng.
-	Phân luồng trong .NET cho phép kiểm soát chi tiết việc thực thi song song, cung cấp khả năng tối ưu hóa các phần cụ thể của ứng dụng cho hiệu suất. Tuy nhiên, sức mạnh lớn đi kèm với trách nhiệm lớn — việc sử dụng luồng không đúng cách có thể dẫn đến các kịch bản gỡ lỗi phức tạp, race conditions, và bế tắc. Ví dụ: [giải thích một vấn đề phân luồng phổ biến và cách tránh nó]. Các phương pháp hay nhất bao gồm sử dụng nhóm luồng, tránh chặn cuộc gọi và sử dụng các nguyên thủy đồng bộ hóa khi cần thiết.
2.	Task
-	Task đại diện cho một hoạt động không đồng bộ. Được giới thiệu trong .NET 4 với Task Parallel Library (TPL), các tác vụ trừu tượng hóa phần lớn sự phức tạp liên quan đến việc quản lý trực tiếp các luồng. Nhiệm vụ thiên về những gì bạn muốn làm hơn là cách bạn thực hiện, tập trung vào sự trừu tượng cấp cao của việc thực hiện không đồng bộ và song song. Nói một cách đơn giản, một tác vụ là một đơn vị công việc có thể được thực hiện không đồng bộ hoặc song song với các tác vụ khác. Nó đóng gói một phương thức và các tham số của nó và có thể trả về một giá trị.
-	Sự ra đời của Task Parallel Library đánh dấu một sự thay đổi đáng kể đối với lập trình không đồng bộ đơn giản hơn trong .NET. Không giống như phân luồng trực tiếp, TPL trừu tượng hóa các chi tiết cấp thấp của quản lý luồng, cung cấp một cách ngắn gọn và hiệu quả hơn để xử lý các hoạt động không đồng bộ. TPL quản lý việc thực hiện các tác vụ bằng cách sử dụng một nhóm các luồng được gọi là ThreadPool. Nó tự động mở rộng quy mô sử dụng các luồng theo tài nguyên hệ thống có sẵn, nâng cao hiệu quả và giảm nguy cơ tranh chấp tài nguyên.
3.	Ví dụ thực tế và trường hợp sử dụng
-	Một ứng dụng web yêu cầu dữ liệu máy chủ từ xa. Sử dụng các thao tác đồng bộ có thể chặn luồng chính cho đến khi thao tác truy xuất dữ liệu hoàn tất, dẫn đến trải nghiệm người dùng kém. Nhưng bằng cách thực hiện thao tác này không đồng bộ thông qua các luồng hoặc tác vụ, bạn có thể giữ cho ứng dụng phản hồi, tìm nạp dữ liệu trong nền và cập nhật giao diện người dùng sau khi hoàn thành. Đây chỉ là một trong nhiều ví dụ thực tế chứng minh giá trị thực tế và tác động ngay lập tức của việc hiểu và tận dụng Threads and Tasks trong .NET C #.
4.	Mẹo lựa chọn giữa các luồng và tác vụ trong các dự án .NET
-	Đánh giá bản chất của hoạt động
o	Lựa chọn các Tasks cho công việc ràng buộc I / O liên quan đến việc chờ đợi các nguồn lực bên ngoài.
o	Sử dụng luồng cho các hoạt động ràng buộc CPU yêu cầu thực thi song song
-	Xem xét khả năng mở rộng
o	Các tác vụ, với ThreadPool cơ bản của chúng, thường có khả năng mở rộng hơn so với quản lý luồng theo cách thủ công.
-	Dễ sử dụng
o	Các nhiệm vụ cung cấp mức độ trừu tượng cao hơn, giúp chúng dễ làm việc hơn, đặc biệt là đối với các hoạt động không đồng bộ phức tạp.

`,
	},
	{
		id: 'khac-nhau-giua-task-delay-va-thread-sleep',
		name: 'Khác nhau giữa Task.Delay và Thread.Sleep',
		language: 'language',
		code: `Task.Delay => chờ mà không chặn luồng chính (main thread)
Thread.Sleep => chặn luồng thực thi chính (main thread) cho đến khi thời gian chờ kết thúc.
`,
	},
];

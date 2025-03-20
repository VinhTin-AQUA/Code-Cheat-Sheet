export const globalExceptionDilter = [
	{
		id: 'global-exception-filter',
		name: 'Global exception filter',
		codeBlocks: [
			{
				name: 'Tạo middleware',
				language: 'typescript',
				code: `    import {
        ArgumentsHost,
        Catch,
        ExceptionFilter,
        HttpException,
        HttpStatus,
    } from '@nestjs/common';
    import { Response } from 'express';

    @Catch()
    export class GlobalExceptionFilterMiddleware implements ExceptionFilter {
    
        catch(exception: any, host: ArgumentsHost) {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse<Response>();
            const request = ctx.getRequest<Request>();

            // Xác định mã trạng thái HTTP
            const status =
                exception instanceof HttpException
                    ? exception.getStatus()
                    : HttpStatus.INTERNAL_SERVER_ERROR;

            // // Log chi tiết lỗi vào terminal
            // console.error('--- Exception Details ---');
            // console.error(\`Timestamp: \${new Date().toISOString()}\`);
            // console.error(\`Path: \${request.url}\`);
            // console.error(\`Status Code: \${status}\`);
            // console.error(\`Exception:\`, exception);
            // console.error('--- End of Exception Details ---');

            // Thông báo lỗi trả về cho client
            let message = 'An unexpected error occurred';
            if (exception instanceof HttpException) {
                // Nếu là HttpException, lấy thông tin từ exception
                const exceptionResponse = exception.getResponse();
                message =
                    typeof exceptionResponse === 'string'
                        ? exceptionResponse
                        : (exceptionResponse as any).message || message;
            } else if (exception.message) {
                // Nếu exception có thuộc tính \`message\`, sử dụng nó
                message = exception.message;
            }

            // Trả về response JSON cho client
            response.status(status).json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message,
            });
        }
    }`,
			},
            {
				name: 'Cấu hình trong main.ts',
				language: 'typescript',
				code: `    app.useGlobalFilters (new GlobalExceptionFilterMiddleware
        await app.listen(process.env.PORT?? 3000);`,
			},
            {
				name: 'Cấu hình trong module cụ thể',
				language: 'typescript',
				code: `    @Module({ 
    imports: [],
    controllers: [AppController],
    providers: [
            AppService,
            {
                provide: APP_FILTER,
                useClass: GlobalExceptionFilterMiddleware,
            }
        ],
    })`,
			},
		],
	},
];

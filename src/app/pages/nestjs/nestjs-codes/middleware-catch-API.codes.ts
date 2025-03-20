export const middlewareCatchAPI = [
	{
		id: 'tao-middleware',
		name: 'middleware kiểm tra TK hết hạn dùng thử',
		codeBlocks: [
			{
				name: '',
				language: 'typescript',
				code: `   import {
        ForbiddenException,
        Injectable,
        NestMiddleware,
    } from '@nestjs/common';
    import { Response, NextFunction, Request } from 'express';
    import { HostAccountService } from '../host-account.service';
    import { jwtDecode } from 'jwt-decode';

    @Injectable()
    export class ContractExpirationMiddleware implements NestMiddleware {
        constructor(private readonly hostAccountService: HostAccountService) {}

        async use(req: Request, res: Response, next: NextFunction) {
            // Lấy token từ header Authorization
            const authHeader = req.headers['authorization'];

            if (authHeader) {
                const token = authHeader.split(' ')[1]; // Lấy phần token sau từ khóa 'Bearer'
                var decoded: any = jwtDecode(token);

                var userId = decoded.id;
                const isActivated =
                    await this.hostAccountService.isContractExpirationDate(userId);

                if (!isActivated) {
                    throw new ForbiddenException({
                        message:
                            'Tài khoản của bạn đã hết hạn. Vui lòng gia hạn để tiếp tục sử dụng dịch vụ của chúng tôi.',
                        statusCode: 403,
                        timestamp: new Date().toISOString(),
                    });
                }
            }

            next(); // Tiếp tục xử lý request
        }
    }`,
			},
		],
	},
	{
		id: 'cau-hinh-middleware',
		name: 'Cấu hình middleware',
		codeBlocks: [
			{
				name: 'Cấu hình module cụ thể',
				language: 'typescript',
				code: `    export class HostAccountModule {
        configure(consumer: MiddlewareConsumer) {
            // Áp dụng ContractExpirationMiddleware cho tất cả các route yêu cầu xác thực
            consumer
                .apply(ContractExpirationMiddleware)
                .exclude('/host-account/host-sign-in', '/host-account/host-sign-up') // Bỏ qua các route login và register
                .forRoutes(HostController); // Áp dụng cho các route yêu cầu xác thực
        }
    }`,
			},
            {
                name: 'Cho tất cả module trong main.ts',
                language: 'typescript',
                code:  `    app.use(new ContractExpirationMiddleware().use);`
            },
            {
                name: 'Cho tất cả module trong main.ts ',
                language: 'typescript',
                code:  `    export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
            // Áp dụng middleware cho tất cả các route trong toàn bộ ứng dụng
            consumer.apply(GlobalLoggerMiddleware).forRoutes('*');
        }
    }`
            },
            {
                name: 'Tuy nhiên, nếu middleware có inject dịch vụ thì áp dụng trong app.module',
                language: 'typescript',
                code:  `    export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
            // Áp dụng middleware cho tất cả các route trong toàn bộ ứng dụng
            consumer.apply(GlobalLoggerMiddleware).forRoutes('*');
        }
    }`
            }
		],
	},
];

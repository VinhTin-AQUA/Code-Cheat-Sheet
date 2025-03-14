export const lineClampCodes = [
	{
		id: 'line-clamp',
		name: 'Line clamp',
		preview: `    <div style="display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            line-clamp: 3;">
        Ad molestiae culpa laboriosam vero non. Corporis modi architecto velit recusandae. Est ipsa odio accusantium ut veritatis aut consectetur doloribus. Voluptatibus voluptatem est pariatur illo dicta quisquam saepe. Aut corrupti ab et quidem.
        Esse accusantium minima et veniam alias rerum nostrum officiis incidunt. Distinctio optio voluptatem amet veritatis quia error dolor officiis aut. Facere ea voluptatum rem vel dolores ratione. Voluptas voluptas et tenetur nobis rerum. Qui aliquam consequatur eum qui eveniet id fugiat.
    </div>`,
		codeBlocks: [
			{
				name: 'HTML',
				language: 'html',
				code: `    <div>
        Ad molestiae culpa laboriosam vero non. Corporis modi architecto velit recusandae. Est ipsa odio accusantium ut veritatis aut consectetur doloribus. Voluptatibus voluptatem est pariatur illo dicta quisquam saepe. Aut corrupti ab et quidem.
        Esse accusantium minima et veniam alias rerum nostrum officiis incidunt. Distinctio optio voluptatem amet veritatis quia error dolor officiis aut. Facere ea voluptatum rem vel dolores ratione. Voluptas voluptas et tenetur nobis rerum. Qui aliquam consequatur eum qui eveniet id fugiat.
    </div>`,
			},
			{
				name: 'CSS',
				language: 'css',
				code: `    .clamp {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-clamp: 3;
    }`,
			},
		],
	},
];

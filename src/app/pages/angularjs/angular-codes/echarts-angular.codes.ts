export const echartsAngularCodes = [
	{
		id: 'echarts-angular',
		name: 'Echarts angular',
		codeBlocks: [
			{
				name: 'Link mẫu biểu đồ',
				language: 'text',
				code: `    https://echarts.apache.org/examples/en/index.html`,
			},
			{
				name: 'Tải thư viện',
				language: 'shell',
				code: `    npm i echarts ngx-echarts`,
			},
			{
				name: 'Html',
				language: 'html',
				code: `    <div class="chart-container">
        <ngx-echarts
            [autoResize]="true"
            echarts
            [options]="options"
            [merge]="updateOptions"
            class="chart"
        ></ngx-echarts>
    </div>
`,
			},
			{
				name: 'Typescript',
				language: 'typescript',
				code: `    import { Component } from '@angular/core';
    import { flows } from './data/flow';
    import type { EChartsCoreOption } from 'echarts/core';
    import { NgxEchartsModule } from 'ngx-echarts';
    import { TrackingService } from './tracking.service';

    type DataT = {
        name: string;
        value: [string, number];
    };

    @Component({
        selector: 'app-dashboard',
        imports: [NgxEchartsModule],
        templateUrl: './dashboard.component.html',
        styleUrl: './dashboard.component.scss',
    })
    export class DashboardComponent {
        flows = flows;

        options!: EChartsCoreOption;
        updateOptions!: EChartsCoreOption;

        private oneDay = 24 * 3600 * 1000;
        private now!: Date;
        private value!: number;
        private data1!: DataT[];
        private timer: any;

        constructor(private trackingService: TrackingService) {}

        ngOnInit(): void {
            // generate some random testing data:
            this.data1 = [];
            this.now = new Date(1997, 9, 3);
            this.value = Math.random() * 1000;

            for (let i = 0; i < 1000; i++) {
                this.data1.push(this.randomData());
            }

            // initialize chart options:
            this.options = {
                title: {
                    text: 'Dynamic Data + Time Axis',
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: (params: any) => {
                        params = params[0];
                        const date = new Date(params.name);
                        return (
                            date.getDate() +
                            '/' +
                            (date.getMonth() + 1) +
                            '/' +
                            date.getFullYear() +
                            ' : ' +
                            params.value[1]
                        );
                    },
                    axisPointer: {
                        animation: false,
                    },
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false,
                    },
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: true,
                    },
                },
                series: [
                    {
                        name: 'Fake Data',
                        type: 'line',
                        symbol: 'none',
                        sampling: 'lttb',
                        itemStyle: {
                            color: 'rgb(52, 248, 62)',
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(52, 248, 62, 0.5)', // Màu ở trên
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(52, 248, 62, 0)', // Màu ở dưới (trong suốt)
                                    },
                                ],
                            },
                        },
                        data: this.data1,
                    },
                ],
            };

            // Mock dynamic data:
            this.timer = setInterval(() => {
                for (let i = 0; i < 5; i++) {
                    this.data1.shift();
                    const d1 = this.randomData();
                    this.data1.push(d1);
                }

                // update series data:
                this.updateOptions = {
                    series: [
                        {
                            data: this.data1,
                        },
                    ],
                };
            }, 1000);
        }

        ngOnDestroy() {
            clearInterval(this.timer);
            this.trackingService.disconnect();
        }

        // Gửi message lên server
        sendMessage() {
            this.trackingService.emit('events', 'Hello from Angular!');
        }

        randomData(): DataT {
            this.now = new Date(this.now.getTime() + this.oneDay);
            this.value = this.value / 1.5 + Math.random() * 100 - 10;

            return {
                name: this.now.toString(),
                value: [
                    [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
                    this.value,
                ],
            };
        }
    }
`,
			},
		],
	},
];
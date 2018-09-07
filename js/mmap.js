
// 基于准备好的dom，初始化echarts实例
$(function () {
    var myChart = echarts.init(document.getElementById('main'))
    var geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327],
        '招远': [120.38, 37.35],
        '舟山': [122.207216],
        '齐齐哈尔': [123.97],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '拉萨': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福州': [119.3, 26.08],
        '瓦房店': [121.979603],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152],
        '广州': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '太原': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '昆明': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海口': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '沈阳': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '长春': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '银川': [106.27, 38.47],
        '张家港': [120.555821],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '南昌': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909],
        '自贡': [104.778442],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '西宁': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '成都': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '桂林': [110.28, 25.29],
        '张家界': [110.479191],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '西安': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757],
        '南京': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵阳': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.46, 39.92],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '包头': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '乌鲁木齐': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '杭州': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '济南': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '兰州': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '郑州': [113.65, 34.76],
        '哈尔滨': [126.63, 45.75],//126.63,45.75,162
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33],
        '唐山': [118.02, 39.63],
        '平顶山': [113.29, 33.75],
        '邢台': [114.48, 37.05],
        '德州': [116.29, 37.45],
        '济宁': [116.59, 35.38],
        '荆州': [112.239741],
        '宜昌': [111.3, 30.7],
        '义乌': [120.06, 29.32],
        '丽水': [119.92, 28.45],
        '洛阳': [112.44, 34.7],
        '秦皇岛': [119.57, 39.95],
        '株洲': [113.16, 27.83],
        '石家庄': [114.48, 38.03],
        '莱芜': [117.67, 36.19],
        '常德': [111.69, 29.05],
        '保定': [115.48, 38.85],
        '湘潭': [112.91, 27.87],
        '金华': [119.64, 29.12],
        '岳阳': [113.09, 29.37],
        '长沙': [113, 28.21],
        '衢州': [118.88, 28.97],
        '廊坊': [116.7, 39.53],
        '菏泽': [115.480656],
        '合肥': [117.27, 31.86],
        '武汉': [114.31, 30.52],
        '大庆': [125.03, 46.58]
    };
    var data = [{ name: '北京', value: 100 },//
    { name: '天津', value: 70 },//
    { name: '上海', value: 60 },//
    { name: '重庆', value: 0 },//
    { name: '石家庄', value: 80 },
    { name: '郑州', value: 760 },
    { name: '昆明', value: 10 },
    { name: '沈阳', value: 44 },
    { name: '哈尔滨', value: 74 },
    { name: '长沙', value: 160 },
    { name: '合肥', value: 4750 },
    { name: '济南', value: 4260 },
    { name: '乌鲁木齐', value: 420 },
    { name: '南京', value: 200 },
    { name: '杭州', value: 40 },
    { name: '南昌', value: 7450 },
    { name: '武汉', value: 60 },
    { name: '南宁', value: 60 },
    { name: '福州' }];

    function formtGCData(geoData, data, srcNam, dest) {
        var tGeoDt = [];
        if (dest) {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[srcNam], geoData[data[i].name]]
                    });
                }
            }
        } else {
            for (var i = 0, len = data.length; i < len; i++) {
                if (srcNam != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[data[i].name], geoData[srcNam]]
                    });
                }
            }
        }
        return tGeoDt;
    }

    function formtVData(geoData, data, srcNam) {
        var tGeoDt = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var tNam = data[i].name
            if (srcNam != tNam) {
                tGeoDt.push({
                    name: tNam,
                    value: geoData[tNam]
                });
            }

        }
        tGeoDt.push({
            name: srcNam,
            value: geoData[srcNam],
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: 'blue',
                    borderColor: 'white'
                }
            }
        });
        return tGeoDt;
    }

    var planePath = 'arrow';
    option = {
        backgroundColor: 'transport',
        //标题设置
        title: {
            text: '售货机各省销售情况',
            left: 'center',
            top: '10px',
            textStyle: {
                color: 'rgb(27, 216, 216)' 
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100,149,237,1)',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#000'
                    }
                }
            }
        },
        //工具提示
        tooltip: {
            trigger: 'item',
            formatter: function (v) {
                var html = "";
                data.forEach(function (item) {
                    if (item.name == v.name) {
                        html = "销售额: " + item.value;
                    }
                });
                return html;
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            //地图可以放大缩小
            roam: true,
            //鼠标经过 是否高亮显示silent要设成false
            silent: false,
            itemStyle: {
                normal: {
                    //地图颜色
                    areaColor: 'rgba(14, 128, 199,0.01)',//#37376e
                    borderColor: 'rgb(14, 128, 199)',
                    shadowColor: 'rgba(36, 253, 253,0.5)',
                    shadowBlur: 6 
                },
                emphasis: {
                    //show要设置成false才能设置高亮部分的颜色
                    show: true,
                    areaColor: 'rgb(20,37, 54)',
                    borderColor: 'rgb(100, 200, 255)', 
                    shadowBlur: 0
                }
            }
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                scale: 3.5,
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: false,
                    position: 'left'
                }
            },
            symbolSize: 8,
            //波纹
            itemStyle: {
                normal: {
                    color: 'rgb(14, 128, 199)',
                    borderColor: 'white'
                }
            },
            data: formtVData(geoCoordMap, data, ' ')
        }]
    };
    myChart.setOption(option);
    //简单柱状图
    var myChart1 = echarts.init(document.getElementById('main1'))
    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data: ['销量'],
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            //不自动隐藏横坐标名
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            label: {
                normal: {
                    textStyle: {
                        fontSize: 10
                    }
                }
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    //南丁格尔图（饼状图
    var myChart2 = echarts.init(document.getElementById('main2'))
    option2 = {
        backgroundColor: 'transport',
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data: [
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ],
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 9
                        },
                        formatter: '{b}\n{d}%'
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#fff'
                        },
                        length: 0.001
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 50,
                        shadowColor: 'rgba(0,0,0,0.5)'
                    }
                }
            }
        ]
    };
    myChart2.setOption(option2);

    //折线图
    var myChart3 = echarts.init(document.getElementById('main3'))
    var colors = ['#aaffff','#3f92d2', '#d14a61', '#5793f3'];
    option3 = {
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['2017 销售量', '2018 销售量'],
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            top: 80,
            bottom: 50
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '销售量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ["2017-1", "2017-2", "2017-3", "2017-4", "2017-5", "2017-6", "2017-7", "2017-8", "2017-9", "2017-10", "2017-11", "2017-12"]
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '销售量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ["2018-1", "2018-2", "2018-3", "2018-4", "2018-5", "2018-6", "2018-7", "2018-8", "2018-9", "2018-10", "2018-11", "2018-12"]
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
            }
        ],
        series: [
            {
                name: '2018 销售量',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '2017 销售量',
                type: 'line',
                smooth: true,
                data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            }
        ]
    };
    //显示
    myChart3.setOption(option3);

    //当浏览器大小发生改变时，图表自动改变高度
    window.addEventListener("resize", function () {
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
    });
});

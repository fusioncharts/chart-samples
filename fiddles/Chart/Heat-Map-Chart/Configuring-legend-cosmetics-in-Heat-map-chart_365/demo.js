$(window).load(function(){FusionCharts.ready(function () {
    var salesHMChart = new FusionCharts({
        type: 'heatmap',
        renderAt: 'chart-container',
        width: '550',
        height: '300',
        dataFormat: 'json',
        dataSource:  {
            "chart": {
                "theme" : "fint",
                "caption": "Top Smartphone Ratings",
                "subcaption": "By Features",
                "xAxisName":"Features",
                "yAxisName":"Model",
                "showplotborder": "1",
                //Changing legend scale line color
                "legendScaleLinecolor": "#e44a00",
                //Modifying legend scale line alpha
                "legendScaleLineAlpha": "80",
                //Changing legend scale line thickness
                "legendScaleLineThickness": "2",
                //Changing legend pointer width
                "legendPointerWidth": "15",
                //Changing legend pointer height
                "legendPointerHeight": "20"         
            },
            "rows": {
                "row": [
                    {
                        "id": "SGS5",
                        "label": "Samsung Galaxy S5"
                    },
                    {
                        "id": "HTC1M8",
                        "label": "HTC One (M8)"
                    },
                    {
                        "id": "IPHONES5",
                        "label": "Apple iPhone 5S"
                    },
                    {
                        "id": "LUMIA",
                        "label": "Nokia Lumia 1520"
                    }
                ]
            },
            "columns": {
                "column": [
                    {
                        "id": "processor",
                        "label": "Processor"
                    },
                    {
                        "id": "screen",
                        "label": "Screen Size"
                    },
                    {
                        "id": "price",
                        "label": "Price"
                    },
                    {
                        "id": "backup",
                        "label": "Battery Backup"
                    }
                    ,
                    {
                        "id": "cam",
                        "label": "Camera"
                    }
                ]
            },
            "dataset": [
                {
                    "data": [
                        {
                            "rowid": "SGS5",
                            "columnid": "processor",
                            "value": "8.7",
                            "tlLabel": "Quad Core 2.5 GHz",
                            "trLabel": "OS : Android 4.4 Kitkat"
                        },
                        {
                            "rowid": "SGS5",
                            "columnid": "screen",
                            "value": "8.5",
                            "tlLabel": "5.1 inch",
                            "trLabel": "AMOLED screen"
                        },
                        {
                            "rowid": "SGS5",
                            "columnid": "price",
                            "value": "9.3",
                            "tlLabel": "$600"
                        },
                        {
                            "rowid": "SGS5",
                            "columnid": "backup",
                            "value": "9.7",
                            "tlLabel": "29 Hrs",
                            "trLabel": "Battery : 2800 MAH"
                        },
                        {
                            "rowid": "SGS5",
                            "columnid": "cam",
                            "value": "8",
                            "tlLabel": "16 MP",
                            "trLabel": "Front Camera : 2.1 MP"
                        },
                        {
                            "rowid": "HTC1M8",
                            "columnid": "processor",
                            "value": "9.2",
                            "tlLabel": "Quad Core 2.3 GHz",
                            "trLabel": "OS : Android 4.4 Kitkat"
                        },
                        {
                            "rowid": "HTC1M8",
                            "columnid": "screen",
                            "value": "8.3",
                            "tlLabel": "5 inch",
                            "trLabel": "LCD screen"
                        },
                        {
                            "rowid": "HTC1M8",
                            "columnid": "price",
                            "value": "7.3",
                            "tlLabel": "$600"
                        },
                        {
                            "rowid": "HTC1M8",
                            "columnid": "backup",
                            "value": "8.8",
                            "tlLabel": "20 Hrs",
                            "trLabel": "Battery : 2600 MAH"
                        },
                        {
                            "rowid": "HTC1M8",
                            "columnid": "cam",
                            "value": "8.7",
                            "tlLabel": "4 MP",
                            "trLabel": "Front Camera : 5 MP"
                        },
                        {
                            "rowid": "IPHONES5",
                            "columnid": "processor",
                            "value": "9.1",
                            "tlLabel": "Dual Core",
                            "trLabel": "OS : iOS 7"
                        },
                        {
                            "rowid": "IPHONES5",
                            "columnid": "screen",
                            "value": "8.6",
                            "tlLabel": "4 inch",
                            "trLabel": "Retina LCD screen"
                        },
                        {
                            "rowid": "IPHONES5",
                            "columnid": "price",
                            "value": "7.2",
                            "tlLabel": "$649"
                        },
                        {
                            "rowid": "IPHONES5",
                            "columnid": "backup",
                            "value": "8.4",
                            "tlLabel": "10 Hrs",
                            "trLabel": "Battery : 1560 MAH"
                        },
                        {
                            "rowid": "IPHONES5",
                            "columnid": "cam",
                            "value": "9.5",
                            "tlLabel": "8 MP",
                            "trLabel": "Front Camera : 1.2 MP"
                        },
                        {
                            "rowid": "LUMIA",
                            "columnid": "processor",
                            "value": "8.8",
                            "tlLabel": "Quad Core 2.2 GHz",
                            "trLabel": "OS: Windows Phone 8"
                        },
                        {
                            "rowid": "LUMIA",
                            "columnid": "screen",
                            "value": "9.1",
                            "tlLabel": "6 inch",
                            "trLabel": "LCD screen"
                        },
                        {
                            "rowid": "LUMIA",
                            "columnid": "price",
                            "value": "9.7",
                            "tlLabel": "$470"
                        },
                        {
                            "rowid": "LUMIA",
                            "columnid": "backup",
                            "value": "9.2",
                            "tlLabel": "27 Hrs",
                            "trLabel": "Battery : 3400 MAH"
                        },
                        {
                            "rowid": "LUMIA",
                            "columnid": "cam",
                            "value": "8.1",
                            "tlLabel": "20MP",
                            "trLabel": "Front Camera : 1.2 MP"
                        }
                    ]
                }
            ],
            "colorrange": {
                "gradient": "1",
                "minValue": "0",
                "code": "#6da81e",
                "startLabel": "Poor",
                "endLabel": "Good",
                "color": [
                    {
                        "code": "#e24b1a",
                        "minValue": "1",
                        "maxValue": "5",
                        "label": "Bad"
                    },
                    {
                        "code": "#f6bc33",
                        "minValue": "5",
                        "maxValue": "8.5",
                        "label": "Average"
                    },
                    {
                        "code": "#6da81e",
                        "minValue": "8.5",
                        "maxValue": "10",
                        "label": "Good"
                    }
                ]
            }
        }
    }).render();
    
});});
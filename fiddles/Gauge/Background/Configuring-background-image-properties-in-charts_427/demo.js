$(window).load(function(){FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Top 3 Juice Sold",
                "subCaption": "Last year at Harry's SuperMart",
                "xAxisName": "Month",
                "yAxisName": "Amount",
                "numberPrefix": "$",
                "canvasBgAlpha": "0",
                "showAlternateHgridColor": "1",
                //BgImage properties
                "bgImage": "http://upload.wikimedia.org/wikipedia/commons/7/79/Misc_fruit.jpg",
                "bgImageAlpha": "50",
                "bgImageDisplayMode": "none",
                //Change this value to 10 and see how the alignment then comes into picture.
                "bgImageScale": "20",
                "bgImageValign": "middle",
                "bgImageHalign": "middle",
                //Theme
                "theme": "fint"

            },
            "data": [
                {
                    "label": "Apple",
                    "value": "810000"
                }, 
                {
                    "label": "Cranberry",
                    "value": "620000"
                }, 
                {
                    "label": "Grapes",
                    "value": "350000"
                }
            ]
        }
    });

    salesChart.render();
});});
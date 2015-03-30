$(window).load(function(){FusionCharts.ready(function () {
    var inventoryChart = new FusionCharts({
        type: 'dragcolumn2d',
        renderAt: 'chart-container',
        width: '500',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Inventory status - Bakersfield Central",                
                "subCaption": "Top 5 Food items",
                "xAxisName": "Food Item",
                "yAxisName": "No. of Units",
                "paletteColors": "#0075c2,#1aaf5d",
                "bgColor": "#ffffff",
                "showAlternateHGridColor": "0",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "baseFontColor": "#333333",
                "baseFont": "Helvetica Neue,Arial",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "usePlotGradientColor": "0",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5",
                "legendBgAlpha": "0",
                "legendBorderAlpha": "0",
                "legendShadow": "0",
                "legendItemFontSize": "10",
                "legendItemFontColor": "#666666",
                "legendCaptionFontSize": "9",
                "divlineAlpha": "100",
                "divlineColor": "#999999",
                "divlineThickness": "1",
                "divLineIsDashed": "1",
                "divLineDashLen": "1",
                "divLineGapLen": "1",
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Poultry"
                        }, 
                        {
                            "label": "Rice"
                        }, 
                        {
                            "label": "Peanut Butter"
                        }, 
                        {
                            "label": "Salmon"
                        }, 
                        {
                            "label": "Cereal"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Available Stock",
                    "allowDrag": "0",
                    "data": [{
                        "value": "6000"
                    }, 
                             {
                                 "value": "9500"
                             }, 
                             {
                                 "value": "11900"
                             }, 
                             {
                                 "value": "8000"
                             }, 
                             {
                                 "value": "9700"
                             }
                            ]
                }, 
                {
                    "seriesname": "Estimated Demand",
                    "dashed": "1",
                    "data": [
                        {
                            "value": "19000"
                        }, 
                        {
                            "value": "16500"
                        }, 
                        {
                            "value": "14300"
                        }, 
                        {
                            "value": "10000"
                        }, 
                        {
                            "value": "9800"
                        }
                    ]
                }
            ]
        },
        "events": {
            "dataplotDragEnd": function (evt, arg) {
                var dataIndex = arg && arg.dataIndex,
                    prevVal = arg && arg.startValue,
                    newVal = arg && parseInt(arg.endValue, 10),
                    valuerow = document.getElementById("dragcolumn2d-sample-table")
                .getElementsByTagName("tr")[1]
                .getElementsByTagName('td');
                
                valuerow[dataIndex].innerHTML = newVal;
            },
            "dataRestored": function (evtObj) {
                var estimatedOrigValues = ["19000", "16500", "14300", "10000", "9800"],
                    i = 0,
                    numVals = estimatedOrigValues.length,
                    val,
                    valuerow = document.getElementById("dragcolumn2d-sample-table")
                .getElementsByTagName("tr")[1]
                .getElementsByTagName('td');
                
                for (i; i < numVals; i += 1) {
                    val = estimatedOrigValues[i];
                    
                    //set the original values
                    valuerow[i + 1].innerHTML = val;
                }
            }
        }
    }).render();
});});
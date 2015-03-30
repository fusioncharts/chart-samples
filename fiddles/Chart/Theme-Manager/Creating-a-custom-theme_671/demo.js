$(window).load(function(){FusionCharts.ready(function () {
    
    FusionCharts.register('theme', {
        name: 'fire',
        theme: {
            base:{
                 chart: {
                     paletteColors: '#FF4444, #FFBB33, #99CC00, #33B5E5, #AA66CC',
                     baseFontColor: '#36474D',
                     baseFont: 'Helvetica Neue,Arial',
                     captionFontSize: '14',
                     subcaptionFontSize: '14',
                     subcaptionFontBold: '0',
                     showBorder: '0',
                     bgColor: '#ffffff',
                     showShadow: '0',
                     canvasBgColor: '#ffffff',
                     canvasBorderAlpha: '0',
                     useplotgradientcolor: '0',
                     useRoundEdges: '0',
                     showPlotBorder: '0',
                     showAlternateHGridColor: '0',
                     showAlternateVGridColor: '0',                     
                     toolTipBorderThickness: '0',
                     toolTipBgColor: '#99CC00',
                     toolTipBgAlpha: '90',
                     toolTipBorderRadius: '2',
                     toolTipPadding: '5',
                     legendBgAlpha: '0',
                     legendBorderAlpha: '0',
                     legendShadow: '0',
                     legendItemFontSize: '10',                     
                     divlineAlpha: '100',
                     divlineColor: '#36474D',
                     divlineThickness: '1',
                     divLineIsDashed: '1',
                     divLineDashLen: '1',
                     divLineGapLen: '1',                     
                     showHoverEffect: '1',
                     valueFontSize: '11',
                     showXAxisLine: '1',
                     xAxisLineThickness: '1',
                     xAxisLineColor: '#36474D'
                 }
            },
            mscolumn2d: {
                chart: {
                    valueFontColor: '#3B373A', //overwrite base value
                    placeValuesInside: '1',
                    rotateValues: '1'
                }
            }
        }
    });
    
    var revenueChart = new FusionCharts({
        type: 'mscolumn2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Comparison of Quarterly Revenue",
                "subCaption": "Harry's SuperMart",
                "xAxisname": "Quarter",
                "yAxisName": "Revenues (In USD)",
                // Use the custom theme registered
                "theme": "fire"
            },
            "categories": [{
                "category": [{
                    "label": "Q1"
                }, {
                    "label": "Q2"
                }, {
                    "label": "Q3"
                }, {
                    "label": "Q4"
                }]
            }],
            "dataset": [{
                "seriesname": "Previous Year",
                "data": [{
                    "value": "10000"
                }, {
                    "value": "11500"
                }, {
                    "value": "12500"
                }, {
                    "value": "15000"
                }]
            }, {
                "seriesname": "Current Year",
                "data": [{
                    "value": "25400"
                }, {
                    "value": "29800"
                }, {
                    "value": "21800"
                }, {
                    "value": "26800"
                }]
            }]
        }
    }).render();   
});});
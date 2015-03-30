$(window).load(function(){FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'line',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Total footfall in Bakersfield Central",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "No. of Visitors",
                "theme": "fint"
            },
            "annotations": {
                //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                "origw": "400",
                "origh": "300",
                "autoscale": "1",
                "groups": [
                    {                       
                        "items": [
                            {
                                //Color block for weekend
                                "id": "zone",
                                "type": "rectangle",
                                //Starting at 6th data label (based on index)
                                "x": "$xaxis.label.6.x",
                                //Setting y position relative to canvas
                                "y": "$canvasEndY",
                                //Ending at 7th data label (based on index)
                                "tox": "$xaxis.label.7.x",
                                //Setting y position relative to canvas
                                "toy": "$canvasStartY",
                                 "color": "#6baa01",
                                 "alpha": "20",
                            },
                            {
                                //Label 'Weekend' on the color block
                                "id": "label",
                                "type": "text",
                                "text": "Weekend",
                                "color": "#000000",
                                "fontSize": "12",
                                "bold": "1",
                                "rotateText": "1",
                                //Binding to 7th data label
                                "x": "$xaxis.label.7.x - 10",
                                //Setting y position relative to canvas
                                "y": "$canvasEndY - 35"
                            }
                        ]
                        
                    }
                ]
            },
            "data": [
                {
                    "label": "Mon",
                    "value": "15123"
                },
                {
                    "label": "Tue",
                    "value": "14233"
                },
                {
                    "label": "Wed",
                    "value": "23507"
                },
                {
                    //Adding a vertical line on chart to reflect National Holiday
                    "vline": "true",
                    "lineposition": "0",
                    "color": "#6baa01",
                    "labelHAlign": "left",
                    "label": "National holiday"
                },
                {
                    "label": "Thu",
                    "value": "9110"
                },
                {
                    "label": "Fri",
                    "value": "15529"
                },
                {
                    "label": "Sat",
                    "value": "20803"
                },
                {
                    "label": "Sun",
                    "value": "19202"
                }
            ]
        }
    });

    visitChart.render();
});});
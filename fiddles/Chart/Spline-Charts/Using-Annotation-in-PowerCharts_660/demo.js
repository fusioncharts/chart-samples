$(window).load(function(){FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'spline',
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
            //Applying annotations in Chart
            "annotations": {
                "origw": "400",
                "origh": "300",
                "autoscale": "1",
                "groups": [
                    {                       
                        "items": [
                            {
                                //Rectangle annotation added to highlight weekend
                                "id": "zone",
                                "type": "rectangle",
                                "x": "$xaxis.label.6.x",
                                "y": "$canvasEndY + 3",
                                "tox": "$xaxis.label.7.x",
                                "toy": "$canvasStartY",
                                 "color": "#6baa01",
                                 "alpha": "20",
                            },
                            {
                                //Rectangle annotation added to highlight weekend labels
                                "id": "weekend-labels-zone",
                                "type": "rectangle",
                                "x": "$xaxis.label.6.startx",
                                "y": "$xaxis.label.6.starty",
                                "tox": "$xaxis.label.7.endx",
                                "toy": "$xaxis.label.7.endy",
                                 "color": "#6baa01",
                                 "alpha": "20",
                            },
                            {
                                //Text annotation added to insert label for weekend zone
                                "id": "label",
                                "type": "text",
                                "text": "Weekend",
                                "fillcolor": "#999999",
                                "fontSize": "12",
                                "bold": "1",
                                "rotateText": "1",
                                "x": "$xaxis.label.7.x - 10",
                                "y": "$canvasEndY - 35"
                            }
                        ]
                        
                    }
                ]
            },
            "data": [{
                "label": "Mon",
                    "value": "15123"
            }, {
                "label": "Tue",
                    "value": "14233"
            }, {
                "label": "Wed",
                    "value": "24507"
            },{
                "vline": "true",
                "lineposition": "0",
                "color": "#6baa01",
                "labelHAlign": "left",
                "label": "National holiday"
            },
            {
                "label": "Thu",
                    "value": "9110"
            }, {
                "label": "Fri",
                    "value": "15529"
            }, {
                "label": "Sat",
                    "value": "20803"
            }, {
                "label": "Sun",
                    "value": "21202"
            }]
        }
    });

    visitChart.render();
});});
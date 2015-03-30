$(window).load(function(){FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'spline',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Bakersfield Central -Total footfalls",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "No. of Visitors",
                "theme": "fint"
            },
            "annotations": {
                "groups": [
                    {                       
                        "items": [
                            {
                                //Dotted line to indicate highest footfall
                                "id": "high-line",
                                "type": "line",
                                "x": "$canvasStartX",
                                "y": "$dataset.0.set.2.y",
                                "tox": "$canvasEndX",
                                "toy": "$dataset.0.set.2.y",
                                "color": "#6baa01",
                                "dashed": "1",
                                "thickness": "1"
                            },
                            {
                                "id": "label",
                                "type": "text",
                                "text": "Highest footfall",
                                "fillcolor": "#6baa01",
                                "rotate": "90",
                                "x": "$canvasEndX",
                                //Positioning text above the line
                                "y": "$dataset.0.set.2.y - 8",
                                //Aligning this text to right
                                "align": "right"
                            }
                        ]                        
                    },
                    {                       
                        "items": [
                            {
                                //Dotted line to indicate lowest footfall
                                "id": "low-line",
                                "type": "line",
                                "x": "$canvasStartX",
                                "y": "$dataset.0.set.3.y",
                                "tox": "$canvasEndX",
                                "toy": "$dataset.0.set.3.y",
                                "color": "#d35400",
                                "dashed": "1",
                                "thickness": "1"
                            },
                            {
                                "id": "label",
                                "type": "text",
                                "text": "Lowest footfall",
                                "fillcolor": "#d35400",
                                "rotate": "90",
                                "x": "$canvasStartX",
                                //Positioning y below the line
                                "y": "$dataset.0.set.3.y + 7",
                                //Aligning this text to left
                                "align": "left"
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
                    "value": "25507"
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
    }).render();
});});
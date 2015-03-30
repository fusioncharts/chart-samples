$(window).load(function(){FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'spline',
        renderAt: 'chart-container',
        width: '450',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Bakersfield Central - Total footfalls ",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "No. of Visitors",
                "theme": "fint"
            },
            "annotations": {
                "origw": "450",
                "origh": "350",
                "autoscale": "1",
                "groups": [
                    {                       
                        "items": [
                            {
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
                                "text": "Highest footfall: 25.5K.",
                                "fillcolor": "#6baa01",
                                "rotate": "90",
                                "x": "$canvasEndX",
                                "y": "$dataset.0.set.2.y-10",
                                "align": "Right"
                            },
                            {
                                "id": "label",
                                "type": "text",
                                "text": "Highest in current month.",
                                "fillcolor": "#6baa01",
                                "rotate": "90",
                                "x": "$canvasEndX",
                                "y": "$dataset.0.set.2.y+8",
                                "align": "Right",
                                "font": "Arial",
                                "fontSize": "12",
                                "bold": "1"
                            }
                        ]                        
                    },
                    {                       
                        "items": [
                            {
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
                                "text": "Lowest footfall: 9.1K",
                                "fillcolor": "#d35400",
                                "rotate": "90",
                                "x": "$canvasStartX",
                                "y": "$dataset.0.set.3.y-10",
                                "align": "Left"
                            },
                            {
                                "id": "label",
                                "type": "text",
                                "text": "Lowest of all time!",
                                "fillcolor": "#d35400",
                                "rotate": "90",
                                "x": "$canvasStartX",
                                "y": "$dataset.0.set.3.y+8",
                                "align": "Left",                                
                                "font": "Tahoma",
                                "fontSize": "12",
                                "bold": "1"
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
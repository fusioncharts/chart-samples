$(window).load(function(){FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'spline',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Bakersfield Central - Total footfalls",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "No. of Visitors",
                "theme": "fint"
            },
            "annotations": {
                "origw": "400",
                "origh": "300",
                "autoscale": "1",
                "groups": [
                    {                       
                        "items": [
                            {
                                //Creating a dotted line through annotations
                                "id": "high-line",
                                "type": "line",
                                "x": "$canvasStartX",
                                //Positioning is done using macros 
                                "y": "$dataset.0.set.2.y",
                                "tox": "$canvasEndX",
                                "toy": "$dataset.0.set.2.y",
                                "color": "#6baa01",
                                "dashed": "1",
                                "thickness": "1"
                            },
                            {
                                //Text rendered through annotations
                                "id": "label",
                                "type": "text",
                                "text": "Highest footfall last week",
                                "fillcolor": "#6baa01",
                                "rotate": "90",
                                "x": "$canvasEndX - 60",
                                //Positioning is done using macros
                                "y": "$dataset.0.set.2.y - 10"
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
$(window).load(function(){FusionCharts.ready(function () {
    var vstrChart = new FusionCharts({
        type: 'msline',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Website Visitors",
                "subCaption": "Last week Vs This week",
                "xAxisName": "Day",
                "yAxisName": "No. of Visitors",                
                "theme": "fint",   
                "showValues" : "0",
                //Configuring div lines not to display as dashed.
                "divLineIsDashed": "0",
                //Configuring alpha
                "divlineAlpha" : "50"
            },            
            "categories": [
                {
                    "category": [
                        {
                            "label": "Mon"
                        }, 
                        {
                            "label": "Tue"
                        }, 
                        {
                            "label": "Wed"
                        }, 
                        {
                            "label": "Thu"
                        }, 
                        {
                            "label": "Fri"
                        }, 
                        {
                            "label": "Sat"
                        }, 
                        {
                            "label": "Sun"
                        }
                    ]
                }
            ],
            
            "dataset": [
                {
                    "seriesname": "Last Week",
                    "data": [
                        {
                            "value": "13000"
                        }, 
                        {
                            "value": "14500"
                        }, 
                        {
                            "value": "13500"
                        }, 
                        {
                            "value": "15000"
                        }, 
                        {
                            "value": "15500"
                        }, 
                        {
                            "value": "17650"
                        }, 
                        {
                            "value": "19500"
                        }
                    ]
                }, 
                {
                    "seriesname": "This Week",
                    "data": [
                        {
                            "value": "15400"
                        }, 
                        {
                            "value": "16800"
                        }, 
                        {
                            "value": "18800"
                        }, 
                        {
                            "value": "22400"
                        }, 
                        {
                            "value": "23800"
                        }, 
                        {
                            "value": "25800"
                        }, 
                        {
                            "value": "30800"
                        }
                    ]
                }
            ]
        }
    }).render();
});});
$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            id: "myChart",
            width: '500',
            height: '350',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "subCaption": "Last Year",
                    "showBorder": "0",
                    "xAxisName": "Quarter",
                    "yAxisName": "Amount (In USD)",
                    "numberPrefix": "$",
                    "yAxisMaxValue": "50000",                                
                    "showValues": "0",
                    "showTooltip": "0",
                    //Theme
                    "theme" : "fint"
                },
                "data": [
                    {
                        "label": "Q1",
                        "value": "25400"
                    }, {
                        "label": "Q2",
                        "value": "29800"
                    }, {
                        "label": "Q3",
                        "value": "21800"
                    }, {
                        "label": "Q4",
                        "value": "26800"
                    }
                ],
                //All annotations are grouped under this element
                "annotations": {
                    "drawImmediately": "1",
                    "showbelow": "1",
                    //Annotations on a chart can be divided across multiple groups for easy management, and manipulation through API
                    "groups": [                        
                        {                  
                            //Each group needs a unique ID
                            "id": "Callout",
                            //Under each group, you can define multiple items. Each item is a polygon, text or image - with its own set of parameters.
                            "items": [
                                {
                                    //Each item needs a unique ID
                                    "id": "CalloutBase",
                                    //This item is of type rectangle
                                    "type": "rectangle",
                                    "radius": "2",
                                    "alpha" : "90",                                
                                    "fillColor": "#6baa01",
                                    //Setting x and y position based on annotation macros. Here we're statically positioning it w.r.t 2nd column (0 base in JavaScript) of 1st dataset. Hence $dataset.0.set.1.x
                                    "x": "$dataset.0.set.1.x-110",
                                    "y": "$dataset.0.set.1.starty-18",
                                    "tox": "$dataset.0.set.1.x+110",
                                    "toy": "$dataset.0.set.1.starty-40"
                                },
                                {
                                    "id": "CalloutTriangle",
                                    //Polygon item 
                                    "type": "polygon",
                                    //With 3 sides, so it is a triangle
                                    "sides": "3",
                                    "startangle": "270",
                                    "alpha" : "90",      
                                    "fillColor": "#6baa01",                                    
                                    "x": "$dataset.0.set.1.x",
                                    "y": "$dataset.0.set.1.starty-12",
                                    "radius": "12",                                
                                },
                                {
                                    "id": "CalloutLabel",
                                    //Text annotation item type to add label for callout
                                    "type": "Text",                                
                                    "fontSize": "12",                                                                
                                    "bold": "1",
                                    "fillcolor": "#ffffff",
                                    "text": "Biggest Quarter Last year - $29.8K",
                                    "x": "$dataset.0.set.1.x",
                                    "y": "$dataset.0.set.1.starty - 30"
                                }
                                
                            ]
                        }
                    ]
                }
            },            
        });
    revenueChart.render();
});});
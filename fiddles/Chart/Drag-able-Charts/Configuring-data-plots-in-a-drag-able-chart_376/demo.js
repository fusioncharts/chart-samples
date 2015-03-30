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
                "snapToDiv": "1",
                "snapToDivRelaxation": "5",
                "theme": "fint"
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
        events: {
            'dataplotDragEnd': function(evt, arg){
                var dtIndx = arg && arg.dataIndex,
                    val = arg && parseInt(arg.endValue, 10);
                
                document.getElementById('est-'+dtIndx).innerHTML = val;
            },
            
            'dataRestored': function(evtObj){                
                var estimatedOrigValues = ["19000", "16500", "14300", "10000", "9800"],
                    numVals = estimatedOrigValues.length,
                    i,
                    val;
                
                for (i=0; i < numVals; i += 1) {
                    val = estimatedOrigValues[i];                    
                    
                    document.getElementById('est-'+ (i + 1)).innerHTML = val;
                }                
            }
        }
    }).render();
});});
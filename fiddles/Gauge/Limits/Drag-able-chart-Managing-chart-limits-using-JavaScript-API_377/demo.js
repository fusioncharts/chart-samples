$(window).load(function(){FusionCharts.ready(function () {
    var maxBtn = document.getElementById('max-btn'),
        minBtn = document.getElementById('min-btn'),
        maxTxtFld = document.getElementById('max-limit'),                    
        minTxtFld = document.getElementById('min-limit'),
        
        setMaxLimit = function () {
            var maxLimit = maxTxtFld.value,
                crntLimit = salesPrediction && salesPrediction.getUpperLimit(),
                status;
            
            if(maxLimit != crntLimit){
                status = salesPrediction && salesPrediction.setUpperLimit(maxLimit);
                if(status){
                    alert('Max limit updated successfully');
                }else{                    
                    maxTxtFld.value = crntLimit;                    
                    alert('Max limit could not be updated!')
                }
            }           
                        
        },
        
        setMinLimit = function () {
            var minLimit = minTxtFld.value,
                crntLimit = salesPrediction && salesPrediction.getLowerLimit(),
                status;
            
            if(minLimit != crntLimit){
                status = salesPrediction && salesPrediction.setLowerLimit(minLimit);
                if(status){
                    alert('Min limit updated successfully');
                }else{                    
                    minTxtFld.value = crntLimit;                    
                    alert('Min limit could not be updated!')
                }
            }           
                        
        },
    
        salesPrediction = new FusionCharts({
            type: 'dragarea',
            renderAt: 'chart-container',
            width: '500',
            height: '350',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Quarterly Unit Sales - Apple vs. Samsung",
                    "subCaption": "Drag anchors to change estimated values",
                    "subCaptionFontSize" : "12",
                    "xAxisName": "Quarter",
                    "yAxisName": "No. of Units",
                    "theme": "fint"
                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": "Q1"
                            }, 
                            {
                                "label": "Q2"
                            }, 
                            {
                                "label": "Q3(E)"
                            }, 
                            {
                                "label": "Q4(E)"
                            }
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Apple",
                        "valuePosition": "ABOVE",
                        "allowDrag": "0",
                        "data": [
                            {
                                "value": "1200"
                            }, 
                            {
                                "value": "1500",
                                "dashed": "1"
                            }, 
                            {
                                "value": "1300",
                                "allowDrag": "1",
                                "dashed": "1"
                            }, 
                            {
                                "value": "900",
                                "allowDrag": "1",
                                "tooltext": "Predicted sales $value units"
                            }
                        ]
                    },
                    {
                        "seriesname": "Samsung",
                        "allowDrag": "0",
                        "data": [
                            {
                                "value": "600"
                            }, 
                            {
                                "value": "850",
                                "dashed": "1"
                            }, 
                            {
                                "value": "1000",
                                "allowDrag": "1",
                                "dashed": "1"
                            }, 
                            {
                                "value": "1200",
                                "allowDrag": "1",
                                "tooltext": "Predicted sales $value units"
                            }
                        ]
                    }
                ]
            },
            events: {
                'rendered': function(evtObj, argObj){
                    var chartIns = evtObj.sender,                                        
                        chartMaxLimit = chartIns.getUpperLimit(),
                        chartMinLimit = chartIns.getLowerLimit();
                    
                    maxTxtFld.value = chartMaxLimit;
                    minTxtFld.value = chartMinLimit;
                }
            }
        }).render();
    
    if (maxBtn.addEventListener) {
        maxBtn.addEventListener("click", setMaxLimit);
        minBtn.addEventListener("click", setMinLimit);
    } else {
        maxBtn.onclick && maxBtn.onclick(setMaxLimit);
        minBtn.onclick && minBtn.onclick(setMinLimit);
    }
    
    
});});
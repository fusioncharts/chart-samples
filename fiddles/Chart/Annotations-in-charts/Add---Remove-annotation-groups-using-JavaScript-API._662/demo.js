$(window).load(function(){FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        id: "mychart",
        type: 'msspline',
        renderAt: 'chart-container',
        width: '550',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Number of visitors last week",
                "subCaption": "Bakersfield Central vs Los Angeles Topanga",
                "xAxisName": "Day",
                "yAxisName": "No. of Visitors (In 1000s)",
                "showValues": "0",
                "showTooltip": "0",
                "theme": "fint"
                
            },

            "categories": [
                {
                    "category": [
                        { "label": "Mon" }, 
                        { "label": "Tue" }, 
                        { "label": "Wed" }, 
                        { 
                            "vline": "true",
                            "lineposition": "0",
                            "color": "#6baa01",
                            "labelHAlign": "right",
                            "labelPosition": "0",
                            "label": "National holiday"
                        },
                        { "label": "Thu" }, 
                        { "label": "Fri" }, 
                        { "label": "Sat" }, 
                        { "label": "Sun" }
                    ]
                }
            ],
            "annotations": {
                "origw": "550",
                "origh": "400",
                "autoscale": "1",
                "groups": [
                    {
                        "id": "ds1tips",
                        "items": [
                            {
                                "id": "indicator-line",
                                "type": "line",
                                "dashed": "1"
                            }, {
                                "id": "tip1_1",
                                "type": "rectangle",
                                "fillcolor": "#6baa01",
                                "x": "$dataset.0.set.0.x + 5",
                                "y": "$dataset.0.set.0.y - 30",
                                "tox": "$dataset.0.set.0.x + 80",
                                "toy": "$dataset.0.set.0.y - 10",
                                "visible": "0"
                            }
                        ]
                    }, 
                    {
                        "id": "dyn-label-grp",
                        "items": [
                            {
                                "id": "dyn-label-bg",
                                "type": "rectangle",
                                "radius": "3"
                            }, {
                                "id": "dyn-label",
                                "type": "text",
                                "fillcolor": "#ffffff",
                                "fontsize": "11",
                                "bold": "1"
                            }, {
                                "id": "dyn-detail-label",
                                "type": "text",
                                "align": "right",
                                "x": "$canvasendx",
                                "bgcolor": "#ffffff"
                            }
                        ]
                    }
                ]
            },
            "dataset": [
                {
                    "seriesname": "Bakersfield Central",
                    "data": [
                        { "value": "15123" }, 
                        { "value": "14233" }, 
                        { "value": "25507" }, 
                        { "value": "9110"  }, 
                        { "value": "15529" }, 
                        { "value": "20803" }, 
                        { "value": "19202" }
                    ]
                }, 
                {
                    "seriesname": "Los Angeles Topanga",
                    "data": [
                        { "value": "13400" },
                        { "value": "12800" },
                        { "value": "22800" },
                        { "value": "12400" },
                        { "value": "15800" },
                        { "value": "19800" },
                        { "value": "21800" }
                    ]
                }
            ]
        },
        "events": {
            "beforeInitialize": function () {
                //Button state flag
                window.flag = 0;
                //Method to add / destroy Annotation Group and Annotations
                window.highlightHolyday = function(){
                    var annotations = FusionCharts.items["mychart"].annotations;
                    if(window.flag === 0){
                        window.flag = 1;
                        annotations && annotations.addGroup && annotations.addGroup({id: "highlightDays"});
                        var xPos = "{$canvasEndX - $canvasStartX}",
                            itemBgRect = {
                                        "id": "holidayBgRect",
                                        "type": "rectangle",
                                        "radius": "3",
                                        "fillcolor": "#cc0000",
                                        "x": ["$dataset", 1, "set", 2, "x-50"].join("."),
                                        "y": "$canvasEndY +2",
                                        "tox": ["$dataset", 1, "set", 2, "x+50"].join("."),
                                        "toy": "$canvasEndY + 27"
                                    },
                            highlightTxt = {
                                    "id": "lighlight-label",
                                    "type": "text",
                                    "fillcolor": "#ffffff",
                                    "fontsize": "14",
                                    "bold": "1",
                                    "text":"Wednesday",
                                    "x": ["$dataset", 1, "set", 2, "x"].join("."),
                                    "y": "$canvasEndY +14"
                                };
                        
                        annotations.addItem("highlightDays", itemBgRect, true);
                        annotations.addItem("highlightDays", highlightTxt, true);
                        document.getElementById('toggleBtn').value = "Remove Highlight";
                    } else {
                        annotations.destroy("lighlight-label");
                        annotations.destroy("holidayBgRect");
                        annotations.destroy("highlightDays");
                        window.flag = 0;
                        document.getElementById('toggleBtn').value = "Highlight Holiday";
                    } 
                };  
            },
            "beforeRender": function (e, a) {
                // Create all the elements that we need
                var btnDiv = document.createElement("div"),
                    hlButton = document.createElement("input");  
                // Set attributes for the btnDiv div
                btnDiv.setAttribute("align", "center");
                btnDiv.style.cssText = "width:530px; margin: 10px;";
                // Set attributes for the input button
                hlButton.setAttribute("type", "button");
                hlButton.setAttribute("id", "toggleBtn");
                hlButton.setAttribute("name", "highlight");
                hlButton.setAttribute("value", "Highlight Holiday");
                hlButton.setAttribute("onclick", "highlightHolyday()");
                
                // Render elements
                a.container.parentNode.appendChild(btnDiv);
                // Append the input button as child of btnDiv
                btnDiv.appendChild(hlButton);
            },
            "dataplotrollover": function (evtObj, argObj) {
                var dsIndex = argObj.datasetIndex,
                dsName = argObj.datasetName,
                index = argObj.index,
                value = argObj.value,
                color = (dsIndex === 0)? "#0075c2" : "#0e948c",
                annotations = evtObj.sender.annotations;
    
                annotations.update("dyn-label-bg", {
                    "x": "$canvasstartx - 55",
                    "tox": "$canvasstartx - 10",
                    "y": ["$dataset", dsIndex, "set", index, "y+10"].join("."),
                    "toy": ["$dataset", dsIndex, "set", index, "y-10"].join("."),
                    "fillcolor": color,
                });
    
                annotations.update("dyn-label", {
                    "text": value,
                    "x": "$canvasstartx - 32",
                    "y": ["$dataset", dsIndex, "set", index, "y"].join(".")
                });
    
                annotations.update("indicator-line", {
                    x: ["$canvasstartx"],
                    tox: ["$canvasendx"],
                    y: ["$dataset", dsIndex, "set", index, "y"].join("."),
                    toy: ["$dataset", dsIndex, "set", index, "y"].join("."),
                        "color": color
                });
        
                annotations.update("dyn-detail-label", {
                    "text": "Total " + value + " vistiors {br} in " + dsName + " strore",
                    "color": color,
                    "y": ["$dataset", dsIndex, "set", index, "y + 15"].join(".")
                });       
            },
            "dataplotrollout": function (evtObj, argObj) {
                var annotations = evtObj.sender.annotations;
                annotations.hide("indicator-line");
                annotations.hide("dyn-label-bg");
                annotations.hide("dyn-label");
                annotations.hide("dyn-detail-label");
            }
        }
    });
    visitChart.render();
});});
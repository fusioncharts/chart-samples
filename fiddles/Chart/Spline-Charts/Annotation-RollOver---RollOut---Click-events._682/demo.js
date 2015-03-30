$(window).load(function(){FusionCharts.ready(function () {
    //Flag to keep track of whether the event on annotation is roll-over or click
    var roFlag = false,
        visitChart = new FusionCharts({
            id: "mychart",
            type: 'msspline',
            renderAt: 'chart-container',
            width: '550',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Total visitors : Bakersfield Central vs Los Angeles Topanga",
                    "subCaption": "Last Week ( RollOver/ Click on red circle to view details)",
                    "xAxisName": "Day",
                    "yAxisName": "No. of Visitors (In 1000s)",
                    "showValues": "0",
                    "showTooltip": "0",
                    "showHoverEffect":"0",
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
                            "showBelow":"0",
                            "items": [
                                {
                                    "id": "highestSale",
                                    "type": "circle",
                                    "radius": "5",
                                    "fillcolor": "#cc0000",
                                    "x": ["$dataset", 0, "set", 2, "x"].join("."),
                                    "y": ["$dataset", 0, "set", 2, "y"].join("."),
                                    "link":"#"
                                    
                                    
                                },
                                {
                                    "id": "highest-label",
                                    "type": "text",
                                    "text": "Maximum Visitors",
                                    "fillcolor": "#ff0000",
                                    "fontsize": "10",
                                    "bold": "1",
                                    "x": ["$dataset", 0, "set", 2, "x+80"].join("."),
                                    "y": ["$dataset", 0, "set", 2, "y"].join("."),
                                    "visible": "0"
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
                //On roll-over event of the annotation, based on the event flag, show a custom message
                "annotationrollover": function (evtObj, argObj) {
                    var annotations = evtObj.sender.annotations
                    //If rolled-over only, then show Maximim Visitors, else if clicked, show Total Visitors
                    annotationTxt = (!roFlag)? "Maximum Visitors" : "Total Visitors : 25.5K";
                    if(argObj.annotationId === "highestSale"){
                        annotations.update("highestSale", {
                            "type": "circle",
                            "radius": "6",
                            "fillcolor": "#cc0000",
                            "x": ["$dataset", 0, "set", 2, "x"].join("."),
                            "y": ["$dataset", 0, "set", 2, "y"].join(".")
                        });
                        annotations.update("highest-label", {
                            "type": "text",
                            "text": annotationTxt,
                            "fillcolor": "#ff0000",
                            "fontsize": "12",
                            "bold": "1",
                            "x": ["$dataset", 0, "set", 2, "x+90"].join("."),
                            "y": ["$dataset", 0, "set", 2, "y"].join(".")
                        });
                        annotations.show("highest-label");
                    }
                },
                //On roll-out, hide
                "annotationrollout": function (evtObj, argObj) {
                    var annotations = evtObj.sender.annotations;
                    
                    if(argObj.annotationId === "highestSale"){
                        annotations.update("highestSale", {
                            "id": "highestSale",
                            "type": "circle",
                            "radius": "5",
                            "fillcolor": "#cc0000",
                            "x": ["$dataset", 0, "set", 2, "x"].join("."),
                            "y": ["$dataset", 0, "set", 2, "y"].join(".")
                        });
                        annotations.hide("highest-label");
                    }
                },
                //On click of annotation, toggle the message.
                "annotationclick": function (evtObj, argObj) {
                    var annotations = evtObj.sender.annotations,
                        annotationTxt;
                    roFlag = !roFlag;
                    annotationTxt = (!roFlag)? "Maximum Visitors" : "Total Visitors : 25.5K";
                    if(argObj.annotationId === "highestSale"){
                        annotations.update("highest-label", {
                            "type": "text",
                            "text": annotationTxt,
                            "fillcolor": "#ff0000",
                            "fontsize": "12",
                            "bold": "1",
                            "x": ["$dataset", 0, "set", 2, "x+90"].join("."),
                            "y": ["$dataset", 0, "set", 2, "y"].join(".")
                        });
                        annotations.show("highest-label");
                    }
                }
            }
        });
    visitChart.render();
});});
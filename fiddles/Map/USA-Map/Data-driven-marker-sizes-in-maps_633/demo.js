$(window).load(function(){FusionCharts.ready(function () {
    var topStates = new FusionCharts({
        "type": "usa",
        "renderAt": "chart-container",
        "width": "600",
        "height": "400",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "theme": "fint",
                "useHoverColor": "0",
                "caption": "Top 10 Revenue earning US states",
                "subcaption": "Last Year",
                "numberPrefix": "$",
                //Enabling usage of values for markers
                "useValuesForMarkers": "1",
                "showMarkerLabels": "0",
                "showLabels":"1"
            },
            "markers": {
                "shapes": [
                    {
                        "id": "myCustomShape",
                        "type": "circle",
                        "showborder": "0"
                    }
                ],
                "items": [
                    {
                        "shapeid": "myCustomShape",
                        "id": "TX",
                        "x": "333",
                        "y": "304",
                        "label": "Texas",
                        //Values of marker that make it data enabled
                        "value": "97344000",
                        "tooltext": "Rank #1, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "WV",
                        "x": "544",
                        "y": "200",
                        "label": "West Virginia",
                        //Values of marker that make it data enabled
                        "value": "95890000",
                        "tooltext": "Rank #2, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "FL",
                        "x": "540",
                        "y": "351",
                        "label": "Florida",
                        //Values of marker that make it data enabled
                        "value": "88234000",
                        "tooltext": "Rank #3, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "SC",
                        "x": "552",
                        "y": "271",
                        "label": "South Carolina",
                        //Values of marker that make it data enabled
                        "value": "88234000",
                        "tooltext": "Rank #4, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "VA",
                        "x": "583",
                        "y": "210",
                        "label": "Virginia",
                        //Values of marker that make it data enabled
                        "value": "83140000",
                        "tooltext": "Rank #5, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NJ",
                        "x": "630",
                        "y": "168",
                        "label": "New Jersey",
                        "value": "80788000",
                        "tooltext": "Rank #6, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "KY",
                        "x": "501",
                        "y": "210",
                        "label": "Kentucky",
                        "value": "79118000",
                        "tooltext": "Rank #7, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "OK",
                        "x": "347",
                        "y": "245",
                        "label": "Oklahoma",
                        "value": "79038000",
                        "tooltext": "Rank #8, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NM",
                        "x": "238",
                        "y": "262",
                        "label": "New Mexico",
                        "value": "78865000",
                        "tooltext": "Rank #9, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "WY",
                        "x": "220",
                        "y": "121",
                        "label": "Wyoming",
                        "value": "78834000",
                        "tooltext": "Rank #10, $label, Revenue : $dataValue"
                    }
                ]
            }
        }
    }).render();  
    
});});
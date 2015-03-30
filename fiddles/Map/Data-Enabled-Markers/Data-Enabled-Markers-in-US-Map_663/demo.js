$(window).load(function(){FusionCharts.ready(function () {
    var top10states = new FusionCharts({
        "type": "usa",
        "renderAt": "chart-container",
        "width": "600",
        "height": "400",
        "dataFormat": "json",
        "dataSource": {
            "map": {
                "theme": "fint",
                "useHoverColor": "0",
                "caption": "Top 10 Revenue earning US states",
                "subcaption": "Last Month",
                "fillColor": "#b4ddb0",
                "showCanvasBorder": "0",
                "showShadow": "0",
                "useValuesForMarkers": "1",
                "numberPrefix": "$",
                "showMarkerLabels": "0",
                "borderColor": "#ffffff"
            },
            "markers": {
                "shapes": [
                    {
                        "id": "myCustomShape",
                        "type": "circle",
                        "fillcolor": "#008ee4",
                        "showborder": "0"
                    }
                ],
                "items": [
                    {
                        "shapeid": "myCustomShape",
                        "id": "WA",
                        "x": "54.5",
                        "y": "44.8",
                        "label": "Washington",
                        "value": "4536500",
                        "tooltext": "Rank #4, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "ND",
                        "x": "310",
                        "y": "42",
                        "label": "North Dakota",
                        "value": "2415356",
                        "tooltext": "Rank #9, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NY",
                        "x": "620",
                        "y": "120",
                        "label": "New York",
                        "value": "7456340",
                        "tooltext": "Rank #1, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "MI",
                        "x": "504",
                        "y": "115",
                        "label": "Michigan",
                        "value": "1137600",
                        "tooltext": "Rank #10, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "FL",
                        "x": "539",
                        "y": "350",
                        "label": "Florida",
                        "value": "3125643",
                        "tooltext": "Rank #7, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "TX",
                        "x": "333",
                        "y": "304",
                        "label": "Texas",
                        "value": "5476590",
                        "tooltext": "Rank #3, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "AZ",
                        "x": "165",
                        "y": "261",
                        "label": "Arizona",
                        "value": "3476580",
                        "tooltext": "Rank #7, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NV",
                        "x": "111",
                        "y": "183",
                        "label": "Nevada",
                        "value": "4523850",
                        "tooltext": "Rank #5, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "CA",
                        "x": "65.57",
                        "y": "227.21",
                        "label": "California",
                        "value": "6543860",
                        "tooltext": "Rank #2, $label, Revenue : $dataValue"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "KS",
                        "x": "336",
                        "y": "195",
                        "label": "Kansas",
                        "value": "4128450",
                        "tooltext": "Rank #6, $label, Revenue : $dataValue"
                    }
                ]
            }
        }
    });    

    top10states.render();
});});
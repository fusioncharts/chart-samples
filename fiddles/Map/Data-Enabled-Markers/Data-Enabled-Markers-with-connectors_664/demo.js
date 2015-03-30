$(window).load(function(){FusionCharts.ready(function () {
    var shippingGeoChart = new FusionCharts({
        "type": "usa",
        "renderAt": "chart-container",
        "width": "600",
        "height": "400",
        "dataFormat": "json",
        "dataSource": {
            "map": {
                "theme": "fint",
                "useHoverColor": "0",
                "caption": "Warehouses and their covering States",
                "subcaption": "Harry's Supermart",
                "fillColor": "#008ee4",
                "showCanvasBorder": "0",
                "useValuesForMarkers": "1",
                "showMarkerLabels": "0",
                "numberSuffix": "%",
                "connectorColor": "#90e501",
                "connectorDashed": "1",
                "connectorThickness": "2",
                "borderColor": "#ffffff",
                "showShadow": "0"
            },
            "markers": {
                "shapes": [
                    {
                        "id": "myCustomShape",
                        "type": "circle",
                        "fillcolor": "#f8bd19",
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
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "OR",
                        "x": "58.3",
                        "y": "101.7",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "ID",
                        "x": "132.8",
                        "y": "110.7",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "MT",
                        "x": "188.8",
                        "y": "45.1",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "WY",
                        "x": "220",
                        "y": "121",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "AZ",
                        "x": "165",
                        "y": "261",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "UT",
                        "x": "170",
                        "y": "178",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NV",
                        "x": "101",
                        "y": "193",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "AK",
                        "x": "102",
                        "y": "346",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "LA",
                        "x": "406",
                        "y": "300",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "OK",
                        "x": "347",
                        "y": "245",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NM",
                        "x": "238",
                        "y": "263",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "CO",
                        "x": "246.72",
                        "y": "179.01",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "KS",
                        "x": "335",
                        "y": "195",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "MO",
                        "x": "408",
                        "y": "197",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "AR",
                        "x": "413",
                        "y": "253",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "MS",
                        "x": "442",
                        "y": "277",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NE",
                        "x": "318",
                        "y": "146",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "SD",
                        "x": "311",
                        "y": "99",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "ND",
                        "x": "310",
                        "y": "42",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "MN",
                        "x": "382",
                        "y": "61",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "WI",
                        "x": "439",
                        "y": "91",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "IA",
                        "x": "396",
                        "y": "139",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "IL",
                        "x": "445",
                        "y": "174",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "MI",
                        "x": "502",
                        "y": "114",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "IN",
                        "x": "483",
                        "y": "174",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "OH",
                        "x": "530",
                        "y": "168",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "KY",
                        "x": "501",
                        "y": "210",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "WV",
                        "x": "544",
                        "y": "199",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "PA",
                        "x": "593",
                        "y": "155",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NY",
                        "x": "620",
                        "y": "120",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "VT",
                        "x": "654",
                        "y": "95",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "ME",
                        "x": "700",
                        "y": "82",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NH",
                        "x": "666",
                        "y": "114",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "MA",
                        "x": "655",
                        "y": "132",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "CT",
                        "x": "654",
                        "y": "146",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "TN",
                        "x": "490",
                        "y": "237",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "GA",
                        "x": "522",
                        "y": "283",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "AL",
                        "x": "489",
                        "y": "279",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "FL",
                        "x": "539",
                        "y": "350",
                        "radius": "1"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "TX",
                        "x": "333",
                        "y": "304",
                        "label": "Texas",
                        "value": "75",
                        "tooltext": "Capacity utilization:$value% {br}Packages shipped/day : 7950 Units(avg) {br}Packages received/day: 8010 Units(avg){br}Daily operational cost: $4000(avg)"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "CA",
                        "x": "65.57",
                        "y": "227.21",
                        "label": "California",
                        "value": "80",
                        "tooltext": "Capacity utilization: $value%{br}Packages shipped/day : 4920 Units(avg) {br}Packages received/day: 5024 Units(avg){br}Daily operational cost: $6000(avg)"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "NC",
                        "x": "576",
                        "y": "240",
                        "label": "North Carolina",
                        "value": "65",
                        "tooltext": "Capacity utilization: $value%{br}Packages shipped/day : 1950 Units(avg){br}Packages received/day: 2030 Units(avg){br}Daily operational cost: $2000(avg)"
                    }
                ],
                "connectors": [
                    {
                        "from": "CA",
                        "to": "WA"
                    },
                    {
                        "from": "CA",
                        "to": "ID"
                    },
                    {
                        "from": "CA",
                        "to": "MT"
                    },
                    {
                        "from": "CA",
                        "to": "WY"
                    },
                    {
                        "from": "CA",
                        "to": "NV"
                    },
                    {
                        "from": "CA",
                        "to": "UT"
                    },
                    {
                        "from": "CA",
                        "to": "AZ"
                    },
                    {
                        "from": "CA",
                        "to": "AK"
                    },
                    {
                        "from": "TX",
                        "to": "NM"
                    },
                    {
                        "from": "TX",
                        "to": "LA"
                    },
                    {
                        "from": "TX",
                        "to": "OK"
                    },
                    {
                        "from": "TX",
                        "to": "CO"
                    },
                    {
                        "from": "TX",
                        "to": "KS"
                    },
                    {
                        "from": "TX",
                        "to": "MO"
                    },
                    {
                        "from": "TX",
                        "to": "AR"
                    },
                    {
                        "from": "TX",
                        "to": "MS"
                    },
                    {
                        "from": "TX",
                        "to": "NE"
                    },
                    {
                        "from": "TX",
                        "to": "SD"
                    },
                    {
                        "from": "TX",
                        "to": "ND"
                    },
                    {
                        "from": "TX",
                        "to": "MN"
                    },
                    {
                        "from": "TX",
                        "to": "WI"
                    },
                    {
                        "from": "TX",
                        "to": "IA"
                    },
                    {
                        "from": "TX",
                        "to": "IL"
                    },
                    {
                        "from": "TX",
                        "to": "HI"
                    },
                    {
                        "from": "NC",
                        "to": "IN"
                    },
                    {
                        "from": "NC",
                        "to": "MI"
                    },
                    {
                        "from": "NC",
                        "to": "OH"
                    },
                    {
                        "from": "NC",
                        "to": "KY"
                    },
                    {
                        "from": "NC",
                        "to": "WV"
                    },
                    {
                        "from": "NC",
                        "to": "PA"
                    },
                    {
                        "from": "NC",
                        "to": "VT"
                    },
                    {
                        "from": "NC",
                        "to": "NH"
                    },
                    {
                        "from": "NC",
                        "to": "MA"
                    },
                    {
                        "from": "NC",
                        "to": "CT"
                    },
                    {
                        "from": "NC",
                        "to": "ME"
                    },
                    {
                        "from": "NC",
                        "to": "NY"
                    },
                    {
                        "from": "NC",
                        "to": "TN"
                    },
                    {
                        "from": "NC",
                        "to": "AL"
                    },
                    {
                        "from": "NC",
                        "to": "GA"
                    },
                    {
                        "from": "NC",
                        "to": "SC"
                    },
                    {
                        "from": "NC",
                        "to": "FL"
                    }
                ]
            }
        }
    });    

    shippingGeoChart.render();
});});
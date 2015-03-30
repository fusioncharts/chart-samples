$(window).load(function(){FusionCharts.ready(function () {
    var wrCoverage = new FusionCharts({
        type: 'usa',
        renderAt: 'chart-container',
        width: '650',
        height: '450',
        dataFormat: 'json',
        dataSource: {
            "map": {
                "theme": "fint",                
                "caption": "Harry's SuperMart - Distribution Network",
                "subcaption": "Packages shipped per day",                
                "connectorToolText": "$label packages shipped daily.",
                "fillColor": "#008ee4",
                "hoverColor": "#63c4ff",
                "showCanvasBorder": "0",               
                "showMarkerLabels":"0",
                "numberSuffix": "%",
                "connectorColor": "#90e501",
                "connectorDashed": "0",
                "connectorThickness": "3",
                "connectorHoverColor": "#f8bd19",
                "borderColor": "#ffffff",
                "showShadow": "0"
            },
            "data": [{
                "id": "WA",
                "toolText": "$lName is covered by warehouse in California"                
            }, {
                "id": "OR",
                "toolText": "$lName is covered by warehouse in California"
            },{
                "id": "CA",
                "toolText": "$lName has a warehouse"
            },{
                "id": "TX",
                "toolText": "$lName has a warehouse"
            },{
                "id": "NC",
                "toolText": "$lName has a warehouse"
            },{
                "id": "NV",
                "toolText": "$lName is covered by warehouse in California"
            },{
                "id": "AZ",
                "toolText": "$lName is covered by warehouse in California"
            },{
                "id": "NM",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "UT",
                "toolText": "$lName is covered by warehouse in California"
            },{
                "id": "ID",
                "toolText": "$lName is covered by warehouse in California"
            },{
                "id": "MT",
                "toolText": "$lName is covered by warehouse in California"
            },{
                "id": "WY",
                "toolText": "$lName is covered by warehouse in California"
            },{
                "id": "CO",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "ND",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "SD",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "NE",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "KS",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "MN",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "IA",
                "toolText": "$lName is covered by warehouse in Texas"                
            },{
                "id": "LA",
                "toolText": "$lName is covered by warehouse in Texas"                
            },{
                "id": "MO",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "WI",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "IL",
                "toolText": "$lName is covered by warehouse in Texas"
            },{
                "id": "MI",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "IN",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "OH",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "PA",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "VA",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "RI",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "DE",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "MD",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "DC",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "WV",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "KY",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "TN",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "AL",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "GA",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "SC",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "FL",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "MS",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "NJ",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "NY",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "CT",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "MA",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "NH",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "VT",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },{
                "id": "ME",
                "toolText": "$lName is covered by warehouse in North Carolina"
            },
            {
                "id": "OK",
                "toolText": "$lName is covered by warehouse in Texas"
            },
            {
                "id": "AR",
                "toolText": "$lName is covered by warehouse in Texas"
            }],
            "markers": {
                "shapes": [
                    {
                        "id": "myCustomShape",
                        "type": "circle",
                        "fillcolor": "#f8bd19",
                        "showborder": "0",
                    }
                ],
                "items": [
                    {
                        "shapeid": "myCustomShape",
                        "id": "WA",
                        "x": "54.5",
                        "y": "44.8",
                        "label": "Washington",
                        "radius" : "1"
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
                        "id": "VA",
                        "x": "580",
                        "y": "210",
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
                        "radius": "1",
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
                        "radius": "10"
                    },                    
                    {
                        "shapeid": "myCustomShape",
                        "id": "NC",
                        "x": "576",
                        "y": "240",
                        "label": "North Carolina",
                        "radius": "10"
                    },
                    {
                        "shapeid": "myCustomShape",
                        "id": "CA",
                        "x": "68",
                        "y": "225",
                        "label": "California",
                        "radius": "10"
                    },
                ],
                "connectors": [
                    {
                        "from": "CA",
                        "to": "WA",
                        "label": "20540"
                    },
                    {
                        "from": "CA",
                        "to": "ID",
                        "label": "17400"
                    },
                    {
                        "from": "CA",
                        "to": "MT",
                        "label": "15600"
                    },
                    {
                        "from": "CA",
                        "to": "WY",
                        "label": "18400"
                    },
                    {
                        "from": "CA",
                        "to": "NV",
                        "label": "19300"
                    },
                    {
                        "from": "CA",
                        "to": "UT",
                        "label": "16500"
                    },
                    {
                        "from": "CA",
                        "to": "AZ",
                        "label": "18400"
                    },                    
                    {
                        "from": "TX",
                        "to": "NM",
                        "label": "21300"
                    },
                    {
                        "from": "TX",
                        "to": "LA",
                        "label": "15440"
                    },
                    {
                        "from": "TX",
                        "to": "OK",
                        "label": "16800"
                    },
                    
                    {
                        "from": "TX",
                        "to": "CO",
                        "label": "17200"
                    },
                    {
                        "from": "TX",
                        "to": "KS",
                        "label": "13670"
                    },
                    {
                        "from": "TX",
                        "to": "MO",
                        "label": "12560"
                    },
                    {
                        "from": "TX",
                        "to": "AR",
                        "label": "19200"
                    },
                    {
                        "from": "TX",
                        "to": "MS",
                        "label": "18760"
                    },
                    {
                        "from": "TX",
                        "to": "NE",
                        "label": "16870"
                    },
                    {
                        "from": "TX",
                        "to": "SD",
                        "label": "17300"
                    },
                    {
                        "from": "TX",
                        "to": "ND",
                        "label": "19900"
                    },
                    {
                        "from": "TX",
                        "to": "MN",
                        "label": "16100"
                    },
                    {
                        "from": "TX",
                        "to": "WI",
                        "label": "14890"
                    },
                    {
                        "from": "TX",
                        "to": "IA",
                        "label": "15600"
                    },
                    {
                        "from": "TX",
                        "to": "IL",
                        "label": "17650"
                    },                    
                    {
                        "from": "NC",
                        "to": "IN",
                        "label": "14700"
                    },
                    {
                        "from": "NC",
                        "to": "MI",
                        "label": "18200"
                    },
                    {
                        "from": "NC",
                        "to": "OH",
                        "label": "16540"
                    },
                    {
                        "from": "NC",
                        "to": "KY",
                        "label": "15850"
                    },
                    {
                        "from": "NC",
                        "to": "WV",
                        "label": "16430"
                    },
                    {
                        "from": "NC",
                        "to": "PA",
                        "label": "15600"
                    },
                    {
                        "from": "NC",
                        "to": "VT",
                        "label": "18400"
                    },
                    {
                        "from": "NC",
                        "to": "NH",
                        "label": "16900"
                    },
                    {
                        "from": "NC",
                        "to": "MA",
                        "label": "16590"
                    },
                    {
                        "from": "NC",
                        "to": "CT",
                        "label": "18340"
                    },
                    {
                        "from": "NC",
                        "to": "ME",
                        "label": "14680"
                    },
                    {
                        "from": "NC",
                        "to": "NY",
                        "label": "23600"
                    },
                    {
                        "from": "NC",
                        "to": "TN",
                        "label": "19800"
                    },
                    {
                        "from": "NC",
                        "to": "AL",
                        "label": "13400"
                    },
                    {
                        "from": "NC",
                        "to": "VA",
                        "label": "17260"
                    },
                    {
                        "from": "NC",
                        "to": "GA",
                        "label": "17400"
                    },
                    {
                        "from": "NC",
                        "to": "SC",
                        "label": "16230"
                    },
                    {
                        "from": "NC",
                        "to": "FL",
                        "label": "21200"
                    }
                ]
            }                          
        }
    }).render();
});});
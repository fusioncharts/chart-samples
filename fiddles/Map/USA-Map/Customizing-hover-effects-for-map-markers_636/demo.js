$(window).load(function(){FusionCharts.ready(function () {
    var officeLoc = new FusionCharts({
        type: 'usa',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "map": {
                "theme": "fint",
                "useHoverColor": "0",
                "caption": "Harry's SuperMart Office Locations",
                "subcaption": "Head Office and Zonal Offices",                
                "fillColor": "#b4ddb0",
                "borderColor": "#ffffff",
                "showCanvasBorder": "0",
                "showShadow": "0",
                "markerRadius": "10",
                "markerBorderColor": "#000000",
                //Used to enable marker hover effect                
                "showMarkerHoverEffect":"1",
                //Used to change marker fill color
                "markerFillColor": "#6baa01", 
                //Used to change marker border thickness on hover
                "markerBorderThickness": "2",
                //Used to change marker fill color on hover                
                "markerFillHoverColor": "#4ae5e7",
                //Used to change marker border color on hover 
                "markerBorderHoverColor": "#333333",
                //Used to change marker border thickness on hover 
                "markerBorderHoverThickness": "4"
            },                
            "markers": {
                "application": [
                    {
                        "id": "west-zone-ho-1",
                        "shapeId": "zo-shape"
                    },
                    {
                        "id": "west-zone-ho-2",
                        "shapeId": "zo-shape"
                    },
                    {
                        "id": "mid-west-zone-ho",
                        "shapeId": "hdo-shape"
                    },
                    {
                        "id": "north-east-ho",
                        "shapeId": "zo-shape"
                    },
                    {
                        "id": "south-ho",
                        "shapeId": "zo-shape"
                    }
                ],
                "definition": [
                    {
                        "id": "west-zone-ho-1",
                        "x": "100",
                        "y": "250",
                        "tooltext": "<b>Zonal office, California</b>{br}Address: 41216 N. Fern Avenue Lancaster CA 93534 {br}Phone: 661-723-1538{br}e-mail: california_zo@harryssupermart.com"
                    },
                    {
                        "id": "west-zone-ho-2",
                        "x": "150",
                        "y": "40",
                        "tooltext": "<b>Zonal office, Montana</b>{br}Address: 2719 US HWY 2 W Havre, MT 59501{br}Phone: 406-265-1923 {br}e-mail: havre_zo@harryssupermart.com"
                    },
                    {
                        "id": "mid-west-zone-ho",
                        "x": "450",
                        "y": "200",
                        "tooltext": "<b>Head Office, Illinois</b>{br}Address: 1160 Vachel Lindsay Drive Springfield, IL 62703{br}Phone: (217)-753-6800 {br}e-mail: springfield_ho@harryssupermart.com"
                    },
                    {
                        "id": "north-east-ho",
                         "x": "625",
                        "y": "105",
                        "labelPos": "left",
                        "Color": "#00ffff",
                        "tooltext": "<b>Zonal Office, New York</b>{br}Address: 1581 Ford St extension Ogdensburg, NY 13669{br}Phone: (315) 392-2121{br}e-mail: newyork_zo@harryssupermart.com"
                    },
                    {
                        "id": "south-ho",
                        "x": "310",
                        "y": "310",
                        "tooltext": "<b>Zonal office, Texas</b>{br}Address: 210 W Loop 306 San Angelo, TX{br}Phone: 325-123-5703{br}e-mail: texas_zo@harryssupermart.com"
                    }
                ],
                "shapes": [
                    {
                        "id": "hdo-shape",
                        "type": "circle",
                        "fillcolor": "#f6bc33"
                    },
                    {
                        "id": "zo-shape",
                        "type": "circle",
                        "fillcolor": "#6da81e"
                    }
                ]
            },
            "data": [
                { "id": "HI" },
                { "id": "WA" }, 
                { "id": "OR" },
                { "id": "CA" },
                { "id": "NV" },
                { "id": "AK" },
                { "id": "AZ" },
                { "id": "NM" },
                { "id": "UT" },
                { "id": "ID" },
                { "id": "MT" },
                { "id": "WY" },
                { "id": "CO" },
                { "id": "ND" },
                { "id": "SD" },
                { "id": "NE" },
                { "id": "KS" },
                { "id": "MN" },
                { "id": "IA" },
                { "id": "MO" },
                { "id": "WI" },
                { "id": "NJ" },
                { "id": "NY" },
                { "id": "CT" },
                { "id": "MA" },
                { "id": "NH" },
                { "id": "VT" },
                {
                    "id": "IL",
                    "displayValue": " "
                },
                { "id": "MI" },
                {
                    "id": "IN",
                    "displayValue": " "
                },
                {
                    "id": "OH",
                    "displayValue": " "
                },
                {
                    "id": "PA",
                    "displayValue": " "
                },
                {
                    "id": "ME",
                    "displayValue": " "
                },
                {
                    "id": "OK",
                    "displayValue": " "
                },
                {
                    "id": "AR",
                    "displayValue": " "
                }
            ]
        }
    });    

    officeLoc.render();
});});
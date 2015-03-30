$(window).load(function(){FusionCharts.ready(function() {
    var salesByState = new FusionCharts({
        type: 'usa',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Annual Sales by State",
                "subcaption": "Last year",
                "entityFillHoverColor": "#cccccc",                
                "numberPrefix": "$",
                "exportEnabled": "1",
                "showLabels": "1",
                "theme": "fint"
            },
            "colorrange": {
                "minvalue": "920000",
                "startlabel": "Low",
                "endlabel": "High",
                "code": "#e44a00",
                "gradient": "1",
                "color": [
                    {
                        "maxvalue": "56580000",
                        "displayvalue": "Average",
                        "code": "#f8bd19"
                    },
                    {
                        "maxvalue": "97400000",
                        "code": "#6baa01"
                    }
                ]
            },
            "data": [
                {
                    "id": "HI",
                    "value": "3189000"
                },
                {
                    "id": "DC",
                    "value": "2879000"
                },
                {
                    "id": "MD",
                    "value": "33592000"
                },
                {
                    "id": "DE",
                    "value": "4607000"
                },
                {
                    "id": "RI",
                    "value": "4890000"
                },
                {
                    "id": "WA",
                    "value": "34927000"
                },
                {
                    "id": "OR",
                    "value": "65798000"
                },
                {
                    "id": "CA",
                    "value": "61861000"
                },
                {
                    "id": "AK",
                    "value": "58911000"
                },
                {
                    "id": "ID",
                    "value": "42662000"
                },
                {
                    "id": "NV",
                    "value": "78041000"
                },
                {
                    "id": "AZ",
                    "value": "41558000"
                },
                {
                    "id": "MT",
                    "value": "62942000"
                },
                {
                    "id": "WY",
                    "value": "78834000"
                },
                {
                    "id": "UT",
                    "value": "50512000"
                },
                {
                    "id": "CO",
                    "value": "73026000"
                },
                {
                    "id": "NM",
                    "value": "78865000"
                },
                {
                    "id": "ND",
                    "value": "50554000"
                },
                {
                    "id": "SD",
                    "value": "35922000"
                },
                {
                    "id": "NE",
                    "value": "43736000"
                },
                {
                    "id": "KS",
                    "value": "32681000"
                },
                {
                    "id": "OK",
                    "value": "79038000"
                },
                {
                    "id": "TX",
                     "value": "97344000"                                        
                },
                {
                    "id": "MN",
                    "value": "43485000"
                },
                {
                    "id": "IA",
                    "value": "46515000"
                },
                {
                    "id": "MO",
                    "value": "63715000"
                },
                {
                    "id": "AR",
                    "value": "34497000"
                },
                {
                    "id": "LA",
                    "value": "70706000"
                },
                {
                    "id": "WI",
                    "value": "42382000"
                },
                {
                    "id": "IL",
                    "value": "73202000"                                        
                },
                {
                    "id": "KY",
                    "value": "79118000"
                },
                {
                    "id": "TN",
                    "value": "44657000"
                },
                {
                    "id": "MS",
                    "value": "66205000"
                },
                {
                    "id": "AL",
                    "value": "75873000"
                },
                {
                    "id": "GA",
                    "value": "76895000"
                },
                {
                    "id": "MI",
                    "value": "67695000"
                },
                {
                    "id": "IN",
                    "value": "920000"
                },
                {
                    "id": "OH",
                    "value": "32960000"
                },
                {
                    "id": "PA",
                    "value": "54346000"
                },
                {
                    "id": "NY",
                    "value": "42828000"
                },
                {
                    "id": "VT",
                    "value": "77411000"
                },
                {
                    "id": "NH",
                    "value": "51403000"
                },
                {
                    "id": "ME",
                    "value": "64636000"
                },
                {
                    "id": "MA",
                    "value": "51767000"
                },
                {
                    "id": "CT",
                    "value": "57353000"
                },
                {
                    "id": "NJ",
                    "value": "80788000"
                },
                {
                    "id": "WV",
                    "value": "95890000"
                },
                {
                    "id": "VA",
                    "value": "83140000"
                },
                {
                    "id": "NC",
                    "value": "75425000"
                },
                {
                    "id": "SC",
                    "value": "88234000"
                },
                {
                    "id": "FL",
                    "value": "88234000"
                }
            ]
        }
    }).render();

});});
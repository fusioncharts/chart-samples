$(window).load(function(){FusionCharts.ready(function() {
    var salesByState = new FusionCharts({
        type: 'usa',
        renderAt: 'chart-container',
        width: '700',
        height: '500',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Top 10 Revenue earning US states",
                "subcaption": "Last Year",
                "entityFillColor": "#cccccc",
                "entityFillHoverColor": "#666666",
                "numberPrefix": "$",
                "showLabels": "1",
                "useSNameInLabels": "0",
                "theme": "fint"
            },
            "colorrange": {
                "minvalue": "78834000",
                "startlabel": "Low",
                "endlabel": "High",
                "code": "#e44a00",
                "gradient": "1",
                "color": [
                    {
                        "maxvalue": "84948500",
                        "displayvalue": "Average",
                        "code": "#f8bd19"
                    },
                    {
                        "maxvalue": "97344000",
                        "code": "#6baa01"
                    }
                ]
            },
            "data": [
                {
                    "id": "HI",
                    "value": "3189000",
                    "showLabel": "0"
                },
                {
                    "id": "DC",
                    "value": "2879000",
                    "showLabel": "0"
                },
                {
                    "id": "MD",
                    "value": "33592000",
                    "showLabel": "0"
                },
                {
                    "id": "DE",
                    "value": "4607000",
                    "showLabel": "0"
                },
                {
                    "id": "RI",
                    "value": "4890000",
                    "showLabel": "0"
                },
                {
                    "id": "WA",
                    "value": "34927000",
                    "showLabel": "0"
                },
                {
                    "id": "OR",
                    "value": "65798000",
                    "showLabel": "0"
                },
                {
                    "id": "CA",
                    "value": "61861000",
                    "showLabel": "0"
                },
                {
                    "id": "AK",
                    "value": "58911000",
                    "showLabel": "0"
                },
                {
                    "id": "ID",
                    "value": "42662000",
                    "showLabel": "0"
                },
                {
                    "id": "NV",
                    "value": "78041000",
                    "showLabel": "0"
                },
                {
                    "id": "AZ",
                    "value": "41558000",
                    "showLabel": "0"
                },
                {
                    "id": "MT",
                    "value": "62942000",
                    "showLabel": "0"
                },
                {
                    "id": "WY",
                    "value": "78834000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #10, $dataValue"
                },
                {
                    "id": "UT",
                    "value": "50512000",
                    "showLabel": "0"
                },
                {
                    "id": "CO",
                    "value": "73026000",
                    "showLabel": "0"
                },
                {
                    "id": "NM",
                    "value": "78865000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #9, $dataValue"
                },
                {
                    "id": "ND",
                    "value": "50554000",
                    "showLabel": "0"
                },
                {
                    "id": "SD",
                    "value": "35922000",
                    "showLabel": "0"
                },
                {
                    "id": "NE",
                    "value": "43736000",
                    "showLabel": "0"
                },
                {
                    "id": "KS",
                    "value": "32681000",
                    "showLabel": "0"
                },
                {
                    "id": "OK",
                    "value": "79038000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #8, $dataValue"
                },
                {
                    "id": "TX",
                    "value": "97344000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #1, $dataValue"
                },
                {
                    "id": "MN",
                    "value": "43485000",
                    "showLabel": "0"
                },
                {
                    "id": "IA",
                    "value": "46515000",
                    "showLabel": "0"
                },
                {
                    "id": "MO",
                    "value": "63715000",
                    "showLabel": "0"
                },
                {
                    "id": "AR",
                    "value": "34497000",
                    "showLabel": "0"
                },
                {
                    "id": "LA",
                    "value": "70706000",
                    "showLabel": "0"
                },
                {
                    "id": "WI",
                    "value": "42382000",
                    "showLabel": "0"
                },
                {
                    "id": "IL",
                    "value": "73202000",
                    "showLabel": "0"                                        
                },
                {
                    "id": "KY",
                    "value": "79118000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #7, $dataValue"
                },
                {
                    "id": "TN",
                    "value": "44657000",
                    "showLabel": "0"
                },
                {
                    "id": "MS",
                    "value": "66205000",
                    "showLabel": "0"
                },
                {
                    "id": "AL",
                    "value": "75873000",
                    "showLabel": "0"
                },
                {
                    "id": "GA",
                    "value": "76895000",
                    "showLabel": "0"
                },
                {
                    "id": "MI",
                    "value": "67695000",
                    "showLabel": "0"
                },
                {
                    "id": "IN",
                    "value": "920000",
                    "showLabel": "0"
                },
                {
                    "id": "OH",
                    "value": "32960000",
                    "showLabel": "0"
                },
                {
                    "id": "PA",
                    "value": "54346000",
                    "showLabel": "0"
                },
                {
                    "id": "NY",
                    "value": "42828000",
                    "showLabel": "0"
                },
                {
                    "id": "VT",
                    "value": "77411000",
                    "showLabel": "0"
                },
                {
                    "id": "NH",
                    "value": "51403000",
                    "showLabel": "0"
                },
                {
                    "id": "ME",
                    "value": "64636000",
                    "showLabel": "0"
                },
                {
                    "id": "MA",
                    "value": "51767000",
                    "showLabel": "0"
                },
                {
                    "id": "CT",
                    "value": "57353000",
                    "showLabel": "0"
                },
                {
                    "id": "NJ",
                    "value": "80788000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #6, $dataValue"
                },
                {
                    "id": "WV",
                    "value": "95890000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #2, $dataValue"
                },
                {
                    "id": "VA",
                    "value": "83140000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #5, $dataValue"
                },
                {
                    "id": "NC",
                    "value": "75425000",
                    "showLabel": "0"
                },
                {
                    "id": "SC",
                    "value": "88234000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #4, $dataValue"
                },
                {
                    "id": "FL",
                    "value": "88234000",
                    "showLabel": "1", 
                    "alpha": "100",
                    "fontBold": "1",
                    "tooltext": "Rank #3, $dataValue"
                }
            ]
        }
    }).render();
    
});});
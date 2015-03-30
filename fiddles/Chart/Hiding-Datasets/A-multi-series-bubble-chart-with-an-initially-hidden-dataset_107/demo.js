$(window).load(function(){FusionCharts.ready(function () {
    var investmentChart = new FusionCharts({
        "type": "bubble",
        "renderAt": "chart-container",
        "width": "600",
        "height": "350",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "Market Investments - Treasury",
                "subcaption": "Harry's Supermart",
                "xAxisMinValue": "10",
                "xAxisMaxValue": "70",
                "yAxisMinValue": "0",
                "yAxisMaxValue": "36",
                "showPlotBorder": "0",
                "plotFillAlpha": "70",
                "znumberPrefix": "$",
                "plotFillHoverColor": "#cccccc",
                "xAxisName": "% Value Appreciation",
                "yAxisName": "Investment Tenure(In months)",
                "numDivlines": "2",
                "showValues": "1",
                "showTrendlineLabels": "0",
                "theme": "fint",
                "plottooltext": "<b>$seriesName</b>{br}Tenure: $yvalue {br} % Appreciation: $xValue {br} Investment: $$zValue"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "10%",
                            "x": "10",
                            "showverticalline": "1"
                        },
                        {
                            "label": "20%",
                            "x": "20",
                            "showverticalline": "1"
                        },
                        {
                            "label": "30%",
                            "x": "30",
                            "showverticalline": "1"
                        },
                        {
                            "label": "40%",
                            "x": "40",
                            "showverticalline": "1"
                        },
                        {
                            "label": "50%",
                            "x": "50",
                            "showverticalline": "1"
                        },
                        {
                            "label": "60%",
                            "x": "60",
                            "showverticalline": "1"
                        },
                        {
                            "label": "70%",
                            "x": "70",
                            "showverticalline": "1"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "color": "#008ee4",
                    "seriesName": "Equities",
                    "data": [
                        {
                            "x": "50",
                            "y": "12",
                            "z": "865670",
                            "name": "Vanguard Materials(VAW)"
                        },
                        {
                            "x": "20",
                            "y": "5",
                            "z": "685640",
                            "name": "Vanguard Russell"
                        },
                        {
                            "x": "50",
                            "y": "30",
                            "z": "429763",
                            "name": "iShares U.S. Energy ETF"
                        }
                    ]
                },
                {
                    "seriesName": "Mutual Funds",
                    "initiallyhidden": "1",
                    "data": [
                        {
                            "x": "34",
                            "y": "15",
                            "z": "506980",
                            "name": "Wasatch(WMCVX)"
                        },
                        {
                            "x": "23",
                            "y": "11",
                            "z": "633421",
                            "name": "Brown Capital(BCSIX)"
                        },
                        {
                            "x": "12",
                            "y": "26",
                            "z": "619856",
                            "name": "T. Rowe Price(PRMTX)"
                        }
                    ]
                }
            ],
            "trendlines": [
                {
                    "line": [
                        {
                            "startValue": "36",
                            "endValue": "24",
                            "isTrendZone": "1",
                            "color": "#aaaaaa",
                            "alpha": "14"
                        },
                        {
                            "startValue": "12",
                            "endValue": "24",
                            "isTrendZone": "1",
                            "color": "#aaaaaa",
                            "alpha": "7"
                        }
                    ]
                }
            ]
        }
    }).render();
});});
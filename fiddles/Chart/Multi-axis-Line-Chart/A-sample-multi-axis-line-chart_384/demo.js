$(window).load(function(){FusionCharts.ready(function () {
    var hourlySalesChart = new FusionCharts({
        type: 'multiaxisline',
        renderAt: 'chart-container',
        width: '600',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Revenue Analysis",
                "subcaption": "Last 12 weeks",
                "xaxisname": "Week of Year",
                "showvalues": "0",
                "theme" : "fint"
            },
            "categories": [
                {
                    "category": [
                        { "label": "1" },
                        { "label": "2" }, 
                        { "label": "3" }, 
                        { "label": "4" }, 
                        { "label": "5" }, 
                        { "label": "6" }, 
                        { "label": "7" }, 
                        { "label": "8" }, 
                        { "label": "9" }, 
                        { "label": "10" }, 
                        { "label": "11" }, 
                        { "label": "12" }
                    ]
                }
            ],
            "axis": [
                {
                    "title": "Revenue",
                    "titlepos": "left",
                    "tickwidth": "10",
                    "numberPrefix": "$",
                    "divlineisdashed": "1",
                    "dataset": [
                        {
                            "seriesname": "Revenue",
                            "linethickness": "3",
                            "data": [
                                { "value": "137500" }, 
                                { "value": "124350" }, 
                                { "value": "156700" }, 
                                { "value": "131450" },
                                { "value": "208300" }, 
                                { "value": "219900" }, 
                                { "value": "227500" }, 
                                { "value": "254300" },
                                { "value": "155900" }, 
                                { "value": "105650" }, 
                                { "value": "120950" }, 
                                { "value": "127500" }
                            ]
                        }
                    ]
                }, {
                    "title": "Orders",
                    "axisonleft": "0",
                    "titlepos": "right",
                    "numdivlines": "8",
                    "tickwidth": "10",
                    "divlineisdashed": "1",
                    "dataset": [
                        {
                            "seriesname": "Orders",
                            "data": [
                                { "value": "22567" }, 
                                { "value": "21348" }, 
                                { "value": "24846" }, 
                                { "value": "19237" }, 
                                { "value": "20672" }, 
                                { "value": "23403" }, 
                                { "value": "30278" }, 
                                { "value": "26719" },
                                { "value": "21940" }, 
                                { "value": "24396" }, 
                                { "value": "22340" }, 
                                { "value": "25439" }
                            ]
                        }
                    ]
                }, 
                {
                    "title": "Footfalls",
                    "titlepos": "RIGHT",
                    "axisonleft": "0",
                    "numdivlines": "5",
                    "tickwidth": "10",
                    "numberSuffix": "",
                    "divlineisdashed": "1",
                    "dataset": [
                        {
                            "seriesname": "Footfalls",
                            "data": [
                                { "value": "68473" }, 
                                { "value": "57934" }, 
                                { "value": "78925" }, 
                                { "value": "69213" }, 
                                { "value": "74892" }, 
                                { "value": "81123" }, 
                                { "value": "90086" }, 
                                { "value": "91174" }, 
                                { "value": "68934" }, 
                                { "value": "80934" }, 
                                { "value": "73634" }, 
                                { "value": "84453" }
                            ]
                        }
                    ]
                }
            ]
        }
    }).render();
    
});});
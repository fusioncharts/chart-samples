$(window).load(function(){FusionCharts.ready(function () {
    var profitChart = new FusionCharts({
        type: 'scatter',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '500',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Old Stock Clearance",
                "subcaption": "Price Vs Profit",
                "yaxisname": "Price (In USD)",
                "xaxisname": "Profit (In %)",
                "xaxismaxvalue": "40",
                "xaxisminvalue": "-20",
                "yaxismaxvalue": "1000",
                "xnumbersuffix": "%",
                "ynumberprefix": "$",
                
                //Vertical zero plane          
                "showVZeroPlane": "1",
                "vZeroPlaneColor": "#cc3300",
                "vZeroPlaneThickness": "3",
                "vZeroPlaneAlpha": "90",
                
                //Theme
                "theme" : "fint"
            },
            "dataset": [
                {
                    "drawline": "0",
                    "seriesname": "Televisions",
                    "color": "#6baa01",
                    "anchorsides": "3",
                    "anchorradius": "4",
                    "anchorbgcolor": "#6baa01",
                    "anchorbordercolor": "#6baa01",
                    "data": [
                        {
                            "id": "TV_1",
                            "x": "-9.89",
                            "y": "642"
                        }, 
                        {
                            "id": "TV_2",
                            "x": "21.59",
                            "y": "947"
                        }, 
                        {
                            "id": "TV_3",
                            "x": "-8.8",
                            "y": "433"
                        }, 
                        {
                            "id": "TV_4",
                            "x": "-10.88",
                            "y": "750"
                        }, 
                        {
                            "id": "TV_5",
                            "x": "5.43",
                            "y": "593"
                        }, 
                        {
                            "id": "TV_6",
                            "x": "23.76",
                            "y": "426"
                        }, 
                        {
                            "id": "TV_7",
                            "x": "17.74",
                            "y": "575"
                        }, {
                            "id": "TV_8",
                            "x": "8.71",
                            "y": "962"
                        }, 
                        {
                            "id": "TV_9",
                            "x": "-1.56",
                            "y": "205"
                        }, 
                        {
                            "id": "TV_10",
                            "x": "16.42",
                            "y": "937"
                        }, 
                        {
                            "id": "TV_11",
                            "x": "10.42",
                            "y": "689"
                        }, 
                        {
                            "id": "TV_12",
                            "x": "-1.19",
                            "y": "425"
                        }, 
                        {
                            "id": "TV_13",
                            "x": "-12.58",
                            "y": "804"
                        }, 
                        {
                            "id": "TV_14",
                            "x": "25.49",
                            "y": "700"
                        }, 
                        {
                            "id": "TV_15",
                            "x": "24.27",
                            "y": "302"
                        }, 
                        {
                            "id": "TV_16",
                            "x": "19.07",
                            "y": "276"
                        }, 
                        {
                            "id": "TV_17",
                            "x": "16.16",
                            "y": "913"
                        }, 
                        {
                            "id": "TV_18",
                            "x": "4.37",
                            "y": "744"
                        }, 
                        {
                            "id": "TV_19",
                            "x": "-2.15",
                            "y": "939"
                        }, 
                        {
                            "id": "TV_20",
                            "x": "15.67",
                            "y": "569"
                        }, {
                            "id": "TV_21",
                            "x": "10.94",
                            "y": "257"
                        }, 
                        {
                            "id": "TV_22",
                            "x": "24.97",
                            "y": "893"
                        }, 
                        {
                            "id": "TV_23",
                            "x": "28.15",
                            "y": "523"
                        }, 
                        {
                            "id": "TV_24",
                            "x": "-1.76",
                            "y": "930"
                        }, 
                        {
                            "id": "TV_25",
                            "x": "11.53",
                            "y": "564"
                        }, 
                        {
                            "id": "TV_26",
                            "x": "-3.31",
                            "y": "571"
                        }, 
                        {
                            "id": "TV_27",
                            "x": "9.73",
                            "y": "582"
                        },
                        {
                            "id": "TV_28",
                            "x": "4.96",
                            "y": "582"
                        }, 
                        {
                            "id": "TV_29",
                            "x": "-7.77",
                            "y": "756"
                        }, 
                        {
                            "id": "TV_30",
                            "x": "-11.56",
                            "y": "404"
                        }
                    ]
                }, 
                {
                    "seriesname": "Cell Phones",
                    "color": "#f8bd19",
                    "anchorsides": "4",
                    "anchorradius": "4",
                    "anchorbgcolor": "#f8bd19",
                    "anchorbordercolor": "#f8bd19",
                    "data": [
                        {
                            "id": "Mob_1",
                            "x": "-2.79",
                            "y": "681"
                        }, 
                        {
                            "id": "Mob_2",
                            "x": "0.74",
                            "y": "214"
                        }, 
                        {
                            "id": "Mob_3",
                            "x": "16.82",
                            "y": "215"
                        }, 
                        {
                            "id": "Mob_4",
                            "x": "-13.31",
                            "y": "530"
                        }, 
                        {
                            "id": "Mob_5",
                            "x": "17.96",
                            "y": "973"
                        }, 
                        {
                            "id": "Mob_6",
                            "x": "12.92",
                            "y": "217"
                        }, 
                        {
                            "id": "Mob_7",
                            "x": "1.35",
                            "y": "369"
                        }, 
                        {
                            "id": "Mob_8",
                            "x": "28.21",
                            "y": "304"
                        }, 
                        {
                            "id": "Mob_9",
                            "x": "17.95",
                            "y": "495"
                        }, 
                        {
                            "id": "Mob_10",
                            "x": "26.99",
                            "y": "795"
                        }, 
                        {
                            "id": "Mob_11",
                            "x": "-7.85",
                            "y": "315"
                        }, 
                        {
                            "id": "Mob_12",
                            "x": "10.46",
                            "y": "866"
                        }, 
                        {
                            "id": "Mob_13",
                            "x": "20.09",
                            "y": "671"
                        }, 
                        {
                            "id": "Mob_14",
                            "x": "4.99",
                            "y": "670"
                        }, 
                        {
                            "id": "Mob_15",
                            "x": "3.88",
                            "y": "479"
                        }, 
                        {
                            "id": "Mob_16",
                            "x": "19.22",
                            "y": "737"
                        }, 
                        {
                            "id": "Mob_17",
                            "x": "29.81",
                            "y": "928"
                        }, 
                        {
                            "id": "Mob_18",
                            "x": "20.44",
                            "y": "569"
                        }, 
                        {
                            "id": "Mob_19",
                            "x": "22.67",
                            "y": "885"
                        }, 
                        {
                            "id": "Mob_20",
                            "x": "28.76",
                            "y": "444"
                        }, 
                        {
                            "id": "Mob_21",
                            "x": "22.98",
                            "y": "288"
                        }, 
                        {
                            "id": "Mob_22",
                            "x": "-7.61",
                            "y": "817"
                        }, 
                        {
                            "id": "Mob_23",
                            "x": "17.2",
                            "y": "357"
                        }, 
                        {
                            "id": "Mob_24",
                            "x": "-12.12",
                            "y": "913"
                        }, 
                        {
                            "id": "Mob_25",
                            "x": "-0.98",
                            "y": "579"
                        }, 
                        {
                            "id": "Mob_26",
                            "x": "-5.64",
                            "y": "537"
                        }, 
                        {
                            "id": "Mob_27",
                            "x": "23.62",
                            "y": "522"
                        }, 
                        {
                            "id": "Mob_28",
                            "x": "6.84",
                            "y": "267"
                        }, 
                        {
                            "id": "Mob_29",
                            "x": "-12.15",
                            "y": "825"
                        }, 
                        {
                            "id": "Mob_30",
                            "x": "-11.62",
                            "y": "857"
                        }, 
                        {
                            "id": "Mob_31",
                            "x": "9.58",
                            "y": "204"
                        }, 
                        {
                            "id": "Mob_32",
                            "x": "-11.57",
                            "y": "232"
                        }, 
                        {
                            "id": "Mob_33",
                            "x": "-14.13",
                            "y": "450"
                        }, 
                        {
                            "id": "Mob_34",
                            "x": "5.99",
                            "y": "900"
                        }, 
                        {
                            "id": "Mob_35",
                            "x": "9.24",
                            "y": "228"
                        }
                    ]
                }
            ]
        }
    });
    
    profitChart.render();
    
});});
$(window).load(function(){    FusionCharts.ready(function () {
        var revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            id: 'myChart',
            width: '500',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Quarterly Revenue ",
                    "xAxisName": "Quarter",
                    "yAxisName": "Amount (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint"
                },
                "data": [{
                    "label": "Q1",
                     "value": "1950000"
                }, {
                    "label": "Q2",
                    "value": "1450000"
                }, {
                    "label": "Q3",
                    "value": "1730000"
                }, {
                    "label": "Q4",
                    "value": "2120000"
                }],
            },
            events: {
                //dataPlotRollOver event is raised whenever you hover over a data plot (column, anchor of line or area, pie etc.)
                "dataPlotRollOver": function (evtObj, argObj) {
                    var dataDiv = document.getElementById('data'),
                        headerDiv = document.getElementById('header'),
                        //Get data for the column that was hovered over
                        catLabel = argObj && argObj.categoryLabel,
                        val = argObj && argObj.value;
                    if (catLabel && val) {
                        headerDiv.innerHTML = "Revenue in " + catLabel
                        dataDiv.innerHTML = "$" + FusionCharts.formatNumber(val);
                    }
                },
                "dataPlotRollOut": function (evtObj, argObj) {
                    var dataDiv = document.getElementById('data'),
                        headerDiv = document.getElementById('header');
    
                    headerDiv.innerHTML = "Total Revenue";
                    dataDiv.innerHTML = "$7.25M";
                }
            }
        }).render();
    });});
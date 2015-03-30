$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            width: "500",
            height: "300",
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Monthly revenue",
                    "subCaption": "Last year",
                    "xAxisName": "Month",
                    "yAxisName": "Amount (In USD)",
                    "numberPrefix": "$",
                    // Enable export
                    "exportEnabled": "1",
                    // Hide export menu item
                    "exportShowMenuItem": "0",
                    "theme": "fint"
                },

                "data": [
                    {
                        "label": "Jan",
                        "value": "420000"
                    },
                    {
                        "label": "Feb",
                        "value": "810000"
                    },
                    {
                        "label": "Mar",
                        "value": "720000"
                    },
                    {
                        "label": "Apr",
                        "value": "550000"
                    },
                    {
                        "label": "May",
                        "value": "910000"
                    },
                    {
                        "label": "Jun",
                        "value": "510000"
                    },
                    {
                        "label": "Jul",
                        "value": "680000"
                    },
                    {
                        "label": "Aug",
                        "value": "620000"
                    },
                    {
                        "label": "Sep",
                        "value": "610000"
                    },
                    {
                        "label": "Oct",
                        "value": "490000"
                    },
                    {
                        "label": "Nov",
                        "value": "900000"
                    },
                    {
                        "label": "Dec",
                        "value": "730000"
                    }
                ]
            },
            "events": {
               "renderComplete": function (e, a) {
                   
                   // Cross-browser event listening
                   var addListener = function (elem, evt, fn) {
                       if (elem && elem.addEventListener) {
                           elem.addEventListener(evt, fn);
                       }
                       else if (elem && elem.attachEvent) {
                           elem.attachEvent("on" + evt, fn);
                       } 
                       else {
                           elem["on" + evt] = fn;
                       }
                   };
                   
                   // Export chart method
                   var exportFC = function () {
                       var types = { 
                           "exportpdf": "pdf",
                           "exportsvg": "svg",
                           "exportpng": "png"
                       };
                       if (e && e.sender && e.sender.exportChart) {
                            e.sender.exportChart({
                               exportFileName: "FC_sample_export",
                               exportFormat: types[this.id]
                           });
                       }
                   };
                   
                   // Attach events
                   addListener(document.getElementById("exportpdf"), "click", exportFC);
                   addListener(document.getElementById("exportsvg"), "click", exportFC);
                   addListener(document.getElementById("exportpng"), "click", exportFC);
               }
            }
        });

    revenueChart.render();

});});
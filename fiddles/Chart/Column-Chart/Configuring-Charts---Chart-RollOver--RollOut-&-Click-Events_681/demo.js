$(window).load(function(){FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        id: 'chartId',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Monthly Revenue",
                "subCaption": "For last year",
                "xAxisName": "Month",
                "yAxisName": "Amount (In USD)",
                "numberPrefix": "$",
                "showToolTip":"0",
                "theme" : "fint"
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
                }, {
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
        "events":{
            //Listen to chartrolloverevent to show total revenue text block
            "chartrollover" : function(evtObj, argObj){
                var indctrDiv = document.getElementById("indicatorDiv");
                //For the sake of example, here, we're using a static value to show total. 
                //You can calculate the total dynamically by accessing chart's data and iterating through each item.
                indctrDiv.innerHTML = "<p>Total revenue for last year : $7.34M</p>";
                indctrDiv.style.display = "block";
                indctrDiv.style.backgroundColor = "#ffffff";                
            },
            
            //Listen to chartrollout to hide total revenue text  block
            "chartrollout" : function(evtObj, argObj){
                document.getElementById("indicatorDiv").style.display = "none";                
            },
            
            //On click of a column, show a custom message
            "chartclick" : function(evtObj, argObj){
                var indctrDiv = document.getElementById("indicatorDiv");
                indctrDiv.innerHTML = "You just <span style='color: red;'>clicked</span> the chart.<p> You can tap into this event and add custom behavior to your application.</p>";
                indctrDiv.style.display = "block";
                indctrDiv.style.backgroundColor = "#dddddd";                
            },
            
            //On rollover of a column, show revenue for that column
            "dataplotrollover" : function(evtObj, argObj){
                var indctrDiv = document.getElementById("indicatorDiv"),
                    label = argObj.categoryLabel,
                    plotvalue = argObj.dataValue,
                    value = evtObj.sender.formatNumber(plotvalue);
                indctrDiv.innerHTML = "<p>Total revenue for last year : $7.34M</p><p>Total revenue for "+label+" : "+value+"</p>";
                indctrDiv.style.display = "block";
                indctrDiv.style.backgroundColor = "#ffffff";                
            },
            
            //On rollout from a column, hide revenue from that column
             "dataplotrollout" : function(evtObj, argObj){
                var indctrDiv = document.getElementById("indicatorDiv");
                indctrDiv.innerHTML = "<p>Total revenue for last year : $7.34M</p>";
                indctrDiv.style.display = "block";
                indctrDiv.style.backgroundColor = "#ffffff";                
            }
        }
    });
    revenueChart.render();
});});
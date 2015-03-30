$(window).load(function(){FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Monthly Revenue",
                "subCaption": "For last year",
                "xAxisName": "Month",
                "yAxisName": "Amount",
                "numberPrefix": "$",
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
        events: {
            //Listen to chartrolloverevent to show total revenue text block
            "chartrollover" : function(evtObj, argObj){
                var indctrDiv = document.getElementById("indicatorDiv");
                //For the sake of example, here, we're using a static value to show total. 
                //You can calculate the total dynamically by accessing chart's data and iterating through each item.
                indctrDiv.innerHTML = "<p>Total revenue for last year : $7.34M<br>Roll over any column to see monthly sales.</p>";
                indctrDiv.style.display = "block";
                indctrDiv.style.backgroundColor = "#ffffff";                
            },
            
            //Listen to chartrollout to hide total revenue text  block
            "chartrollout" : function(evtObj, argObj){
                document.getElementById("indicatorDiv").style.display = "none";                
            }
        }
    }).render();

});});
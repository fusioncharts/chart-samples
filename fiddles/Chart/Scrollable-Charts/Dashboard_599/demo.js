$(window).load(function(){FusionCharts.ready(function () {
    var chartWidth = '550',
        chartHeight = '300',
        dataType = 'json';
        
        var salesRevChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'sales-chart-container',
            width: chartWidth,
            height: chartHeight,
            dataFormat: dataType,
            dataSource: {
                "chart":{
                    "caption":"Daily Revenue",
                    "subcaption":"Last 3 weeks",
                    "xaxisname":"Date",
                    "yaxisname":"Revenue (In USD)",
                    "numberprefix":"$",
                    "showvalues":"0",
                    "theme":"fint"
                },
                "data":[
                    {
                        "label":"14 May",
                        "value":"267111"
                    },
                    {
                        "label":"15 May",
                        "value":"217207"
                    },
                    {
                        "label":"16 May",
                        "value":"185836"
                    },
                    {
                        "label":"17 May",
                        "value":"251074"
                    },
                    {
                        "label":"18 May",
                        "value":"273374"
                    },
                    {
                        "label":"19 May",
                        "value":"215724"
                    },
                    {
                        "label":"20 May",
                        "value":"227219"
                    },
                    {
                        "label":"21 May",
                        "value":"268160"
                    },
                    {
                        "label":"22 May",
                        "value":"239446"
                    },
                    {
                        "label":"23 May",
                        "value":"297084"
                    },
                    {
                        "label":"24 May",
                        "value":'204399'
                    },
                    {
                        "label":"25 May",
                        "value":"236195"
                    },
                    {
                        "label":"26 May",
                        "value":"302120"
                    },
                    {
                        "label":"27 May",
                        "value":"282909"
                    },
                    {
                        "label":"28 May",
                        "value":"272096"
                    },
                    {
                        "label":"29 May",
                        "value":"241639"
                    },
                    {
                        "label":"30 May",
                        "value":"189526"
                    },
                    {
                        "label":"31 May",
                        "value":"248034"
                    },
                    {
                        "label":"1 Jun",
                        "value":"266247"
                    },
                    {
                        "label":"2 Jun",
                        "value":"212719"
                    },
                    {
                        "label":"Yesterday",
                        "value":"264416"
                    }
                ]
        }        
    }).render();
    
    var dailyTransChart = new FusionCharts({
            type: 'area2d',
            renderAt: 'trans-chart-container',
            width: chartWidth,
            height: chartHeight,
            dataFormat: dataType,
            dataSource: {
                "chart":{
                    "caption":"Daily Transactions",
                    "subcaption":"Last 3 weeks",
                    "xaxisname":"Date",
                    "yaxisname":"No. of Transactions",
                    "showvalues":"0",
                    "theme":"fint"
                },		
                "data":[
                    {
                        "label":"14 May",
                        "value":"1464"
                    },
                        {
                        "label":"15 May",
                        "value":"1062"
                    },
                        {
                        "label":"16 May",
                        "value":"1014"
                    },
                        {
                        "label":"17 May",
                        "value":"1294"
                    },
                        {
                        "label":"18 May",
                        "value":"1382"
                    },
                        {
                        "label":"19 May",
                        "value":"1085"
                    },
                        {
                        "label":"20 May",
                        "value":"1150"
                    },
                        {
                        "label":"21 May",
                        "value":"1420"
                    },
                        {
                        "label":"22 May",
                        "value":"1228"
                    },
                        {
                        "label":"23 May",
                        "value":"1435"
                    },
                        {
                        "label":"24 May",
                        "value":"1051"
                    },
                        {
                        "label":"25 May",
                        "value":"1231"
                    },
                        {
                        "label":"26 May",
                        "value":"1509"
                    },
                        {
                        "label":"27 May",
                        "value":"1480"
                    },
                        {
                        "label":"28 May",
                        "value":"1461"
                    },
                        {
                        "label":"29 May",
                        "value":"1258"
                    },
                        {
                        "label":"30 May",
                        "value":"991"
                    },
                        {
                        "label":"31 May",
                        "value":"1275"
                    },
                        {
                        "label":"1 Jun",
                        "value":"1336"
                    },
                        {
                        "label":"2 Jun",
                        "value":"1097"
                    },
                    {
                        "label":"Yesterday",
                        "value":"1411"
                    }
                ]
            }
    }).render();
    
    var dailyFootfallChart = new FusionCharts({
            type: 'area2d',
            renderAt: 'footfall-chart-container',
            width: chartWidth,
            height: chartHeight,
            dataFormat: dataType,
            dataSource: {
                "chart":{
                    "caption":"Daily Footfalls",
                    "subcaption":"Last 3 weeks",
                    "xaxisname":"Date",
                    "yaxisname":"No. of Footfalls",
                    "showvalues":"0",
                    "theme":"fint"},
                    
                "data":[
                    {
                        "label":"14 May",
                        "value":"2154"
                    },			
                    {
                        "label":"15 May",
                        "value":"1742"
                    },			
                    {
                        "label":"16 May",
                        "value":"1845"
                    },			
                    {
                        "label":"17 May",
                        "value":"2490"
                    },			
                    {
                        "label":"18 May",
                        "value":"1975"
                    },			
                    {
                        "label":"19 May",
                        "value":"1840"
                    },		
                    {
                        "label":"20 May",
                        "value":"2054"
                    },			
                    {
                        "label":"21 May",
                        "value":"2153"
                    },			
                    {
                        "label":"22 May",
                        "value":"1755"
                    },			
                    {
                        "label":"23 May",
                        "value":"2080"
                    },			
                    {
                        "label":"24 May",
                        "value":"1617"
                    },			
                    {
                        "label":"25 May",
                        "value":"2053"
                    },			
                    {
                        "label":"26 May",
                        "value":"2435"
                    },			
                    {
                        "label":"27 May",
                        "value":"2177"
                    },			
                    {
                        "label":"28 May",
                        "value":"2214"
                    },			
                    {
                        "label":"29 May",
                        "value":"1998"
                    },		
                    {
                        "label":"30 May",
                        "value":"1871"
                    },			
                    {
                        "label":"31 May",
                        "value":"1822"
                    },			
                    {
                        "label":"1 Jun",
                        "value":"1909"
                    },			
                    {
                        "label":"2 Jun",
                        "value":"1689"
                    },			
                    {
                        "label":"Yesterday",
                        "value":"2076"
                    }
                ]
            }
    }).render();
    
    var dailyCSatChart = new FusionCharts({
            type: 'line',
            renderAt: 'cs-chart-container',
            width: chartWidth,
            height: chartHeight,
            dataFormat: dataType,
            dataSource: {
                "chart":{
                    "caption":"Daily Customer Satisfaction Trend for Last 3 weeks",
                    "subcaption":"On a scale of 0 to 5",
                    "xaxisname":"Date",
                    "yaxisname":"Customer Satisfaction Index",
                    "yaxismaxvalue":"5",
                    "showvalues":"0",
                    "theme":"fint"
                },		
                "data":[
                    {
                        "label":"14 May",
                        "value":"4.90"
                    },		
                    {
                        "label":"15 May",
                        "value":"4.05"
                    },		
                    {
                        "label":"16 May",
                        "value":"4.72"
                    },		
                    {
                        "label":"17 May",
                        "value":"4.56"
                    },		
                    {
                        "label":"18 May",
                        "value":"3.65"
                    },		
                    {
                        "label":"19 May",
                        "value":"3.77"
                    },		
                    {
                        "label":"20 May",
                        "value":"4.52"
                    },		
                    {
                        "label":"21 May",
                        "value":"4.13"
                    },		
                    {
                        "label":"22 May",
                        "value":"3.25"
                    },		
                    {
                        "label":"23 May",
                        "value":"3.38"
                    },		
                    {
                        "label":"24 May",
                        "value":"4.53"
                    },		
                    {
                        "label":"25 May",
                        "value":"4.24"
                    },		
                    {
                        "label":"26 May",
                        "value":"3.31"
                    },		
                    {
                        "label":"27 May",
                        "value":"3.25"
                    },		
                    {
                        "label":"28 May",
                        "value":"4.14"
                    },		
                    {
                        "label":"29 May",
                        "value":"4.82"
                    },		
                    {
                        "label":"30 May",
                        "value":"4.19"
                    },		
                    {
                        "label":"31 May",
                        "value":"4.94"
                    },		
                    {
                        "label":"1 Jun",
                        "value":"4.02"
                    },		
                    {
                        "label":"2 Jun",
                        "value":"4.80"
                    },		
                    {
                        "label":"Yesterday",
                        "value":"3.70"
                    }
                ]
            }
    }).render();

})});
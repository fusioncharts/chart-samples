$(window).load(function(){FusionCharts.ready(function () {
    var cpuGauge = new FusionCharts({
        type: 'hlineargauge',
        renderAt: 'chart-container',
        id: 'cpu-linear-gauge',
        width: '400',
        height: '170',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                "caption": "Server CPU Utilization",
                "lowerLimit": "0",
                "upperLimit": "100",
                "numberSuffix": "%",
                "chartBottomMargin": "20",  
                "valueFontSize": "11",  
                "valueFontBold": "0",
                "gaugeFillMix":"{light-10},{light-70},{dark-10}",
                "gaugeFillRatio":"40,20,40"                    
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "35",
                        "label": "Low",
                    }, 
                    {
                        "minValue": "35",
                        "maxValue": "70",
                        "label": "Moderate",
                    }, 
                    {
                        "minValue": "70",
                        "maxValue": "100",
                        "label": "High",
                    }
                ]
            },
            "pointers": {
                "pointer": [
                    {
                        "value": "75"
                    }
                ]
            }
        },
        "events": {
            "rendered" : function (evtObj, argObj){
                var intervalVar = setInterval(function () {
                    var prcnt = 65 + parseInt( Math.floor(Math.random() * 10), 10);
                    FusionCharts.items["cpu-linear-gauge"].feedData("value="+prcnt);
                }, 5000);
                
                //Format minutes, seconds by adding 0 prefix accordingly
                function formatTime(time){
                    (time < 10) ? (time = "0"+time) : (time = time);
                    return time;
                }
                function showData() {
                    //Retrieving the data
                    var dataVal =  FusionCharts.items["cpu-linear-gauge"].getData(1),
                        str = "",
                        currDate = new Date(),
                        label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds());
                    //Creating the table format
                    str += '<table border="1" cellpadding="1" cellspacing="0" bordercolor="#cccccc" width="100%">';
                    str += '    <tr>';
                    str += '        <td width="50%" class="fontBold valueFont">Current Time</td>';
                    str += '        <td width="50%" class="fontBold valueFont">Current Utilization</td>';
                    str += '    </tr>';
                     str += '    <tr>';
                    str += '        <td width="50%" class="valueFont" align="center">'+label+'</td>';
                    str += '        <td width="50%" class="valueFont" align="center">'+dataVal+'</td>';
                    str += '    </tr>';
                    //Preparing html string to create the table with data
                    
                    str += '</table>';
                    //Showing the table
                    document.getElementById("tableView").style.display = 'block';
                    document.getElementById("tableView").innerHTML = str;
                }
                
                document.getElementById("getdata_btn").addEventListener("click", showData);
                
            }
        }
    })
    .render();
});});
$(window).load(function(){FusionCharts.ready(function(){
    var fuelVolume = 110,
        fuelWidget = new FusionCharts({
            type: 'cylinder',
            dataFormat: 'json',
            id: 'fuelMeter',
            renderAt: 'chart-container',
            width: '200',
            height: '350',
            dataSource: {
                "chart": {
                    "theme": "fint",
                    "caption": "Diesel Level in Generator",
                    "subcaption": "Bakersfield Central",
                    "lowerLimit": "0",
                    "upperLimit": "120",
                    "lowerLimitDisplay": "Empty",
                    "upperLimitDisplay": "Full",
                    "numberSuffix": " ltrs",
                    "showValue": "1",
                    "chartBottomMargin": "25" 
                },
                "value": "110"
            },
            "events":{
                "rendered": function(evtObj, argObj){
                    setInterval(function () {
                        (fuelVolume < 10) ? (fuelVolume = 110) : "";
                        var consVolume = fuelVolume -(Math.floor(Math.random() * 3));
                        FusionCharts("fuelMeter").feedData("&value=" + consVolume);
                        fuelVolume = consVolume;
                    }, 1000);
                    
                    //Format minutes, seconds by adding 0 prefix accordingly
                    function formatTime(time){
                        (time < 10) ? (time = "0"+time) : (time = time);
                        return time;
                    }
                    function showData() {
                        //Retrieving the data
                        var dataVal =  FusionCharts.items["fuelMeter"].getData(),
                            str = "",
                            currDate = new Date(),
                            label = formatTime(currDate.getHours()) +
                            ":" + formatTime(currDate.getMinutes()) +
                            ":" + formatTime(currDate.getSeconds());
                        //Creating the table format
                        str += '<table border="1" cellpadding="1" cellspacing="0" bordercolor="#cccccc" width="100%">';
                        str += '    <tr>';
                        str += '        <td width="50%" class="fontBold valueFont">Current Time</td>';
                        str += '        <td width="50%" class="fontBold valueFont">Available Volume</td>';
                        str += '    </tr>';
                        str += '    <tr>';
                        str += '        <td width="50%" class="valueFont" align="center">'+label+'</td>';
                        str += '        <td width="50%" class="valueFont" align="center">'+dataVal+' ltrs</td>';
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
        }).render();
});
});
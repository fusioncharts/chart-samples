$(window).load(function(){FusionCharts.ready(function () {
    
    var showBtn = document.getElementById('show'),
        clearBtn = document.getElementById('clear'),
        
        showLogger = function(){
            cpuUtil.showLog();            
        },
        
        clearLogger = function(){
            cpuUtil.clearLog();
        }
         
        cpuUtil = new FusionCharts({
        type: 'angulargauge',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Server CPU Utilization",
                "subcaption": "forum.hsm.com",
                "lowerLimit": "0",
                "upperLimit": "100",
                "editMode": "1",
                "showValue": "1",
                "chartBottomMargin": "20",
                "gaugeFillMix": "{dark-30},{light-60},{dark-10}",
                "gaugeFillRatio": "15",
                "valueBelowPivot": "1",                
                "useMessageLog": "1",
                "theme": "fint"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#6baa01"                                                
                    },
                    {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#f8bd19"                        
                    },
                    {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#e44a00"                        
                    }
                ]
            },
            "dials": {
                "dial": [                    
                    {
                        "id": "crntYr",
                        "value": "78",
                        "showValue": "1",                        
                        "tooltext": "Current year's average : $value"                        
                    }
                ]
            }
        },
        events: {
            "rendered" : function (evtObj, argObj){
                var intervalVar = setInterval(function () {
                    var chartIns = evtObj.sender,
                        prcnt = 65 + parseInt( Math.floor(Math.random() * 10), 10),
                        today = new Date(),
                        dd = today && today.getDate(),
                        mm = today && today.getMonth()+1, //January is 0!
                        yyyy = today && today.getFullYear();
                    
                    if(dd<10) {
                        dd='0'+dd
                    } 
                    
                    if(mm<10) {
                        mm='0'+mm
                    } 
                    
                    today = mm+'/'+dd+'/'+yyyy;;
                                       
                    
                    chartIns.feedData("&value="+prcnt+"&msgTitle=OS update on "+today+"&msgText=Server CPU Utilization : "+ prcnt); 
                    
                }, 5000);
            }                
        }
    }).render();
    
    if (showBtn.addEventListener) {
        showBtn.addEventListener("click", showLogger);
        clearBtn.addEventListener("click", clearLogger);
    } else {
        showBtn.onclick && showBtn.onclick(showLogger);
        clearBtn.onclick && clearBtn.onclick(clearLogger);
    }
});});
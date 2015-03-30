$(window).load(function(){FusionCharts.ready(function () {
    
    //method to change state of the table cell
    function changeState(label, bgColor, fontColor){
        var targetId = label.toLowerCase() + '_val';
        document.getElementById(targetId).style['background-color'] = bgColor;
        document.getElementById(targetId).style['color'] = fontColor;        
    };        
    
    var revenueChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of revenue by product categories",
                "subCaption": "Last year",
                "numberPrefix": "$",                
                "theme": "fint"
            },
            "data": [{
                "label": "Food",
                "value": "285040"
            }, {
                "label": "Apparels",
                "value": "146330"
            }, {
                "label": "Electronics",
                "value": "105070"
            }, {
                "label": "Household",
                "value": "49100"
            }]
        },
        events: {
            'slicingStart': function(evtObj, argObj){
                var data = argObj.data,
                    catLabel = data && data.categoryLabel,
                    slicedState = argObj.slicedState,
                    targetColor = !slicedState ? '#6baa01' : '#ffffff',
                    fontColor = !slicedState ? '#ffffff' : '#6baa01',
                    targetTdIndx;
                
                changeState(catLabel, targetColor, fontColor);
                
            }
        }
    }).render();
    
});});
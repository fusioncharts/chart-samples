$(window).load(function(){FusionCharts.ready(function() {
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
                "showPercentValues": "1",
                "showPercentInTooltip": "0",
                //"enableSmartLabels": "1",
                "decimals": "1",
                "skipOverlapLabels": "1",
                //Theme
                "theme": "fint"
            },
            "data": [{
                "label": "Food",
                "value": "285040"
            }, {
                "label": "Apparel",
                "value": "146330"
            }, {
                "label": "Electronics",
                "value": "145070"
            }, {
                "label": "Household",
                "value": "22100"
            }, {
                "label": "Baby",
                "value": "1000"
            }, {
                "label": "Sports",
                "value": "1400"
            }, {
                "label": "Bedding",
                "value": "1700"
            }, {
                "label": "Sanitary",
                "value": "14000"
            }, {
                "label": "Kitchen",
                "value": "9000"
            }, {
                "label": "Car Wash",
                "value": "7500"
            }, {
                "label": "Perfumes",
                "value": "6500"
            }, {
                "label": "Pet Foods",
                "value": "7600"
            }, {
                "label": "Packaged Water",
                "value": "4500"
            }]
        },
        events: {
            'beforeRender': function(evt, args) {
                if (!document.getElementById('controllers')) {
                    var controllers = document.createElement('div'),
                        chartRef = evt.sender,
                        showAll,
                        skipOlp,
                        //Function to change chart type
                        changeLabelManagement = function(event) {
                            var val = event.target.getAttribute('value');
                            val && chartRef.setChartAttribute("skipOverlapLabels", val);
                        };
                    controllers.setAttribute('id', 'controllers');

                    // Create radio button inside div
                    controllers.innerHTML = '<label style="padding: 0 5px; display : inline;"><input name="labelMT" id="skip" type="radio" value="1" checked="true"/> Skip Overlapping Labels</label><label style="padding: 0 5px; display : inline;"><input name="labelMT" id="showall" type="radio" value="0" /> Show All Labels</label>';
                    args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
                    //get the radio buttons
                    showAll = document.getElementById('showall');
                    skipOlp = document.getElementById('skip');
                    // setting css styles for controllers div
                    controllers.style.cssText = "position: inherit;width: 500px;padding: 0 80px;";
                    //Set event listener for check boxes
                    showAll.addEventListener && showAll.addEventListener("click", changeLabelManagement);
                    skipOlp.addEventListener && skipOlp.addEventListener("click", changeLabelManagement);

                }
            }
        }
    }).render();

});
});
$(window).load(function(){FusionCharts.ready(function () {
    var worldMap = new FusionCharts({
        type: 'world',
        renderAt: 'chart-container',
        width: '600',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint"
                    }
            }
    }).render();    
});});